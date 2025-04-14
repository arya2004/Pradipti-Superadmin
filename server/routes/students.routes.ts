import { Router } from "express";
import { createStudent, getAllStudents } from "../controllers/students.controller";

const router = Router();

router.post("/", createStudent);
router.get("/", getAllStudents);

export default router;
