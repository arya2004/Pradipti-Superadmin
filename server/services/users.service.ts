import { db } from "../db/drizzle";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";

export const createUser = async (user: {
  email: string;
  name: string;
  role: string;
}) => {
  await db.insert(users).values(user).execute();
  return getUser(user.email);
};

export const getUser = async (email: string) => {
  const result = await db.select().from(users)
    .where(eq(users.email, email))
    .execute();
  return result[0];
};
