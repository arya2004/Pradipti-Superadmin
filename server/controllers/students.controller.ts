import type { Request, Response } from "express";
import * as studentsService from "../services/students.service";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const studentData = req.body; 
    // Expected: { name, id, attended, status }
    const newStudent = await studentsService.createStudent(studentData);
    res.status(201).json({ data: newStudent, message: "Student created successfully" });
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentsService.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
