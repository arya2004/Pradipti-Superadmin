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
var userService = __importStar(require("../services/user.service"));
describe("User Service", function () {
    var userId;
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, drizzle_1.db.execute("DELETE FROM users")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Create User
    it("should create a new user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var newUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newUser = {
                        username: "testuser",
                        email: "testuser@example.com",
                        salt: "randomSalt123",
                        password_hash: "hashedPassword123",
                        sessiontoken: null,
                        role: "Admin",
                    };
                    return [4 /*yield*/, userService.createUser(newUser)];
                case 1:
                    userId = _a.sent();
                    expect(userId).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Get All Users
    it("should retrieve all users", function () { return __awaiter(void 0, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService.getAllUsers()];
                case 1:
                    users = _a.sent();
                    expect(users.length).toBeGreaterThan(0);
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Get User By ID
    it("should retrieve a user by ID", function () { return __awaiter(void 0, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService.getUserById(userId)];
                case 1:
                    user = _a.sent();
                    expect(user).not.toBeNull();
                    expect(user === null || user === void 0 ? void 0 : user.name).toBe("testuser");
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Update User
    it("should update an existing user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var updateData, affectedRows, updatedUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateData = {
                        username: "updateduser",
                        role: "SuperAdmin",
                    };
                    return [4 /*yield*/, userService.updateUser(userId, updateData)];
                case 1:
                    affectedRows = _a.sent();
                    expect(affectedRows).toBe(1);
                    return [4 /*yield*/, userService.getUserById(userId)];
                case 2:
                    updatedUser = _a.sent();
                    expect(updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.name).toBe("updateduser");
                    expect(updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.role).toBe("SuperAdmin");
                    return [2 /*return*/];
            }
        });
    }); });
    // ✅ Test Delete User
    it("should delete a user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var affectedRows, deletedUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userService.deleteUser(userId)];
                case 1:
                    affectedRows = _a.sent();
                    expect(affectedRows).toBe(1);
                    return [4 /*yield*/, userService.getUserById(userId)];
                case 2:
                    deletedUser = _a.sent();
                    expect(deletedUser).toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
});
