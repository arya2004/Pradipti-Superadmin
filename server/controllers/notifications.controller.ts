import type { Request, Response } from "express";
import * as notificationsService from "../services/notifications.service";

export const createNotification = async (req: Request, res: Response) => {
  try {
    const notifData = req.body;
    // Expected: { id, title, from, message, date, time, category, priority, read }
    const newNotif = await notificationsService.createNotification(notifData);
    res.status(201).json({ data: newNotif, message: "Notification created successfully" });
  } catch (error) {
    console.error("Error creating notification:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllNotifications = async (req: Request, res: Response) => {
  try {
    const notifs = await notificationsService.getAllNotifications();
    res.status(200).json(notifs);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteNotificationController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await notificationsService.deleteNotification(id);
    res.status(200).json({ message: 'Notification deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting notification', error });
  }
};
