// Admin-only configuration for which charts appear on the dashboard.
import express from 'express';
import { prisma } from '../lib/prisma.js';
import { authenticate, allow } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticate, allow('ADMIN'), async (req, res) => {
  const configs = await prisma.chartConfig.findMany({ orderBy: { display_order: 'asc' } });
  res.json(configs);
});

router.post('/', authenticate, allow('ADMIN'), async (req, res) => {
  const { title, metric_key, chart_type, enabled = true, display_order = 0 } = req.body;

  const config = await prisma.chartConfig.create({
    data: { title, metric_key, chart_type, enabled, display_order },
  });

  res.status(201).json({ id: config.id });
});

export default router;
