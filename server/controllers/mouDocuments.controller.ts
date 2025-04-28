import { Request, Response } from 'express';
import { updateMouDocument, deleteMouDocument } from '../services/mouDocuments.service';

export const updateMouDocumentController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateMouDocument(Number(id), data);
    res.status(200).json({ message: 'MOU document updated successfully', result });
  } catch (error) {
    res.status(500).json({ message: 'Error updating MOU document', error });
  }
};

export const deleteMouDocumentController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteMouDocument(Number(id));
    res.status(200).json({ message: 'MOU document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting MOU document', error });
  }
};