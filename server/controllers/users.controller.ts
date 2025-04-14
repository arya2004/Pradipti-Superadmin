import type { Request, Response } from "express";
import * as usersService from "../services/users.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    // Expected: { email, name, role }
    const newUser = await usersService.createUser(userData);
    res.status(201).json({ data: newUser, message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const user = await usersService.getUser(email);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
