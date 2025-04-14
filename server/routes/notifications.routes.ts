import { Router } from "express";
import { createNotification, getAllNotifications } from "../controllers/notifications.controller";

const router = Router();

router.post("/", createNotification);
router.get("/", getAllNotifications);

export default router;
