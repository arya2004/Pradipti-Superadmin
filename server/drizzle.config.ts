import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: './drizzle',
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
