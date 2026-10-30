// Admin-manageable dropdown option lists for the survey form. Any
// authenticated user can read them (every role fills out surveys); only an
// admin can add, deactivate, or reactivate a value.
import express from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { authenticate, allow } from '../middleware/auth.js';
import { safeValidate } from '../lib/validation.js';
import { DROPDOWN_CATEGORIES } from '../lib/dropdownCategories.js';

const router = express.Router();

const createSchema = z.object({
  category: z.enum(DROPDOWN_CATEGORIES, { message: 'Unknown category' }),
  value: z.string().trim().min(1, 'Value is required').max(150),
});

// GET /api/dropdown-options — every active option, grouped by category and
// ordered the way the form should display it, in one call (the form has ~20
// of these fields; one request beats one per dropdown).
// GET /api/dropdown-options?includeInactive=true — admin only, for the
// management screen: also returns deactivated values (with `active: false`)
// so an admin can see and reactivate them instead of recreating from scratch.
router.get('/', authenticate, async (req, res) => {
  const includeInactive = req.query.includeInactive === 'true' && req.user.role === 'ADMIN';

  const rows = await prisma.dropdownOption.findMany({
    where: includeInactive ? {} : { active: true },
    orderBy: [{ category: 'asc' }, { sort_order: 'asc' }, { value: 'asc' }],
  });

  const grouped = {};
  for (const category of DROPDOWN_CATEGORIES) grouped[category] = [];
  for (const row of rows) {
    if (!grouped[row.category]) grouped[row.category] = [];
    grouped[row.category].push({ id: row.id, value: row.value, active: row.active });
  }

  res.json(grouped);
});

// POST /api/dropdown-options — admin only. Appends to the end of its
// category (next sort_order), case-insensitively rejecting a duplicate
// so "Teacher" and "teacher" can't both end up in the same list.
router.post('/', authenticate, allow('ADMIN'), async (req, res) => {
  const { data, error } = safeValidate(createSchema, req.body);
  if (error) return res.status(400).json({ message: error });

  const existing = await prisma.dropdownOption.findMany({ where: { category: data.category } });
  const duplicate = existing.find((o) => o.value.toLowerCase() === data.value.toLowerCase());
  if (duplicate) {
    if (duplicate.active) return res.status(409).json({ message: 'This value already exists in that list' });
    // Reviving a previously-deactivated value instead of erroring, since
    // the (category, value) pair is unique at the database level.
    await prisma.dropdownOption.update({ where: { id: duplicate.id }, data: { active: true } });
    return res.status(201).json({ id: duplicate.id });
  }

  const nextOrder = existing.reduce((max, o) => Math.max(max, o.sort_order), -1) + 1;
  const option = await prisma.dropdownOption.create({
    data: { category: data.category, value: data.value, sort_order: nextOrder },
  });

  res.status(201).json({ id: option.id });
});

// DELETE /api/dropdown-options/:id — admin only. Soft delete: existing
// survey rows may already have recorded this exact value as free-standing
// text (there's no foreign key from Survey to DropdownOption), so removing
// it from future dropdowns must never touch historical data.
router.delete('/:id', authenticate, allow('ADMIN'), async (req, res) => {
  const id = Number(req.params.id);
  const result = await prisma.dropdownOption.updateMany({ where: { id }, data: { active: false } });
  if (result.count === 0) return res.status(404).json({ message: 'Option not found' });
  res.json({ deactivated: true });
});

// PUT /api/dropdown-options/:id/reactivate — admin only. Undoes the above.
router.put('/:id/reactivate', authenticate, allow('ADMIN'), async (req, res) => {
  const id = Number(req.params.id);
  const result = await prisma.dropdownOption.updateMany({ where: { id }, data: { active: true } });
  if (result.count === 0) return res.status(404).json({ message: 'Option not found' });
  res.json({ activated: true });
});

export default router;
