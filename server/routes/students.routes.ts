import { Router } from "express";
import { createStudent, getAllStudents, approveStudent, rejectStudent } from "../controllers/students.controller";

const router = Router();

router.post("/", createStudent);
router.get("/", getAllStudents);
router.patch("/:studentId/approve", approveStudent);
router.patch("/:studentId/reject", rejectStudent);

export default router;
