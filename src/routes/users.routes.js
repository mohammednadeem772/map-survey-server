// User management — admin only.
import express from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../lib/prisma.js';
import { authenticate, allow } from '../middleware/auth.js';

const router = express.Router();

// GET /api/users — list everyone with their area name attached.
router.get('/', authenticate, allow('ADMIN'), async (req, res) => {
  const users = await prisma.user.findMany({
    orderBy: { name: 'asc' },
    include: { area: { select: { name: true } } },
  });

  // Flatten `area.name` to `area_name` and drop the password hash to match
  // the client's expected shape (client/src/pages/Admin.jsx reads `x.area_name`).
  const rows = users.map(({ area, password_hash, ...u }) => ({
    ...u,
    area_name: area?.name ?? null,
  }));

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

export default router;
