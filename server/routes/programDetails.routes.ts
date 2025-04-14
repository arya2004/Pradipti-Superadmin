import { Router } from "express";
import { createProgramDetails, getProgramDetails } from "../controllers/programDetails.controller";

const router = Router();

router.post("/", createProgramDetails);
router.get("/:courseCode", getProgramDetails);

export default router;
