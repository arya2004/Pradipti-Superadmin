import { db } from "../db/drizzle";
import { program_details } from "../db/schema";
import { eq } from "drizzle-orm";

export const createProgramDetails = async (details: {
  courseCode: string;
  title: string;
  startDate: string;
  duration: string;
  location: string;
  applyBy: string;
  img?: string;
  description: string;
}) => {
  await db.insert(program_details).values(details).execute();
  return getProgramDetails(details.courseCode);
};

export const getProgramDetails = async (courseCode: string) => {
  const result = await db.select().from(program_details)
    .where(eq(program_details.courseCode, courseCode))
    .execute();
  return result[0];
};

export const updateProgramDetails = async (courseCode: string, data: Partial<{
  description?: string;
  courseCode?: string;
  title?: string;
  startDate?: string;
  duration?: string;
  location?: string;
  applyBy?: string;
  img?: string;
}>) => {
  return db.update(program_details).set(data).where(eq(program_details.courseCode, courseCode));
};

export const deleteProgramDetails = async (courseCode: string) => {
  return db.delete(program_details).where(eq(program_details.courseCode, courseCode));
};
