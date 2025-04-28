import { Router } from "express";
import { createStudent, getAllStudents, approveStudent, rejectStudent, updateStudentController, deleteStudentController } from "../controllers/students.controller";

const router = Router();

router.post("/", createStudent);
router.get("/", getAllStudents);
router.patch("/:studentId/approve", approveStudent);
router.patch("/:studentId/reject", rejectStudent);
router.put("/:id", updateStudentController);
router.delete("/:id", deleteStudentController);

export default router;
