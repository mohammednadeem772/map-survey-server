// Areas (mohalla / ward) management.
import express from 'express';
import { prisma } from '../lib/prisma.js';
import { authenticate, allow } from '../middleware/auth.js';
import { areaSchema, safeValidate } from '../lib/validation.js';

const router = express.Router();

// GET /api/areas — admins see every active area; everyone else sees only
// the single area they are assigned to.
router.get('/', authenticate, async (req, res) => {
  const where =
    req.user.role === 'ADMIN'
      ? { active: true }
      : { active: true, id: req.user.areaId };

  const areas = await prisma.area.findMany({ where });
  res.json(areas);
});

// POST /api/areas — admin only.
router.post('/', authenticate, allow('ADMIN'), async (req, res) => {
  const { data, error } = safeValidate(areaSchema, req.body);
  if (error) return res.status(400).json({ message: error });

  const area = await prisma.area.create({
    data: { name: data.name, ward_code: data.ward_code, target_households: data.target_households ?? 0 },
  });

  res.status(201).json({ id: area.id });
});

export default router;
