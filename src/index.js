// Entry point: load environment, ensure the Prisma Client is generated,
// then optionally run migrations/seed/demo passwords, and start listening.
import 'dotenv/config';
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

// The Prisma Client's generated code must exist before any module does
// `import { PrismaClient } from '@prisma/client'` and instantiates it — see
// lib/prisma.js, which does that at module-load time. On some hosts (e.g.
// cPanel's "Run NPM Install" button) the `postinstall: prisma generate` hook
// in package.json runs with the wrong working directory and silently fails
// to produce it, even though the rest of `npm install` succeeds. So: check
// for it here and generate it ourselves if missing, before importing
// anything that depends on it.
//
// This has to happen via a dynamic `import()` below rather than the usual
// static `import ... from` at the top of the file — static ESM imports are
// all resolved before any other code in a module runs, which would run this
// check too late to matter.
const prismaClientDir = new URL('../node_modules/.prisma/client', import.meta.url);
if (!existsSync(prismaClientDir)) {
  console.log('Prisma Client not found — generating it now...');
  execSync('npx prisma generate', { stdio: 'inherit' });
}

const { app } = await import('./app.js');
const { prisma } = await import('./lib/prisma.js');
const { default: bcrypt } = await import('bcrypt');

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
