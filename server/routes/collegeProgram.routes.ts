import { Router } from "express";
import { addProgramToCollege, getProgramsByCollege } from "../controllers/collegeProgram.controller";

const router = Router();

// e.g., POST /colleges/:collegeId/programs to add a new program
router.post("/:collegeId/programs", addProgramToCollege);
// e.g., GET /colleges/:collegeId/programs to fetch all programs for that college
router.get("/:collegeId/programs", getProgramsByCollege);

export default router;
