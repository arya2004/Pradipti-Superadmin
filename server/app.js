"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_json_1 = __importDefault(require("./swagger.json")); // Import generated Swagger JSON
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var authenticate_1 = __importDefault(require("./routes/authenticate"));
var applicationRoutes_1 = __importDefault(require("./routes/applicationRoutes"));
var institutionRoutes_1 = __importDefault(require("./routes/institutionRoutes"));
var internshipProgramRoutes_1 = __importDefault(require("./routes/internshipProgramRoutes"));
var internshipTopicRoutes_1 = __importDefault(require("./routes/internshipTopicRoutes"));
var mouRoutes_1 = __importDefault(require("./routes/mouRoutes"));
var stationRoutes_1 = __importDefault(require("./routes/stationRoutes"));
var studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
// Mount API routes
app.use("/api/users", userRoutes_1.default);
app.use("/api/auth", authenticate_1.default);
app.use("/api/applications", applicationRoutes_1.default);
app.use("/api/institutions", institutionRoutes_1.default);
app.use("/api/internship-programs", internshipProgramRoutes_1.default);
app.use("/api/internship-topics", internshipTopicRoutes_1.default);
app.use("/api/mous", mouRoutes_1.default);
app.use("/api/stations", stationRoutes_1.default);
app.use("/api/students", studentRoutes_1.default);
// Serve Swagger UI
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
exports.default = app;
