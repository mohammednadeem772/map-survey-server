// Entry point: load environment, optionally run migrations/seed/demo
// passwords, start listening.
import 'dotenv/config';
import { execSync } from 'node:child_process';
import bcrypt from 'bcrypt';
import { app } from './app.js';
import { prisma } from './lib/prisma.js';

const DEMO_ACCOUNTS = [
  ['admin@map.local', 'Admin@123'],
  ['supervisor@map.local', 'Supervisor@123'],
  ['surveyor@map.local', 'Surveyor@123'],
];

/**
 * For local/demo environments only: resets the three documented demo
 * accounts' passwords on every startup. Set SEED_DEMO_USERS=false (the
 * production default) once real passwords have been chosen, otherwise
 * they get reset back to the defaults on the next restart.
 */
async function seedDemoUsersIfEnabled() {
  if (process.env.SEED_DEMO_USERS !== 'true') return;

  for (const [email, password] of DEMO_ACCOUNTS) {
    const password_hash = await bcrypt.hash(password, 10);
    await prisma.user.updateMany({ where: { email }, data: { password_hash } });
  }
}

/**
 * For hosts with no shell access (e.g. cPanel's Node.js App UI with no
 * Terminal): set RUN_MIGRATIONS_ON_BOOT=true in the app's environment
 * variables and restart the app to apply any pending Prisma migrations.
 * `prisma migrate deploy` only applies migrations not yet recorded as run,
 * so this is safe to leave on across restarts, though turning it back off
 * once the database is up to date avoids the extra startup work.
 */
function runMigrationsIfEnabled() {
  if (process.env.RUN_MIGRATIONS_ON_BOOT !== 'true') return;
  console.log('Applying pending Prisma migrations...');
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });
}

/**
 * Same no-shell-access rationale as above: set RUN_SEED_ON_BOOT=true once to
 * populate the demo areas/users/chart-configs (see prisma/seed.js — it uses
 * upsert, so running it more than once is harmless), then turn it back off.
 */
function runSeedIfEnabled() {
  if (process.env.RUN_SEED_ON_BOOT !== 'true') return;
  console.log('Running the database seed...');
  execSync('node prisma/seed.js', { stdio: 'inherit' });
}

async function start() {
  runMigrationsIfEnabled();
  runSeedIfEnabled();
  await seedDemoUsersIfEnabled();

  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`MAP API listening on ${port}`));
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
