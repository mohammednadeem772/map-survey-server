// Express app setup: global middleware, route mounting, error handling.
// Kept separate from src/index.js so tests can import the app without
// starting a real HTTP listener.
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { prisma } from './lib/prisma.js';

import authRoutes from './routes/auth.routes.js';
import areasRoutes from './routes/areas.routes.js';
import usersRoutes from './routes/users.routes.js';
import surveysRoutes from './routes/surveys.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';
import chartConfigsRoutes from './routes/chartConfigs.routes.js';
import dropdownOptionsRoutes from './routes/dropdownOptions.routes.js';

export const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(',') }));
app.use(express.json({ limit: '2mb' }));

// Simple DB connectivity check used by Docker/monitoring.
app.get('/api/health', async (req, res) => {
  await prisma.$queryRaw`SELECT 1`;
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/areas', areasRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/surveys', surveysRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/chart-configs', chartConfigsRoutes);
app.use('/api/dropdown-options', dropdownOptionsRoutes);

// Catch-all error handler. Never leak internals (stack traces, Prisma error
// shapes) to the client — this app stores sensitive household data.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Unexpected server error' });
});
