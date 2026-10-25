// Dashboard KPIs, chart aggregates, and the CSV export — all scoped the same
// way as the survey list/detail routes.
import express from 'express';
import { prisma } from '../lib/prisma.js';
import { authenticate, allow, scopeWhere } from '../middleware/auth.js';

const router = express.Router();

// GET /api/dashboard/summary — KPI tiles + the four chart datasets the
// client's Dashboard.jsx renders (areas, tenure, condition, surveyor).
router.get('/summary', authenticate, async (req, res) => {
  const scope = scopeWhere(req.user);

  const [surveyed, verified, incomeAgg, bedridden, indebted] = await Promise.all([
    prisma.survey.count({ where: scope }),
    prisma.survey.count({ where: { ...scope, status: 'VERIFIED' } }),
    prisma.survey.aggregate({ where: scope, _avg: { monthly_household_income: true } }),
    prisma.survey.count({ where: { ...scope, bedridden: true } }),
    prisma.survey.count({ where: { ...scope, loan_amount: { gt: 0 } } }),
  ]);

  const kpis = {
    surveyed,
    verified,
    avg_income: Math.round(Number(incomeAgg._avg.monthly_household_income || 0)),
    bedridden,
    indebted,
  };

  // Coverage per area — limited to the area(s) this user is allowed to see.
  const visibleAreas = await prisma.area.findMany({
    where: req.user.role === 'ADMIN' ? {} : { id: req.user.areaId },
    select: { id: true, name: true, target_households: true },
  });
  const surveysPerArea = await prisma.survey.groupBy({
    by: ['area_id'],
    where: scope,
    _count: { id: true },
  });
  const countByAreaId = Object.fromEntries(surveysPerArea.map((r) => [r.area_id, r._count.id]));
  const areas = visibleAreas.map((a) => ({
    name: a.name,
    surveyed: countByAreaId[a.id] || 0,
    target_households: a.target_households,
  }));

  // Simple "group by column, count rows" breakdowns for the pie/bar charts.
  const [tenureGroups, conditionGroups, surveyorGroups] = await Promise.all([
    prisma.survey.groupBy({ by: ['house_tenure'], where: scope, _count: { id: true } }),
    prisma.survey.groupBy({ by: ['house_condition'], where: scope, _count: { id: true } }),
    prisma.survey.groupBy({ by: ['surveyor_id'], where: scope, _count: { id: true } }),
  ]);

  const tenure = tenureGroups.map((g) => ({ name: g.house_tenure || 'Not recorded', value: g._count.id }));
  const condition = conditionGroups.map((g) => ({ name: g.house_condition || 'Not recorded', value: g._count.id }));

  const surveyorNames = await prisma.user.findMany({
    where: { id: { in: surveyorGroups.map((g) => g.surveyor_id) } },
    select: { id: true, name: true },
  });
  const nameBySurveyorId = Object.fromEntries(surveyorNames.map((u) => [u.id, u.name]));
  const surveyor = surveyorGroups.map((g) => ({ name: nameBySurveyorId[g.surveyor_id], value: g._count.id }));

  res.json({ kpis, areas, tenure, condition, surveyor });
});

// GET /api/dashboard/export.csv — admin/supervisor only, scoped like everything else.
router.get('/export.csv', authenticate, allow('ADMIN', 'SUPERVISOR'), async (req, res) => {
  const rows = await prisma.survey.findMany({
    where: scopeWhere(req.user),
    select: {
      survey_code: true,
      head_name: true,
      phone: true,
      status: true,
      surveyed_at: true,
      monthly_household_income: true,
      loan_amount: true,
    },
  });

  const escapeCsvValue = (v) => `"${String(v ?? '').replaceAll('"', '""')}"`;
  const header = rows.length ? Object.keys(rows[0]) : [];
  const lines = [
    header.join(','),
    ...rows.map((row) => Object.values(row).map(escapeCsvValue).join(',')),
  ];

  res.type('text/csv').send(lines.join('\n'));
});

export default router;
