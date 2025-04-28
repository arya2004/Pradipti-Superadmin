import { db } from '../db/drizzle';
import { college_program_details } from '../db/schema';
import { eq } from 'drizzle-orm';

export const updateCollegeProgramDetails = async (
  id: number,
  data: Partial<{ college_id?: string; name?: string; code?: string; fullName?: string }>
) => {
  return db.update(college_program_details).set(data).where(eq(college_program_details.id, id));
};

export const deleteCollegeProgramDetails = async (id: number) => {
  return db.delete(college_program_details).where(eq(college_program_details.id, id));
};