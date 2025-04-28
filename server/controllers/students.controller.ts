import type { Request, Response } from "express";
import * as studentsService from "../services/students.service";
import { updateStudentStatus, updateStudent, deleteStudent } from '../services/students.service';

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

export const approveStudent = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  try {
    await updateStudentStatus(studentId, 'Approved');
    res.status(200).json({ message: 'Student approved successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to approve student.' });
  }
};

export const rejectStudent = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  try {
    await updateStudentStatus(studentId, 'Rejected');
    res.status(200).json({ message: 'Student rejected successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to reject student.' });
  }
};

export const updateStudentController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateStudent(id, data);
    res.status(200).json({ message: 'Student updated successfully', result });
  } catch (error) {
    res.status(500).json({ message: 'Error updating student', error });
  }
};

export const deleteStudentController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteStudent(id);
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error });
  }
};
