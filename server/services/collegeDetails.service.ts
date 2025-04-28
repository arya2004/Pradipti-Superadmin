import { db } from '../db/drizzle';
import { college_details } from '../db/schema';
import { eq } from 'drizzle-orm';

export const updateCollegeDetails = async (id: string, data: Partial<{ id?: string; name?: string; location?: string; email?: string; registeredStudents?: number; created_at?: Date; updated_at?: Date }>) => {
  return db.update(college_details).set(data).where(eq(college_details.id, id));
};

export const deleteCollegeDetails = async (id: string) => {
  return db.delete(college_details).where(eq(college_details.id, id));
};