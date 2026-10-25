// Shared Prisma client. Prisma pools connections internally, so the app
// should create exactly one PrismaClient and reuse it everywhere (creating
// one per request would exhaust the database's connection limit).
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
