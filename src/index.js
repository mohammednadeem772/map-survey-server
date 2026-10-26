// Entry point: load environment, optionally run migrations/seed/demo
// passwords, start listening.
import 'dotenv/config';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { app } from './app.js';
import { prisma } from './lib/prisma.js';
import bcrypt from 'bcrypt';

// Resolved from this file's own location on disk, not from process.cwd() —
// on this app's cPanel host, the working directory the Node.js Selector
// actually starts the process with doesn't reliably match the application
// root (the same quirk that makes cPanel's "Run NPM Install" button run the
// postinstall hook from the wrong folder). Anything below that shells out to
// the Prisma CLI passes an explicit `cwd`/`--schema` computed from here
// rather than trusting an inherited working directory.
const SERVER_ROOT = dirname(dirname(fileURLToPath(import.meta.url))); // .../src/.. = the server/ folder
const SCHEMA_PATH = join(SERVER_ROOT, 'prisma', 'schema.prisma');

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
 *
 * Unlike `prisma generate` (query engine, bundled — see
 * prisma/schema.prisma), `migrate deploy` needs a separate engine binary
 * that isn't pre-bundled here. On a host with restricted/slow outbound
 * network access this can hang the same way `generate` used to. If so,
 * don't rely on this — instead run the migration SQL (inside the
 * prisma/migrations folder) directly via phpMyAdmin (or any MySQL client)
 * once; the running app only needs the tables to exist, it never reads
 * Prisma's own migration-tracking table at request time.
 */
function runMigrationsIfEnabled() {
  if (process.env.RUN_MIGRATIONS_ON_BOOT !== 'true') return;
  console.log('Applying pending Prisma migrations...');
  execSync(`npx prisma migrate deploy --schema="${SCHEMA_PATH}"`, { stdio: 'inherit', cwd: SERVER_ROOT });
}

/**
 * Same no-shell-access rationale as above: set RUN_SEED_ON_BOOT=true once to
 * populate the demo areas/users/chart-configs (see prisma/seed.js — it uses
 * upsert, so running it more than once is harmless), then turn it back off.
 * This only uses the already-bundled query engine (via our own PrismaClient),
 * not the Prisma CLI, so it doesn't have the same network dependency as
 * `migrate deploy` above.
 */
function runSeedIfEnabled() {
  if (process.env.RUN_SEED_ON_BOOT !== 'true') return;
  console.log('Running the database seed...');
  execSync('node prisma/seed.js', { stdio: 'inherit', cwd: SERVER_ROOT });
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
