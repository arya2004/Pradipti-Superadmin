import express from 'express';
import { updateAdminUserController, deleteAdminUserController } from '../controllers/adminUsers.controller';

const router = express.Router();

router.put('/:user_id', updateAdminUserController);
router.delete('/:user_id', deleteAdminUserController);

export default router;