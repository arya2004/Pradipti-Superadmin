import { Router } from "express";
import { createCollege, getAllColleges, getCollegeById } from "../controllers/college.controller";

const router = Router();

router.post("/", createCollege);
router.get("/", getAllColleges);
router.get("/:id", getCollegeById);

export default router;
