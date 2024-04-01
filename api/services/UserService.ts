import { PrismaClient, users } from '@prisma/client';

const db = new PrismaClient();

export async function getUser(email: string) {
  return await db.users.findUnique({ where: { email } });
}

export async function makeUser(email: string, password: string) {
  return await db.users.create({ data: { email, password } });
}

export default { getUser, makeUser };
