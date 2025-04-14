import { db } from "../db/drizzle";
import { collegePrograms } from "../db/schema";
import { eq } from "drizzle-orm";

// Add a new program to a specific college.
export const addProgramToCollege = async (
  collegeId: string,
  program: { name: string } // Expecting the program name; adjust if you need additional details.
) => {
  await db.insert(collegePrograms).values({
    college_id: collegeId,
    program: program.name
  }).execute();
  return getProgramsByCollege(collegeId);
};

export const getProgramsByCollege = async (collegeId: string) => {
  const programs = await db.select().from(collegePrograms)
    .where(eq(collegePrograms.college_id, collegeId))
    .execute();
  return programs.map(p => p.program);
};
