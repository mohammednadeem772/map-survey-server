// Seeds the same demo data as the original database/02-seed.sql: two areas,
// one user per role, and the default dashboard chart configuration.
// Run with `npx prisma db seed` (or automatically after `prisma migrate dev`
// / `migrate reset`, since it's registered under "prisma.seed" in package.json).
import { PrismaClient } from '../src/generated/prisma/index.js';
import bcrypt from 'bcrypt';
import { DROPDOWN_SEED } from '../src/lib/dropdownCategories.js';

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

  // Real production admins (not demo accounts) — set via SEED_ADMIN_* env vars so the
  // password never lives in source control; falls back to the old local-dev demo admin
  // when those aren't set, so `npm run seed` still works for a fresh local DB.
  const adminUsers = process.env.SEED_ADMIN_EMAILS
    ? process.env.SEED_ADMIN_EMAILS.split(',').map((email, i) => ({
        name: (process.env.SEED_ADMIN_NAMES || '').split(',')[i]?.trim() || email.trim(),
        email: email.trim(),
        password: process.env.SEED_ADMIN_PASSWORDS.split(',')[i].trim(),
        role: 'ADMIN',
        area_id: null,
      }))
    : [{ name: 'MAP Administrator', email: 'admin@map.local', password: 'Admin@123', role: 'ADMIN', area_id: null }];

  for (const u of adminUsers) {
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

  let optionCount = 0;
  for (const [category, values] of Object.entries(DROPDOWN_SEED)) {
    for (const [index, value] of values.entries()) {
      await prisma.dropdownOption.upsert({
        where: { category_value: { category, value } },
        update: {},
        create: { category, value, sort_order: index },
      });
      optionCount += 1;
    }
  }

  console.log(`Seed complete: 2 areas, ${adminUsers.length} admin user(s), 4 chart configs, ${optionCount} dropdown options.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
