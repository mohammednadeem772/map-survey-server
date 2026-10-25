// Areas (mohalla / ward) management.
import express from 'express';
import { prisma } from '../lib/prisma.js';
import { authenticate, allow } from '../middleware/auth.js';

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
  const { name, ward_code, target_households = 0 } = req.body;

  const area = await prisma.area.create({
    data: { name, ward_code, target_households },
  });

  res.status(201).json({ id: area.id });
});

export default router;
