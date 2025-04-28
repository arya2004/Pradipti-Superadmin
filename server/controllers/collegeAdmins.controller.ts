import { Request, Response } from 'express';
import { updateCollegeAdmin, deleteCollegeAdmin } from '../services/collegeAdmins.service';

export const updateCollegeAdminController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateCollegeAdmin(Number(id), data);
    res.status(200).json({ message: 'College admin updated successfully', result });
  } catch (error) {
    res.status(500).json({ message: 'Error updating college admin', error });
  }
};

export const deleteCollegeAdminController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteCollegeAdmin(Number(id));
    res.status(200).json({ message: 'College admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting college admin', error });
  }
};