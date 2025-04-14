import { db } from "../db/drizzle";
import { eq } from "drizzle-orm";
import { colleges, collegePrograms } from "../db/schema";

// Create a college and insert its related program codes into the collegePrograms table.
export const createCollege = async (college: {
  id: string;
  name: string;
  state: string;
  city: string;
  status: string;
  programs: string[]; // Example: ["FP", "BPI", "IP"]
}) => {
  // Insert the college record
  await db.insert(colleges).values({
    id: college.id,
    name: college.name,
    state: college.state,
    city: college.city,
    status: college.status,
    created_at: new Date(),
    updated_at: new Date()
  }).execute();

  // Insert each program code for this college
  for (const prog of college.programs) {
    await db.insert(collegePrograms).values({
      college_id: college.id,
      program: prog
    }).execute();
  }

  // Return the complete record via the GET function so that it includes the joined programs.
  return getCollegeById(college.id);
};

// Fetch all colleges and for each, retrieve its list of programs
export const getAllColleges = async () => {
  const collegeList = await db.select().from(colleges).execute();
  const result = await Promise.all(
    collegeList.map(async (college) => {
      const programs = await db
        .select()
        .from(collegePrograms)
        .where(eq(collegePrograms.college_id, college.id))
        .execute();
      return {
        ...college,
        programs: programs.map(p => p.program) // Return an array of program codes as in the mock
      };
    })
  );
  return result;
};

// Fetch a single college by ID with its programs array populated.
export const getCollegeById = async (collegeId: string) => {
  const [college] = await db.select().from(colleges).where(eq(colleges.id, collegeId)).execute();
  if (!college) return null;
  const programs = await db
    .select()
    .from(collegePrograms)
    .where(eq(collegePrograms.college_id, collegeId))
    .execute();
  return {
    ...college,
    programs: programs.map(p => p.program)
  };
};
