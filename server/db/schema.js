"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applications = exports.internshipPrograms = exports.internshipTopics = exports.students = exports.mous = exports.users = exports.stations = exports.institutions = void 0;
var mysql_core_1 = require("drizzle-orm/mysql-core");
// Institutions Table
exports.institutions = (0, mysql_core_1.mysqlTable)("institutions", {
    institution_id: (0, mysql_core_1.bigint)("institution_id", { mode: "number" }).primaryKey().autoincrement(),
    institution_name: (0, mysql_core_1.varchar)("institution_name", { length: 200 }).notNull(),
    institution_address: (0, mysql_core_1.varchar)("institution_address", { length: 300 }).notNull(),
    contact_person: (0, mysql_core_1.varchar)("contact_person", { length: 150 }).notNull(),
    contact_email: (0, mysql_core_1.varchar)("contact_email", { length: 150 }).notNull(),
    contact_phone: (0, mysql_core_1.varchar)("contact_phone", { length: 50 }).notNull(),
    created_at: (0, mysql_core_1.datetime)("created_at").notNull(),
    updated_at: (0, mysql_core_1.datetime)("updated_at").notNull(),
});
// Stations Table
exports.stations = (0, mysql_core_1.mysqlTable)("stations", {
    station_id: (0, mysql_core_1.bigint)("station_id", { mode: "number" }).primaryKey().autoincrement(),
    station_name: (0, mysql_core_1.varchar)("station_name", { length: 200 }).notNull(),
    station_code: (0, mysql_core_1.varchar)("station_code", { length: 50 }),
    station_address: (0, mysql_core_1.varchar)("station_address", { length: 300 }),
    contact_person: (0, mysql_core_1.varchar)("contact_person", { length: 150 }).notNull(),
    contact_email: (0, mysql_core_1.varchar)("contact_email", { length: 150 }).notNull(),
    contact_phone: (0, mysql_core_1.varchar)("contact_phone", { length: 50 }).notNull(),
    created_at: (0, mysql_core_1.datetime)("created_at").notNull(),
    updated_at: (0, mysql_core_1.datetime)("updated_at").notNull(),
});
// Users Table
exports.users = (0, mysql_core_1.mysqlTable)("users", {
    id: (0, mysql_core_1.bigint)("user_id", { mode: "number" }).primaryKey().autoincrement(),
    name: (0, mysql_core_1.varchar)("username", { length: 100 }).unique().notNull(),
    password_hash: (0, mysql_core_1.varchar)("password_hash", { length: 300 }).notNull(),
    salt: (0, mysql_core_1.varchar)("salt", { length: 255 }).notNull(),
    sessiontoken: (0, mysql_core_1.varchar)("sessiontoken", { length: 255 }),
    email: (0, mysql_core_1.varchar)("email", { length: 150 }).unique().notNull(),
    role: (0, mysql_core_1.varchar)("role", { length: 50 }).notNull(),
    created_at: (0, mysql_core_1.datetime)("created_at").notNull().default(new Date()), // Default timestamp
    updated_at: (0, mysql_core_1.datetime)("updated_at").notNull().default(new Date()).$onUpdateFn(function () { return new Date(); }), // Auto-update
});
// MOUs Table
exports.mous = (0, mysql_core_1.mysqlTable)("mous", {
    mou_id: (0, mysql_core_1.bigint)("mou_id", { mode: "number" }).primaryKey().autoincrement(),
    institution_id: (0, mysql_core_1.bigint)("institution_id", { mode: "number" }).notNull().references(function () { return exports.institutions.institution_id; }),
    mou_start_date: (0, mysql_core_1.date)("mou_start_date").notNull(),
    mou_end_date: (0, mysql_core_1.date)("mou_end_date").notNull(),
    mou_status: (0, mysql_core_1.varchar)("mou_status", { length: 50 }).default("Active"),
    approver_id: (0, mysql_core_1.bigint)("approver_id", { mode: "number" }).notNull().references(function () { return exports.users.id; }),
    approved_at: (0, mysql_core_1.datetime)("approved_at").notNull(),
    updated_at: (0, mysql_core_1.datetime)("updated_at").notNull(),
});
// Students Table
exports.students = (0, mysql_core_1.mysqlTable)("students", {
    student_id: (0, mysql_core_1.bigint)("student_id", { mode: "number" }).primaryKey().autoincrement(), // Fixed to BIGINT
    institution_id: (0, mysql_core_1.bigint)("institution_id", { mode: "number" }).notNull().references(function () { return exports.institutions.institution_id; }), // Match institution_id type
    first_name: (0, mysql_core_1.varchar)("first_name", { length: 100 }).notNull(),
    last_name: (0, mysql_core_1.varchar)("last_name", { length: 100 }).notNull(),
    email: (0, mysql_core_1.varchar)("email", { length: 150 }).unique().notNull(),
    phone: (0, mysql_core_1.varchar)("phone", { length: 50 }).notNull(),
    enrollment_no: (0, mysql_core_1.varchar)("enrollment_no", { length: 100 }).notNull(),
    course_or_major: (0, mysql_core_1.varchar)("course_or_major", { length: 150 }),
    created_at: (0, mysql_core_1.datetime)("created_at").notNull().default(new Date()), // Default timestamp
    updated_at: (0, mysql_core_1.datetime)("updated_at").notNull().default(new Date()).$onUpdateFn(function () { return new Date(); }), // Auto-update
});
// Internship Topics Table
exports.internshipTopics = (0, mysql_core_1.mysqlTable)("internship_topics", {
    topic_id: (0, mysql_core_1.bigint)("topic_id", { mode: "number" }).primaryKey().autoincrement(),
    topic_name: (0, mysql_core_1.varchar)("topic_name", { length: 200 }).notNull(),
    topic_details: (0, mysql_core_1.varchar)("topic_details", { length: 500 }),
    created_at: (0, mysql_core_1.datetime)("created_at").notNull(),
    updated_at: (0, mysql_core_1.datetime)("updated_at").notNull(),
});
// Internship Programs Table
exports.internshipPrograms = (0, mysql_core_1.mysqlTable)("internship_programs", {
    internship_id: (0, mysql_core_1.bigint)("internship_id", { mode: "number" }).primaryKey().autoincrement(),
    station_id: (0, mysql_core_1.bigint)("station_id", { mode: "number" }).notNull().references(function () { return exports.stations.station_id; }),
    topic_id: (0, mysql_core_1.bigint)("topic_id", { mode: "number" }).references(function () { return exports.internshipTopics.topic_id; }),
    internship_title: (0, mysql_core_1.varchar)("internship_title", { length: 200 }).notNull(),
    internship_details: (0, mysql_core_1.varchar)("internship_details", { length: 500 }),
    duration_weeks: (0, mysql_core_1.int)("duration_weeks").notNull(),
    seats_available: (0, mysql_core_1.int)("seats_available").notNull(),
    start_date: (0, mysql_core_1.date)("start_date").notNull(),
    end_date: (0, mysql_core_1.date)("end_date").notNull(),
    created_at: (0, mysql_core_1.datetime)("created_at").notNull(),
    updated_at: (0, mysql_core_1.datetime)("updated_at").notNull(),
});
// Applications Table
exports.applications = (0, mysql_core_1.mysqlTable)("applications", {
    application_id: (0, mysql_core_1.bigint)("application_id", { mode: "number" }).primaryKey().autoincrement(),
    student_id: (0, mysql_core_1.bigint)("student_id", { mode: "number" }).notNull().references(function () { return exports.students.student_id; }), // Fixed type
    internship_id: (0, mysql_core_1.bigint)("internship_id", { mode: "number" }).notNull(),
    application_date: (0, mysql_core_1.datetime)("application_date").notNull(),
    status: (0, mysql_core_1.varchar)("status", { length: 50 }).default("Pending"),
    approval_by_station: (0, mysql_core_1.varchar)("approval_by_station", { length: 50 }).default("Pending"),
    approval_by_institution: (0, mysql_core_1.varchar)("approval_by_institution", { length: 50 }).default("Pending"),
    remarks: (0, mysql_core_1.varchar)("remarks", { length: 500 }),
    created_at: (0, mysql_core_1.datetime)("created_at").notNull().default(new Date()), // Default timestamp
    updated_at: (0, mysql_core_1.datetime)("updated_at").notNull().default(new Date()).$onUpdateFn(function () { return new Date(); }), // Auto-update
});
