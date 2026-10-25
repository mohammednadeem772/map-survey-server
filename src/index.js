// Entry point: load environment, optionally seed demo passwords, start listening.
import 'dotenv/config';
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

async function start() {
  await seedDemoUsersIfEnabled();

  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`MAP API listening on ${port}`));
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
