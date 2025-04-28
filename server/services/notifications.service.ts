import { db } from "../db/drizzle";
import { notifications } from "../db/schema";
import { eq } from "drizzle-orm";

export const createNotification = async (notif: {
  id: string;
  title: string;
  from: string;
  message: string;
  date: string;
  time: string;
  category: string;
  priority: string;
  read: boolean;
}) => {
  await db.insert(notifications).values(notif).execute();
  return getNotificationById(notif.id);
};

export const getNotificationById = async (notifId: string) => {
  const result = await db.select().from(notifications)
    .where(eq(notifications.id, notifId))
    .execute();
  return result[0];
};

export const getAllNotifications = async () => {
  return await db.select().from(notifications).execute();
};

export const deleteNotification = async (id: string) => {
  return db.delete(notifications).where(eq(notifications.id, id));
};
