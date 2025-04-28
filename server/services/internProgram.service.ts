import { db } from "../db/drizzle";
import { programs_intern } from "../db/schema";
import { eq } from "drizzle-orm";

export const createInternProgram = async (program: {
  id: string;
  name: string;
  applications: number;
  slotsRemaining: string;
}) => {
  await db.insert(programs_intern).values({ ...program }).execute();
  return getInternProgramById(program.id);
};

export const getInternProgramById = async (programId: string) => {
  const result = await db.select().from(programs_intern)
    .where(eq(programs_intern.id, programId))
    .execute();
  return result[0];
};

export const getAllInternPrograms = async () => {
  return await db.select().from(programs_intern).execute();
};

export const updateInternProgram = async (id: string, data: { 
  id?: string; 
  name?: string; 
  applications?: number; 
  slotsRemaining?: string; 
}) => {
  return db.update(programs_intern).set(data).where(eq(programs_intern.id, id));
};

export const deleteInternProgram = async (id: string) => {
  return db.delete(programs_intern).where(eq(programs_intern.id, id));
};
