import express from 'express';
import { updateMouDocumentController, deleteMouDocumentController } from '../controllers/mouDocuments.controller';

const router = express.Router();

router.put('/:id', updateMouDocumentController);
router.delete('/:id', deleteMouDocumentController);

export default router;