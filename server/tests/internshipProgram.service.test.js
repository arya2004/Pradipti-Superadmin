"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var drizzle_1 = require("../db/drizzle");
var internshipProgramService = __importStar(require("../services/internshipProgram.service"));
describe("Internship Program Service", function () {
    var programId;
    var stationId = 1;
    var topicId = 1;
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, drizzle_1.db.execute("DELETE FROM internship_programs")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Create Internship Program
    it("should create a new internship program", function () { return __awaiter(void 0, void 0, void 0, function () {
        var newProgram;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newProgram = {
                        station_id: stationId,
                        topic_id: topicId,
                        internship_title: "AI in Aviation",
                        internship_details: "Exploring AI applications in airports",
                        duration_weeks: 8,
                        seats_available: 10,
                        start_date: new Date("2024-06-01"),
                        end_date: new Date("2024-08-01"),
                    };
                    return [4 /*yield*/, internshipProgramService.createInternshipProgram(newProgram)];
                case 1:
                    programId = _a.sent();
                    expect(programId).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Get All Internship Programs
    it("should retrieve all internship programs", function () { return __awaiter(void 0, void 0, void 0, function () {
        var programs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internshipProgramService.getAllInternshipPrograms()];
                case 1:
                    programs = _a.sent();
                    expect(programs.length).toBeGreaterThan(0);
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Get Internship Program By ID
    it("should retrieve an internship program by ID", function () { return __awaiter(void 0, void 0, void 0, function () {
        var program;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internshipProgramService.getInternshipProgramById(programId)];
                case 1:
                    program = _a.sent();
                    expect(program).not.toBeNull();
                    expect(program === null || program === void 0 ? void 0 : program.internship_title).toBe("AI in Aviation");
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Update Internship Program
    it("should update an existing internship program", function () { return __awaiter(void 0, void 0, void 0, function () {
        var updateData, affectedRows, updatedProgram;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateData = {
                        internship_title: "Machine Learning in Aviation",
                        duration_weeks: 12,
                    };
                    return [4 /*yield*/, internshipProgramService.updateInternshipProgram(programId, updateData)];
                case 1:
                    affectedRows = _a.sent();
                    expect(affectedRows).toBe(1);
                    return [4 /*yield*/, internshipProgramService.getInternshipProgramById(programId)];
                case 2:
                    updatedProgram = _a.sent();
                    expect(updatedProgram === null || updatedProgram === void 0 ? void 0 : updatedProgram.internship_title).toBe("Machine Learning in Aviation");
                    expect(updatedProgram === null || updatedProgram === void 0 ? void 0 : updatedProgram.duration_weeks).toBe(12);
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Delete Internship Program
    it("should delete an internship program", function () { return __awaiter(void 0, void 0, void 0, function () {
        var affectedRows, deletedProgram;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internshipProgramService.deleteInternshipProgram(programId)];
                case 1:
                    affectedRows = _a.sent();
                    expect(affectedRows).toBe(1);
                    return [4 /*yield*/, internshipProgramService.getInternshipProgramById(programId)];
                case 2:
                    deletedProgram = _a.sent();
                    expect(deletedProgram).toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
});
