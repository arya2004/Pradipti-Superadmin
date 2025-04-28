import { Request, Response } from 'express';
import { updateCollegeProgramDetails, deleteCollegeProgramDetails } from '../services/collegeProgramDetails.service';

export const updateCollegeProgramDetailsController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateCollegeProgramDetails(Number(id), data);
    res.status(200).json({ message: 'College program details updated successfully', result });
  } catch (error) {
    res.status(500).json({ message: 'Error updating college program details', error });
  }
};

export const deleteCollegeProgramDetailsController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteCollegeProgramDetails(Number(id));
    res.status(200).json({ message: 'College program details deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting college program details', error });
  }
};