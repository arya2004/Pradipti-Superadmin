import express from 'express';
import { updateCollegeProgramDetailsController, deleteCollegeProgramDetailsController } from '../controllers/collegeProgramDetails.controller';

const router = express.Router();

router.put('/:id', updateCollegeProgramDetailsController);
router.delete('/:id', deleteCollegeProgramDetailsController);

export default router;