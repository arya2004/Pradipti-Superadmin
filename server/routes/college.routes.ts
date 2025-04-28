import { Router } from "express";
import { createCollege, getAllColleges, getCollegeById, approveCollege, rejectCollege, updateCollegeController, deleteCollegeController } from "../controllers/college.controller";

const router = Router();

router.post("/", createCollege);
router.get("/", getAllColleges);
router.get("/:id", getCollegeById);
router.patch("/:collegeId/approve", approveCollege);
router.patch("/:collegeId/reject", rejectCollege);
router.put("/:id", updateCollegeController);
router.delete("/:id", deleteCollegeController);

export default router;
