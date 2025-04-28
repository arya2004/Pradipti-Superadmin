import {
  mysqlTable,
  serial,
  varchar,
  int,
  boolean,
  date,
  text,
  datetime,
  foreignKey,
} from "drizzle-orm/mysql-core";

//
// ─── CORE TABLES ──────────────────────────────────────────────────────────────
//

export const colleges = mysqlTable("colleges", {
  id: varchar("id", { length: 20 }).primaryKey(),       // e.g. "CL-0178"
  name: varchar("name", { length: 200 }).notNull(),      // e.g. "Vishwakarma Institute of Technology"
  state: varchar("state", { length: 10 }).notNull(),     // e.g. "MH"
  city: varchar("city", { length: 50 }).notNull(),       // e.g. "Pune"
  status: varchar("status", { length: 50 }).notNull(),   // e.g. "Approved" | "Pending"
  created_at: datetime("created_at").notNull(),
  updated_at: datetime("updated_at").notNull(),
});

export const collegePrograms = mysqlTable(
  "college_programs",
  {
    id: serial("id").primaryKey(),
    college_id: varchar("college_id", { length: 20 }).notNull(),
    program: varchar("program", { length: 10 }).notNull(), // e.g. "FP", "BPI", "IP"
  },
  (table) => ({
    fk_cp_college: foreignKey({
      columns: [table.college_id],
      foreignColumns: [colleges.id],
      name: "fk_cp_college",  // custom, ≤64 chars
    }),
  })
);

export const programs_intern = mysqlTable("programs_intern", {
  id: varchar("id", { length: 30 }).primaryKey(),        // e.g. "APP-2025-001"
  name: varchar("name", { length: 200 }).notNull(),       // e.g. "Air Traffic Management Intern 1"
  applications: int("applications").notNull(),            // e.g. 2
  slotsRemaining: varchar("slotsRemaining", { length: 20 }).notNull(), // e.g. "3/10"
});

export const program_details = mysqlTable("program_details", {
  courseCode: varchar("courseCode", { length: 20 }).primaryKey(), // e.g. "PP12345"
  title: varchar("title", { length: 200 }).notNull(),
  startDate: varchar("startDate", { length: 50 }).notNull(),
  duration: varchar("duration", { length: 50 }).notNull(),
  location: varchar("location", { length: 100 }).notNull(),
  applyBy: varchar("applyBy", { length: 50 }).notNull(),
  img: varchar("img", { length: 300 }),
  description: text("description").notNull(),
});

export const students = mysqlTable("students", {
  id: varchar("id", { length: 30 }).primaryKey(),       // e.g. "APP0123"
  name: varchar("name", { length: 150 }).notNull(),
  attended: boolean("attended").notNull(),
  status: varchar("status", { length: 50 }).notNull(),
});

export const notifications = mysqlTable("notifications", {
  id: varchar("id", { length: 50 }).primaryKey(),
  title: varchar("title", { length: 150 }).notNull(),
  from: varchar("from", { length: 100 }),
  message: varchar("message", { length: 500 }).notNull(),
  date: varchar("date", { length: 30 }).notNull(),
  time: varchar("time", { length: 20 }).notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  priority: varchar("priority", { length: 50 }).notNull(),
  read: boolean("read").default(false),
});

export const users = mysqlTable("users", {
  email: varchar("email", { length: 150 }).primaryKey(),
  name: varchar("name", { length: 150 }).notNull(),
  role: varchar("role", { length: 50 }).notNull(),
});

//
// ─── COLLEGE DETAILS & RELATED ────────────────────────────────────────────────
//

export const college_details = mysqlTable("college_details", {
  id: varchar("id", { length: 20 }).primaryKey(),
  name: varchar("name", { length: 200 }).notNull(),
  location: varchar("location", { length: 100 }).notNull(),
  email: varchar("email", { length: 150 }).notNull(),
  registeredStudents: int("registeredStudents").notNull(),
  logo: varchar("logo", { length: 300 }),
  created_at: datetime("created_at").notNull(),
  updated_at: datetime("updated_at").notNull(),
});

export const college_program_details = mysqlTable(
  "college_program_details",
  {
    id: serial("id").primaryKey(),
    college_id: varchar("college_id", { length: 20 }).notNull(),
    name: varchar("name", { length: 20 }).notNull(),
    code: varchar("code", { length: 20 }).notNull(),
    fullName: varchar("fullName", { length: 200 }).notNull(),
  },
  (table) => ({
    fk_cpd_college: foreignKey({
      columns: [table.college_id],
      foreignColumns: [college_details.id],
      name: "fk_cpd_college",
    }),
  })
);

export const college_admins = mysqlTable(
  "college_admins",
  {
    id: serial("id").primaryKey(),
    college_id: varchar("college_id", { length: 20 }).notNull(),
    name: varchar("name", { length: 150 }).notNull(),
    user_id: varchar("user_id", { length: 50 }),
    email: varchar("email", { length: 150 }).notNull(),
    dateAdded: varchar("dateAdded", { length: 50 }).notNull(),
    role: varchar("role", { length: 50 }).notNull(),
    status: varchar("status", { length: 50 }).default("active"),
  },
  (table) => ({
    fk_ca_college: foreignKey({
      columns: [table.college_id],
      foreignColumns: [college_details.id],
      name: "fk_ca_college",
    }),
  })
);

export const mou_documents = mysqlTable(
  "mou_documents",
  {
    id: serial("id").primaryKey(),
    college_id: varchar("college_id", { length: 20 }).notNull(),
    status: varchar("status", { length: 50 }).default("pending"),
    lastUpdated: date("lastUpdated"),
    expiryDate: date("expiryDate"),
  },
  (table) => ({
    fk_mou_college: foreignKey({
      columns: [table.college_id],
      foreignColumns: [college_details.id],
      name: "fk_mou_college",
    }),
  })
);

export const adminUsers = mysqlTable("admin_users", {
  user_id: varchar("user_id", { length: 50 }).primaryKey(),
  user_name: varchar("user_name", { length: 100 }).notNull(),
  actions: varchar("actions", { length: 100 }),
  access: varchar("access", { length: 50 }),
});
