import { Router } from "express";
import { createInternProgram, getInternPrograms, updateInternProgramController, deleteInternProgramController } from "../controllers/internProgram.controller";

const router = Router();

router.post("/", createInternProgram);
router.get("/", getInternPrograms);
router.put("/:id", updateInternProgramController);
router.delete("/:id", deleteInternProgramController);

export default router;
