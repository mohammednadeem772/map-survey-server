// User management — admin only.
import express from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../lib/prisma.js';
import { authenticate, allow } from '../middleware/auth.js';

const router = express.Router();

// GET /api/users — list everyone with their area name attached. Explicitly
// selected (rather than returning every scalar) so password_hash and other
// internal columns never leave the server.
router.get('/', authenticate, allow('ADMIN'), async (req, res) => {
  const users = await prisma.user.findMany({
    orderBy: { name: 'asc' },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      active: true,
      area: { select: { name: true } },
    },
  });

  // Flatten `area.name` to `area_name` to match the client's expected row
  // shape (client/src/pages/Admin.jsx reads `x.area_name`).
  const rows = users.map(({ area, ...u }) => ({ ...u, area_name: area?.name ?? null }));

  res.json(rows);
});

// POST /api/users — create a user with a hashed password.
router.post('/', authenticate, allow('ADMIN'), async (req, res) => {
  const { name, email, password, role, area_id } = req.body;
  const password_hash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, password_hash, role, area_id: area_id || null },
  });

  res.status(201).json({ id: user.id });
});

// DELETE /api/users/:id — admin only. This is a soft delete (active:false),
// not a row removal: a user can be the surveyor on existing survey rows
// (Survey.surveyor_id has no onDelete cascade/set-null), so hard-deleting
// anyone with survey history would fail a foreign-key constraint. Setting
// active:false keeps their history intact and blocks their login (see the
// `!u.active` check in routes/auth.routes.js) without losing data.
router.delete('/:id', authenticate, allow('ADMIN'), async (req, res) => {
  const id = Number(req.params.id);

  if (id === req.user.id) {
    return res.status(400).json({ message: 'You cannot deactivate your own account' });
  }

  const result = await prisma.user.updateMany({ where: { id }, data: { active: false } });
  if (result.count === 0) return res.status(404).json({ message: 'User not found' });

  res.json({ deactivated: true });
});

// PUT /api/users/:id/reactivate — admin only. Undoes the soft delete above.
router.put('/:id/reactivate', authenticate, allow('ADMIN'), async (req, res) => {
  const id = Number(req.params.id);
  const result = await prisma.user.updateMany({ where: { id }, data: { active: true } });
  if (result.count === 0) return res.status(404).json({ message: 'User not found' });

  res.json({ activated: true });
});

export default router;
