// Seeds the same demo data as the original database/02-seed.sql: two areas,
// one user per role, and the default dashboard chart configuration.
// Run with `npx prisma db seed` (or automatically after `prisma migrate dev`
// / `migrate reset`, since it's registered under "prisma.seed" in package.json).
import { PrismaClient } from '../src/generated/prisma/index.js';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const [newTown, fortArea] = await Promise.all([
    prisma.area.upsert({
      where: { ward_code: 'WARD-01' },
      update: {},
      create: { name: 'New Town Mohalla', ward_code: 'WARD-01', target_households: 250 },
    }),
    prisma.area.upsert({
      where: { ward_code: 'WARD-02' },
      update: {},
      create: { name: 'Fort Area Mohalla', ward_code: 'WARD-02', target_households: 180 },
    }),
  ]);

  const demoUsers = [
    { name: 'MAP Administrator', email: 'admin@map.local', password: 'Admin@123', role: 'ADMIN', area_id: null },
    { name: 'Area Supervisor', email: 'supervisor@map.local', password: 'Supervisor@123', role: 'SUPERVISOR', area_id: newTown.id },
    { name: 'Field Surveyor', email: 'surveyor@map.local', password: 'Surveyor@123', role: 'SURVEYOR', area_id: newTown.id },
  ];

  for (const u of demoUsers) {
    const password_hash = await bcrypt.hash(u.password, 10);
    await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: { name: u.name, email: u.email, password_hash, role: u.role, area_id: u.area_id },
    });
  }

  const chartConfigs = [
    { title: 'Housing Tenure', metric_key: 'house_tenure', chart_type: 'pie', display_order: 1 },
    { title: 'House Condition', metric_key: 'house_condition', chart_type: 'bar', display_order: 2 },
    { title: 'Income Bands', metric_key: 'income_band', chart_type: 'bar', display_order: 3 },
    { title: 'Document Coverage', metric_key: 'document_coverage', chart_type: 'bar', display_order: 4 },
  ];

  for (const c of chartConfigs) {
    const existing = await prisma.chartConfig.findFirst({ where: { metric_key: c.metric_key } });
    if (!existing) await prisma.chartConfig.create({ data: c });
  }

  console.log('Seed complete: 2 areas, 3 demo users, 4 chart configs.');
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
