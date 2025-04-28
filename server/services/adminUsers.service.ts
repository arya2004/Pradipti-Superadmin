import { db } from '../db/drizzle';
import { adminUsers } from '../db/schema';
import { eq } from 'drizzle-orm';

export const updateAdminUser = async (user_id: string, data: { user_id?: string; user_name?: string }) => {
  return db.update(adminUsers).set(data).where(eq(adminUsers.user_id, user_id));
};

export const deleteAdminUser = async (user_id: string) => {
  return db.delete(adminUsers).where(eq(adminUsers.user_id, user_id));
};