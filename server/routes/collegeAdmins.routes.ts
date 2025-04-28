import express from 'express';
import { updateCollegeAdminController, deleteCollegeAdminController } from '../controllers/collegeAdmins.controller';

const router = express.Router();

router.put('/:id', updateCollegeAdminController);
router.delete('/:id', deleteCollegeAdminController);

export default router;