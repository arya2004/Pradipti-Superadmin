"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// Define Swagger options
var swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Internship Management API",
            version: "1.0.0",
            description: "API documentation for Internship Management System",
        },
        servers: [
            {
                url: "http://localhost:3000/api",
            },
        ],
    },
    apis: ["./routes/*.ts"], // Path to your route files
};
// Initialize Swagger docs
var swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
// Function to setup Swagger UI
var setupSwagger = function (app) {
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    console.log("Swagger UI available at: http://localhost:3000/api-docs");
};
exports.setupSwagger = setupSwagger;
