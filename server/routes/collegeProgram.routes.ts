import { Router } from "express";
import { addProgramToCollege, getProgramsByCollege, updateCollegeProgramController, deleteCollegeProgramController } from "../controllers/collegeProgram.controller";

const router = Router();

// e.g., POST /colleges/:collegeId/programs to add a new program
router.post("/:collegeId/programs", addProgramToCollege);
// e.g., GET /colleges/:collegeId/programs to fetch all programs for that college
router.get("/:collegeId/programs", getProgramsByCollege);

// e.g., PUT /programs/:id to update a program
router.put("/:id", updateCollegeProgramController);
// e.g., DELETE /programs/:id to delete a program
router.delete("/:id", deleteCollegeProgramController);

export default router;
