import { Router } from "express";
import { createProgramDetails, getProgramDetails, updateProgramDetailsController, deleteProgramDetailsController } from "../controllers/programDetails.controller";

const router = Router();

router.post("/", createProgramDetails);
router.get("/:courseCode", getProgramDetails);
router.put("/:courseCode", updateProgramDetailsController);
router.delete("/:courseCode", deleteProgramDetailsController);

export default router;
