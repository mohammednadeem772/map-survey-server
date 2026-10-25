// Household survey CRUD. This is the core of the app: every list/detail/
// write here must stay scoped through `scopeWhere(req.user)` so a surveyor
// or supervisor can never read or edit a record outside their access level.
import express from 'express';
import { prisma } from '../lib/prisma.js';
import { authenticate, scopeWhere } from '../middleware/auth.js';

const router = express.Router();

// All the survey columns a client is allowed to write. Kept as a list (rather
// than trusting req.body wholesale) so a request can't inject columns like
// `id` or `surveyor_id` through the generic update path.
const WRITABLE_FIELDS = [
  'area_id', 'status', 'consent_given',
  'head_name', 'head_age', 'head_gender', 'head_marital_status', 'head_education',
  'head_occupation', 'head_skill', 'head_namaz', 'head_income',
  'address', 'phone', 'latitude', 'longitude',
  'spouse_name', 'spouse_age', 'spouse_education', 'spouse_occupation', 'spouse_skill',
  'spouse_namaz', 'spouse_income',
  'house_tenure', 'house_condition', 'rooms', 'toilet_access', 'drinking_water', 'electricity_access',
  'loan_types', 'loan_amount', 'govt_scheme_availed', 'govt_scheme_names', 'govt_scheme_amount',
  'bedridden', 'bedridden_monthly_expense',
  'ration_card', 'aadhaar_status', 'health_card', 'bank_account', 'voter_id_status',
  'vehicles', 'fridge', 'television', 'tv_connection', 'tv_type', 'washing_machine',
  'smartphone_access', 'internet_access',
  'monthly_household_income', 'monthly_household_expense', 'food_security', 'vulnerable_category',
  'notes',
];

// These are JSON array columns — default a falsy value to [] instead of null,
// matching the shape the client always expects back (see SurveyForm.jsx `parse`).
const JSON_ARRAY_FIELDS = new Set(['loan_types', 'vehicles', 'vulnerable_category']);

/** Picks only the whitelisted, present fields out of a request body. */
function pickSurveyData(body) {
  const data = {};
  for (const field of WRITABLE_FIELDS) {
    if (body[field] === undefined) continue;
    data[field] = JSON_ARRAY_FIELDS.has(field) ? body[field] || [] : body[field];
  }
  return data;
}

/** Shapes one dependant row for Prisma's nested create. */
function toDependantCreate(d) {
  return {
    name: d.name,
    age: d.age || null,
    relationship: d.relationship || null,
    gender: d.gender || null,
    member_type: d.member_type || 'DEPENDANT',
    education: d.education || null,
    institution: d.institution || null,
    part_time_job: !!d.part_time_job,
    scholarship_availed: d.scholarship_availed || null,
    occupation: d.occupation || null,
    skill: d.skill || null,
    namaz: d.namaz || null,
    income: d.income || 0,
    disability_or_health_need: d.disability_or_health_need || null,
  };
}

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
