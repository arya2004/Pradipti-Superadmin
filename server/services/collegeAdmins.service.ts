import { db } from '../db/drizzle';
import { college_admins } from '../db/schema';
import { eq } from 'drizzle-orm';

export const updateCollegeAdmin = async (
  id: number,
  data: Partial<{ college_id?: string; name?: string; email?: string; dateAdded?: string; role?: string }>
) => {
  return db.update(college_admins).set(data).where(eq(college_admins.id, id));
};

export const deleteCollegeAdmin = async (id: number) => {
  return db.delete(college_admins).where(eq(college_admins.id, id));
};