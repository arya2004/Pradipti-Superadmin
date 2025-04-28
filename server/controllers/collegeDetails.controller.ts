import { Request, Response } from 'express';
import { updateCollegeDetails, deleteCollegeDetails } from '../services/collegeDetails.service';

export const updateCollegeDetailsController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateCollegeDetails(id, data);
    res.status(200).json({ message: 'College details updated successfully', result });
  } catch (error) {
    res.status(500).json({ message: 'Error updating college details', error });
  }
};

export const deleteCollegeDetailsController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteCollegeDetails(id);
    res.status(200).json({ message: 'College details deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting college details', error });
  }
};