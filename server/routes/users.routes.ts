import { Router } from "express";
import { createUser, getUser } from "../controllers/users.controller";

const router = Router();

router.post("/", createUser);
router.get("/:email", getUser);

export default router;
