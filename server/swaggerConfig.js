"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var swagger_autogen_1 = __importDefault(require("swagger-autogen"));
var doc = {
    info: {
        title: "Internship Management API",
        description: "API documentation for Internship Management System",
        version: "1.0.0",
    },
    host: "localhost:5000",
    schemes: ["http"],
    basePath: "/api",
};
var outputFile = "./swagger.json";
var routes = ["./app.ts"];
(0, swagger_autogen_1.default)()(outputFile, routes).then(function () {
    console.log("Swagger documentation generated!");
});
