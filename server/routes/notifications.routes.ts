import { Router } from "express";
import { createNotification, getAllNotifications, deleteNotificationController } from "../controllers/notifications.controller";

const router = Router();

router.post("/", createNotification);
router.get("/", getAllNotifications);
router.delete("/:id", deleteNotificationController);

export default router;
