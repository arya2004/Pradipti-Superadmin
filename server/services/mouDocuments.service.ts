import { db } from '../db/drizzle';
import { mou_documents } from '../db/schema';
import { eq } from 'drizzle-orm';

export const updateMouDocument = async (id: number, data: Partial<typeof mou_documents>) => {
  const mappedData = {
    ...data,
    college_id: data.college_id as unknown as string | undefined,
  };
  return db.update(mou_documents).set(mappedData).where(eq(mou_documents.id, id));
};

export const deleteMouDocument = async (id: number) => {
  return db.delete(mou_documents).where(eq(mou_documents.id, id));
};