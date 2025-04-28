import type { Request, Response } from "express";
import * as programDetailsService from "../services/programDetails.service";
import { updateProgramDetails, deleteProgramDetails } from '../services/programDetails.service';

// Create program details record
export const createProgramDetails = async (req: Request, res: Response) => {
  try {
    const detailsData = req.body;
    // Expected: { title, courseCode, startDate, duration, location, applyBy, img, description }
    const newDetails = await programDetailsService.createProgramDetails(detailsData);
    res.status(201).json({ data: newDetails, message: "Program details created" });
  } catch (error) {
    console.error("Error creating program details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET program details by courseCode
export const getProgramDetails = async (req: Request, res: Response) => {
  try {
    const { courseCode } = req.params;
    const details = await programDetailsService.getProgramDetails(courseCode);
    if (details) {
      res.status(200).json(details);
    } else {
      res.status(404).json({ error: "Program details not found" });
    }
  } catch (error) {
    console.error("Error fetching program details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateProgramDetailsController = async (req: Request, res: Response) => {
  try {
    const { courseCode } = req.params;
    const data = req.body;
    const result = await updateProgramDetails(courseCode, data);
    res.status(200).json({ message: 'Program details updated successfully', result });
  } catch (error) {
    res.status(500).json({ message: 'Error updating program details', error });
  }
};

export const deleteProgramDetailsController = async (req: Request, res: Response) => {
  try {
    const { courseCode } = req.params;
    await deleteProgramDetails(courseCode);
    res.status(200).json({ message: 'Program details deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting program details', error });
  }
};
