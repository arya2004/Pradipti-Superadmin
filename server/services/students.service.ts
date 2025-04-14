import { db } from "../db/drizzle";
import { students } from "../db/schema";
import { eq } from "drizzle-orm";


export const createStudent = async (student: {
  id: string;
  name: string;
  attended: boolean;
  status: string;
}) => {
  await db.insert(students).values(student).execute();
  return getStudentById(student.id);
};

export const getStudentById = async (studentId: string) => {
  const result = await db.select().from(students)
    .where(eq(students.id, studentId))
    .execute();
  return result[0];
};

export const getAllStudents = async () => {
  return await db.select().from(students).execute();
};
