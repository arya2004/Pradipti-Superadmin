import { Router } from "express";
import { createInternProgram, getInternPrograms } from "../controllers/internProgram.controller";

const router = Router();

router.post("/", createInternProgram);
router.get("/", getInternPrograms);

export default router;
