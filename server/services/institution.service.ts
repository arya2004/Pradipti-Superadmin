import { eq } from "drizzle-orm"; // ✅ Import `eq`
import { institutions, internshipPrograms  } from "../db/schema";
import { db } from "../db/drizzle";


export const createInstitution = async (institution: {
  institution_name: string;
  institution_address: string;
  contact_person: string;
  contact_email: string;
  contact_phone: string;
}): Promise<number> => {
  const [result] = await db
    .insert(institutions)
    .values({
      ...institution,
      created_at: new Date(),
      updated_at: new Date(),
    })
    .execute();

  return result.insertId; 
};


export const getAllInstitutions = async () => {
  return await db.select().from(institutions).execute();
};


export const getInstitutionById = async (institutionId: number) => {
  const [institution] = await db
    .select()
    .from(institutions)
    .where(eq(institutions.institution_id, institutionId)) 
    .execute();

  return institution || null; 
};

export const updateInstitution = async (
  institutionId: number,
  updateData: Partial<{
    institution_name: string;
    institution_address: string;
    contact_person: string;
    contact_email: string;
    contact_phone: string;
  }>
) => {
  const [result] = await db
    .update(institutions)
    .set({
      ...updateData,
      updated_at: new Date(), 
    })
    .where(eq(institutions.institution_id, institutionId)) 
    .execute();

  return result.affectedRows;
};

export const deleteInstitution = async (institutionId: number) => {
  const [result] = await db
    .delete(institutions)
    .where(eq(institutions.institution_id, institutionId)) 
    .execute();

  return result.affectedRows; 
};


export const getInstitutionsWithPrograms = async () => {
  // Fetch all institutions
  const allInstitutions = await db.select().from(institutions).execute();

  // Fetch all internship programs
  const allPrograms = await db.select().from(internshipPrograms).execute();

  // Group programs by institution
  const grouped = allInstitutions.map((institution) => {
    const programsForInstitution = allPrograms.filter(
      (prog) => prog.institution_id === institution.institution_id
    );

    return {
      id: `CL-${String(institution.institution_id).padStart(4, "0")}`,
      name: institution.institution_name,
      city: institution.institution_address.split(",").slice(-2).join(",").trim(), // basic city extraction
      state: institution.institution_address.split(",").slice(-1)[0].trim(),
      status: "Approved", // Or derive based on logic if you have
      programs: programsForInstitution.map((prog) => prog.internship_title),
    };
  });

  return grouped;
};