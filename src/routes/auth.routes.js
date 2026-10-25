// Login + "who am I" endpoints.
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// POST /api/auth/login — verify credentials, return a JWT + the public user shape.
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  const validPassword = user && (await bcrypt.compare(password, user.password_hash));

  if (!user || !user.active || !validPassword) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Keep the token payload small and free of the password hash.
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    areaId: user.area_id,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' });
  res.json({ token, user: payload });
});

// GET /api/auth/me — returns the decoded token payload for the current session.
router.get('/me', authenticate, (req, res) => res.json(req.user));

export default router;
