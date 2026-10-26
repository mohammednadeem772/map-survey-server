// Shared Prisma client. Prisma pools connections internally, so the app
// should create exactly one PrismaClient and reuse it everywhere (creating
// one per request would exhaust the database's connection limit).
//
// Imported from the generated output in src/generated/prisma (not the usual
// `@prisma/client` package) — that folder is committed to git, engine binary
// included, because the production host can't reliably run `prisma generate`
// itself. See prisma/schema.prisma's generator block for the full reason.
import { PrismaClient } from '../generated/prisma/index.js';

export const prisma = new PrismaClient();
