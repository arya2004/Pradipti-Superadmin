import type { Request, Response } from "express";
import * as programDetailsService from "../services/programDetails.service";

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
