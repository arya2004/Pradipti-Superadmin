import type { Request, Response } from "express";
import * as internProgramService from "../services/internProgram.service";
import { updateInternProgram, deleteInternProgram } from '../services/internProgram.service';

// Create an internship program
export const createInternProgram = async (req: Request, res: Response) => {
  try {
    const programData = req.body; 
    // Expected shape: { id, name, applications, slotsRemaining }
    const newProgram = await internProgramService.createInternProgram(programData);
    res.status(201).json({ data: newProgram, message: "Internship program created successfully" });
  } catch (error) {
    console.error("Error creating internship program:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET all internship programs
export const getInternPrograms = async (req: Request, res: Response) => {
  try {
    const programs = await internProgramService.getAllInternPrograms();
    res.status(200).json(programs);
  } catch (error) {
    console.error("Error fetching internship programs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateInternProgramController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateInternProgram(id, data);
    res.status(200).json({ message: 'Intern program updated successfully', result });
  } catch (error) {
    res.status(500).json({ message: 'Error updating intern program', error });
  }
};

export const deleteInternProgramController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteInternProgram(id);
    res.status(200).json({ message: 'Intern program deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting intern program', error });
  }
};
