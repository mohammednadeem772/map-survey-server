// Household survey CRUD. This is the core of the app: every list/detail/
// write here must stay scoped through `scopeWhere(req.user)` so a surveyor
// or supervisor can never read or edit a record outside their access level.
import express from 'express';
import { prisma } from '../lib/prisma.js';
import { authenticate, scopeWhere } from '../middleware/auth.js';
import { pickSurveyData, toDependantCreate } from '../lib/surveyData.js';

const router = express.Router();

// GET /api/surveys — list view, scoped to the caller's role.
router.get('/', authenticate, async (req, res) => {
  const surveys = await prisma.survey.findMany({
    where: scopeWhere(req.user),
    orderBy: { updated_at: 'desc' },
    select: {
      id: true,
      survey_code: true,
      head_name: true,
      phone: true,
      status: true,
      surveyed_at: true,
      area: { select: { name: true } },
      surveyor: { select: { name: true } },
    },
  });

  // Flatten the relation names to match the client's expected row shape.
  const rows = surveys.map(({ area, surveyor, ...s }) => ({
    ...s,
    area_name: area.name,
    surveyor_name: surveyor.name,
  }));

  res.json(rows);
});

// GET /api/surveys/:id — full detail including dependants, scoped.
router.get('/:id', authenticate, async (req, res) => {
  const survey = await prisma.survey.findFirst({
    where: { id: Number(req.params.id), ...scopeWhere(req.user) },
    include: { dependants: true },
  });

  if (!survey) return res.status(404).json({ message: 'Survey not found' });
  res.json(survey);
});

// POST /api/surveys — create a survey and its dependants together. Prisma
// runs nested writes (survey + dependants.create) in a single transaction.
router.post('/', authenticate, async (req, res) => {
  const body = { ...req.body };

  // Non-admins can only ever file surveys under their own assigned area.
  if (req.user.role !== 'ADMIN') body.area_id = req.user.areaId;

  const surveyCode = `MAP-${Date.now().toString(36).toUpperCase()}`;

  const survey = await prisma.survey.create({
    data: {
      ...pickSurveyData(body),
      survey_code: surveyCode,
      surveyor_id: req.user.id,
      dependants: { create: (body.dependants || []).map(toDependantCreate) },
    },
  });

  res.status(201).json({ id: survey.id, survey_code: survey.survey_code });
});

// PUT /api/surveys/:id — update scalar fields and replace the dependant list,
// scoped so a caller can't edit a survey outside their access level.
router.put('/:id', authenticate, async (req, res) => {
  const id = Number(req.params.id);

  const existing = await prisma.survey.findFirst({
    where: { id, ...scopeWhere(req.user) },
    select: { id: true },
  });
  if (!existing) return res.status(404).json({ message: 'Survey not found' });

  const data = pickSurveyData(req.body);

  // Replace dependants wholesale only when the client actually sent a list —
  // nested deleteMany + create run atomically as part of this one update.
  if (req.body.dependants) {
    data.dependants = {
      deleteMany: {},
      create: req.body.dependants.map(toDependantCreate),
    };
  }

  await prisma.survey.update({ where: { id }, data });
  res.json({ updated: true });
});

export default router;
