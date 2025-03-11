"use strict";
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
exports.login = exports.register = void 0;
var encryption_1 = require("../encryption");
var user_service_1 = require("../services/user.service");
var userOperations_1 = require("../db/userOperations");
var constants_1 = require("../constants");
var register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, username, email, password, existingUser, salt, hashedPassword, userId, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, id = _a.id, username = _a.username, email = _a.email, password = _a.password;
                // Input validation
                if (!id || !username || !email || !password) {
                    res.status(400).json({ error: 'All fields (id, username, email, password) are required' });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, user_service_1.getUserByName)(username)];
            case 1:
                existingUser = _b.sent();
                if (existingUser) {
                    res.status(409).json({ error: 'Username already taken' });
                    return [2 /*return*/];
                }
                salt = (0, encryption_1.random)();
                hashedPassword = (0, encryption_1.authentication)(salt, password);
                return [4 /*yield*/, (0, userOperations_1.createUser)({
                        id: id,
                        username: username,
                        email: email,
                        salt: salt,
                        password_hash: hashedPassword,
                        role: 'user', // Default role can be user or admin based on your requirements
                    })];
            case 2:
                userId = _b.sent();
                res.status(201).json({ message: 'User created successfully', userId: userId });
                return [3 /*break*/, 4];
            case 3:
                e_1 = _b.sent();
                console.error(e_1);
                res.status(500).json({ error: 'Internal server error' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.register = register;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, result, user, expectedHash, e_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, username = _a.username, password = _a.password;
                // Input validation
                if (!username || !password) {
                    res.status(400).json({ error: 'Username and password are required' });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, user_service_1.getUserByName)(username)];
            case 1:
                result = _b.sent();
                if (!result) {
                    res.status(404).json({ error: 'User not found' });
                    return [2 /*return*/];
                }
                user = result[0];
                expectedHash = (0, encryption_1.authentication)(user.salt, password);
                // Check password
                if (user.password_hash !== expectedHash) {
                    res.status(401).json({ error: 'Invalid password' });
                    return [2 /*return*/];
                }
                // Generate session token
                user.sessiontoken = (0, encryption_1.authentication)((0, encryption_1.random)(), user.password_hash);
                // Update user with session token
                return [4 /*yield*/, (0, user_service_1.updateUser)(user.id, { sessiontoken: user.sessiontoken })];
            case 2:
                // Update user with session token
                _b.sent();
                // Set session cookie
                res.cookie(constants_1.SESSION_TOKEN, user.sessiontoken, {
                    domain: constants_1.DOMAIN,
                    path: '/',
                    expires: new Date(Date.now() + 900000), // 15 minutes
                    httpOnly: true, // important for security
                    secure: process.env.NODE_ENV === 'production', // secure cookie in production
                });
                res.status(200).json({ message: 'Login successful' });
                return [3 /*break*/, 4];
            case 3:
                e_2 = _b.sent();
                console.error(e_2);
                res.status(500).json({ error: 'Internal server error' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
