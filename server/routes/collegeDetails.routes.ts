import express from 'express';
import { updateCollegeDetailsController, deleteCollegeDetailsController } from '../controllers/collegeDetails.controller';

const router = express.Router();

router.put('/:id', updateCollegeDetailsController);
router.delete('/:id', deleteCollegeDetailsController);

export default router;