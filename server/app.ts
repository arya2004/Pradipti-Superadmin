import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json"; // Import generated Swagger JSON

import collegeRoutes from "./routes/college.routes";
import collegeProgramRoutes from "./routes/collegeProgram.routes";
import internProgramRoutes from "./routes/internProgram.routes";
import programDetailsRoutes from "./routes/programDetails.routes";
import studentsRoutes from "./routes/students.routes";
import notificationsRoutes from "./routes/notifications.routes";
import usersRoutes from "./routes/users.routes";


const app = express();

app.use(express.json());

// Mount API routes
app.use("/colleges", collegeRoutes);
app.use("/colleges", collegeProgramRoutes); // routes expecting /colleges/:collegeId/programs
app.use("/intern-programs", internProgramRoutes);
app.use("/program-details", programDetailsRoutes);
app.use("/students", studentsRoutes);
app.use("/notifications", notificationsRoutes);
app.use("/users", usersRoutes);

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
