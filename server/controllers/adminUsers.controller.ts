import { Request, Response } from 'express';
import { updateAdminUser, deleteAdminUser } from '../services/adminUsers.service';

export const updateAdminUserController = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const data = req.body;
    const result = await updateAdminUser(user_id, data);
    res.status(200).json({ message: 'Admin user updated successfully', result });
  } catch (error) {
    res.status(500).json({ message: 'Error updating admin user', error });
  }
};

export const deleteAdminUserController = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    await deleteAdminUser(user_id);
    res.status(200).json({ message: 'Admin user deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting admin user', error });
  }
};