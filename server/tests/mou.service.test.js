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
var mouService = __importStar(require("../services/mou.service"));
describe("MOU Service", function () {
    var mouId;
    var institutionId = 1; // Mock institution_id for testing
    var approverId = 1; // Mock user_id for testing
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, drizzle_1.db.execute("DELETE FROM mous")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Create MOU
    it("should create a new MOU", function () { return __awaiter(void 0, void 0, void 0, function () {
        var newMOU;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newMOU = {
                        institution_id: institutionId,
                        mou_start_date: new Date("2024-01-01"),
                        mou_end_date: new Date("2025-01-01"),
                        approver_id: approverId,
                        approved_at: new Date(),
                    };
                    return [4 /*yield*/, mouService.createMOU(newMOU)];
                case 1:
                    mouId = _a.sent();
                    expect(mouId).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Get All MOUs
    it("should retrieve all MOUs", function () { return __awaiter(void 0, void 0, void 0, function () {
        var mous;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mouService.getAllMOUs()];
                case 1:
                    mous = _a.sent();
                    expect(mous.length).toBeGreaterThan(0);
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Get MOU By ID
    it("should retrieve a MOU by ID", function () { return __awaiter(void 0, void 0, void 0, function () {
        var mou;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mouService.getMOUById(mouId)];
                case 1:
                    mou = _a.sent();
                    expect(mou).not.toBeNull();
                    expect(mou === null || mou === void 0 ? void 0 : mou.institution_id).toBe(institutionId);
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Update MOU
    it("should update an existing MOU", function () { return __awaiter(void 0, void 0, void 0, function () {
        var updateData, affectedRows, updatedMOU;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateData = {
                        mou_status: "Expired",
                    };
                    return [4 /*yield*/, mouService.updateMOU(mouId, updateData)];
                case 1:
                    affectedRows = _a.sent();
                    expect(affectedRows).toBe(1);
                    return [4 /*yield*/, mouService.getMOUById(mouId)];
                case 2:
                    updatedMOU = _a.sent();
                    expect(updatedMOU === null || updatedMOU === void 0 ? void 0 : updatedMOU.mou_status).toBe("Expired");
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Delete MOU
    it("should delete a MOU", function () { return __awaiter(void 0, void 0, void 0, function () {
        var affectedRows, deletedMOU;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mouService.deleteMOU(mouId)];
                case 1:
                    affectedRows = _a.sent();
                    expect(affectedRows).toBe(1);
                    return [4 /*yield*/, mouService.getMOUById(mouId)];
                case 2:
                    deletedMOU = _a.sent();
                    expect(deletedMOU).toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
});
