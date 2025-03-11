"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var mysql2_1 = require("drizzle-orm/mysql2");
var promise_1 = __importDefault(require("mysql2/promise"));
var pool = promise_1.default.createPool({
    host: "localhost",
    user: "pradepti_user",
    password: "pradepti_pass",
    database: "pradepti_db",
    waitForConnections: true,
    connectionLimit: 10,
});
exports.db = (0, mysql2_1.drizzle)(pool);
