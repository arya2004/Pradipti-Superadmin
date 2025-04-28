import type { Request, Response } from "express";
import * as collegeService from "../services/college.service";
import { updateCollegeStatus, updateCollege, deleteCollege } from '../services/college.service';

// Create a new college with programs (collegeData: { id, name, state, city, status, programs: string[] })
export const createCollege = async (req: Request, res: Response) => {
  try {
    const collegeData = req.body;
    // Expected shape:
    // {
    //    id: "CL-0178",
    //    name: "Vishwakarma Institute of Technology",
    //    state: "MH",
    //    city: "Pune",
    //    status: "Approved",
    //    programs: ["FP", "BPI", "IP"]
    // }
    const newCollege = await collegeService.createCollege(collegeData);
    res.status(201).json({ data: newCollege, message: "College created successfully" });
  } catch (error) {
    console.error("Error creating college:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET all colleges with their programs joined.
export const getAllColleges = async (req: Request, res: Response) => {
  try {
    const colleges = await collegeService.getAllColleges();
    res.status(200).json(colleges);
  } catch (error) {
    console.error("Error fetching colleges:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET a single college by id with its joined programs.
export const getCollegeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const college = await collegeService.getCollegeById(id);
    if (college) {
      res.status(200).json(college);
    } else {
      res.status(404).json({ error: "College not found" });
    }
  } catch (error) {
    console.error("Error fetching college by id:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const approveCollege = async (req: Request, res: Response) => {
  const { collegeId } = req.params;
  try {
    await updateCollegeStatus(collegeId, 'Approved');
    res.status(200).json({ message: 'College approved successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to approve college.' });
  }
};

export const rejectCollege = async (req: Request, res: Response) => {
  const { collegeId } = req.params;
  try {
    await updateCollegeStatus(collegeId, 'Rejected');
    res.status(200).json({ message: 'College rejected successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to reject college.' });
  }
};

export const updateCollegeController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateCollege(id, data);
    res.status(200).json({ message: 'College updated successfully', result });
  } catch (error) {
    res.status(500).json({ message: 'Error updating college', error });
  }
};

export const deleteCollegeController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteCollege(id);
    res.status(200).json({ message: 'College deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting college', error });
  }
};
