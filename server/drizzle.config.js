"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drizzle_kit_1 = require("drizzle-kit");
exports.default = (0, drizzle_kit_1.defineConfig)({
    dialect: "mysql",
    schema: "./db/schema.ts",
    dbCredentials: {
        host: "localhost",
        port: 3306,
        user: "pradepti_user",
        password: "pradepti_pass",
        database: "pradepti_db",
    }
});
