import {
  mysqlTable,
  serial,
  varchar,
  int,
  boolean,
  date,
  text,
  datetime
} from "drizzle-orm/mysql-core";


export const colleges = mysqlTable("colleges", {
  id: varchar("id", { length: 20 }).primaryKey(), // Example: "CL-0178"
  name: varchar("name", { length: 200 }).notNull(), // Example: "Vishwakarma Institute of Technology"
  state: varchar("state", { length: 10 }).notNull(), // Example: "MH"
  city: varchar("city", { length: 50 }).notNull(), // Example: "Pune"
  status: varchar("status", { length: 50 }).notNull(), // Example: "Approved" or "Pending"
  created_at: datetime("created_at").notNull(), // Timestamp of record creation
  updated_at: datetime("updated_at").notNull(), // Timestamp of last update
});


export const collegePrograms = mysqlTable("college_programs", {
  id: serial("id").primaryKey(),
  college_id: varchar("college_id", { length: 20 }).notNull().references(() => colleges.id), // Example: "CL-0178"
  program: varchar("program", { length: 10 }).notNull(), // Example: "FP", "BPI", or "IP"
});


export const programs_intern = mysqlTable("programs_intern", {
  id: varchar("id", { length: 30 }).primaryKey(), // Example: "APP-2025-001"
  name: varchar("name", { length: 200 }).notNull(), // Example: "Air Traffic Management Intern 1"
  applications: int("applications").notNull(), // Example: 2
  slotsRemaining: varchar("slotsRemaining", { length: 20 }).notNull(), // Example: "3/10"
});


export const program_details = mysqlTable("program_details", {
  courseCode: varchar("courseCode", { length: 20 }).primaryKey(), // Example: "PP12345"
  title: varchar("title", { length: 200 }).notNull(), // Example: "Air Traffic Management Intern"
  startDate: varchar("startDate", { length: 50 }).notNull(), // Example: "10th Dec' 24"
  duration: varchar("duration", { length: 50 }).notNull(), // Example: "4 Months"
  location: varchar("location", { length: 100 }).notNull(), // Example: "Pune"
  applyBy: varchar("applyBy", { length: 50 }).notNull(), // Example: "8 Nov' 24"
  img: varchar("img", { length: 300 }), // Example: "/image2.png"
  description: text("description").notNull(), // Example: Detailed description of the internship program
});


export const students = mysqlTable("students", {
  id: varchar("id", { length: 30 }).primaryKey(), // Example: "APP0123"
  name: varchar("name", { length: 150 }).notNull(), // Example: "Arya Pathak"
  attended: boolean("attended").notNull(), // Example: false
  status: varchar("status", { length: 50 }).notNull(), // Example: "Pending", "Approved", or "Rejected"
});


export const notifications = mysqlTable("notifications", {
  id: varchar("id", { length: 50 }).primaryKey(), // Example: "notif-001" or "notif-002"
  title: varchar("title", { length: 150 }).notNull(), // Example: "New Message"
  from: varchar("from", { length: 100 }), // Example: "Designer" or "Admin"
  message: varchar("message", { length: 500 }).notNull(), // Example: "2 Messages..." or "Team meeting"
  date: varchar("date", { length: 30 }).notNull(), // Example: "22 DEC 24"
  time: varchar("time", { length: 20 }).notNull(), // Example: "16:10"
  category: varchar("category", { length: 100 }).notNull(), // Example: "Application", "College", etc.
  priority: varchar("priority", { length: 50 }).notNull(), // Example: "High", "Medium", "Low", or "Critical"
  read: boolean("read").default(false), // Example: false (unread) or true (read)
});


export const users = mysqlTable("users", {
  email: varchar("email", { length: 150 }).primaryKey(), // Example: "admin@example.com"
  name: varchar("name", { length: 150 }).notNull(), // Example: "Omkar Lolage"
  role: varchar("role", { length: 50 }).notNull(), // Example: "Admin"
});


export const college_details = mysqlTable("college_details", {
  id: varchar("id", { length: 20 }).primaryKey(), // Example: "CL-0178"
  name: varchar("name", { length: 200 }).notNull(), // Example: "Vishwakarma University"
  location: varchar("location", { length: 100 }).notNull(), // Example: "Pune, MH"
  email: varchar("email", { length: 150 }).notNull(), // Example: "connect@vupune.ac.in"
  registeredStudents: int("registeredStudents").notNull(), // Example: 15420
  logo: varchar("logo", { length: 300 }), // Example: "/college.png"
  created_at: datetime("created_at").notNull(),
  updated_at: datetime("updated_at").notNull(),
});


export const college_program_details = mysqlTable("college_program_details", {
  id: serial("id").primaryKey(),
  college_id: varchar("college_id", { length: 20 }).notNull().references(() => college_details.id), // Example: "CL-0178"
  name: varchar("name", { length: 20 }).notNull(), // Example: "FB" (short name)
  code: varchar("code", { length: 20 }).notNull(), // Example: "FB001"
  fullName: varchar("fullName", { length: 200 }).notNull(), // Example: "Faculty of Business"
});


export const college_admins = mysqlTable("college_admins", {
  id: serial("id").primaryKey(),
  college_id: varchar("college_id", { length: 20 }).notNull().references(() => college_details.id), // Example: "CL-0178"
  name: varchar("name", { length: 150 }).notNull(), // Example: "Dr. Rajesh Kumar"
  user_id: varchar("user_id", { length: 50 }), // Example: "APP0123"
  email: varchar("email", { length: 150 }).notNull(), // Example: "rajesh.kumar@vupune.ac.in"
  dateAdded: varchar("dateAdded", { length: 50 }).notNull(), // Example: "22 Jan 2024"
  role: varchar("role", { length: 50 }).notNull(), // Example: "Principal", "Dean", etc.
  status: varchar("status", { length: 50 }).default("active"), // Example: "active"
});


export const mou_documents = mysqlTable("mou_documents", {
  id: serial("id").primaryKey(),
  college_id: varchar("college_id", { length: 20 }).notNull().references(() => college_details.id), // Example: "CL-0178"
  status: varchar("status", { length: 50 }).default("pending"), // Example: "pending" or "active"
  lastUpdated: date("lastUpdated"), // Example: "2024-01-15"
  expiryDate: date("expiryDate"), // Example: "2025-01-15"
});


export const adminUsers = mysqlTable("admin_users", {
  user_id: varchar("user_id", { length: 50 }).primaryKey(), // Example: "U12345"
  user_name: varchar("user_name", { length: 100 }).notNull(), // Example: "user-1"
  actions: varchar("actions", { length: 100 }), // Example: "Delete Edit"
  access: varchar("access", { length: 50 }), // Example: "Admin", "Super Admin", or "Station Admin"
});
