import type { Request, Response } from "express";
import * as collegeProgramService from "../services/collegeProgram.service";

// Create a new program record for a specific college; the collegeId is passed in the URL.
export const addProgramToCollege = async (req: Request, res: Response) => {
  try {
    const { collegeId } = req.params; // e.g., "CL-0178"
    // Expect request body like: { name: "FP" } (or additional details if needed)
    const programData = req.body;
    const updatedPrograms = await collegeProgramService.addProgramToCollege(collegeId, programData);
    res.status(201).json({ data: updatedPrograms, message: "Program added successfully" });
  } catch (error) {
    console.error("Error creating college program:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET all programs associated with a specific college.
export const getProgramsByCollege = async (req: Request, res: Response) => {
  try {
    const { collegeId } = req.params;
    const programs = await collegeProgramService.getProgramsByCollege(collegeId);
    res.status(200).json(programs);
  } catch (error) {
    console.error("Error fetching college programs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
