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
exports.deleteInternshipTopic = exports.updateInternshipTopic = exports.getInternshipTopicById = exports.getAllInternshipTopics = exports.createInternshipTopic = void 0;
var internshipTopicService = __importStar(require("../services/internshipTopic.service"));
var createInternshipTopic = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var topicData, newTopicId, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                topicData = req.body;
                return [4 /*yield*/, internshipTopicService.createInternshipTopic(topicData)];
            case 1:
                newTopicId = _a.sent();
                res.status(201).json({ id: newTopicId, message: "Internship topic created successfully" });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error("Error creating internship topic:", error_1);
                res.status(500).json({ error: "Internal server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createInternshipTopic = createInternshipTopic;
var getAllInternshipTopics = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var topics, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, internshipTopicService.getAllInternshipTopics()];
            case 1:
                topics = _a.sent();
                res.status(200).json(topics);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error("Error fetching internship topics:", error_2);
                res.status(500).json({ error: "Internal server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllInternshipTopics = getAllInternshipTopics;
var getInternshipTopicById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var topicId, topic, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                topicId = Number(req.params.id);
                return [4 /*yield*/, internshipTopicService.getInternshipTopicById(topicId)];
            case 1:
                topic = _a.sent();
                if (topic) {
                    res.status(200).json(topic);
                }
                else {
                    res.status(404).json({ error: "Internship topic not found" });
                }
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error("Error fetching internship topic:", error_3);
                res.status(500).json({ error: "Internal server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getInternshipTopicById = getInternshipTopicById;
var updateInternshipTopic = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var topicId, updateData, affectedRows, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                topicId = Number(req.params.id);
                updateData = req.body;
                return [4 /*yield*/, internshipTopicService.updateInternshipTopic(topicId, updateData)];
            case 1:
                affectedRows = _a.sent();
                if (affectedRows > 0) {
                    res.status(200).json({ message: "Internship topic updated successfully" });
                }
                else {
                    res.status(404).json({ error: "Internship topic not found" });
                }
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error("Error updating internship topic:", error_4);
                res.status(500).json({ error: "Internal server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateInternshipTopic = updateInternshipTopic;
var deleteInternshipTopic = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var topicId, affectedRows, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                topicId = Number(req.params.id);
                return [4 /*yield*/, internshipTopicService.deleteInternshipTopic(topicId)];
            case 1:
                affectedRows = _a.sent();
                if (affectedRows > 0) {
                    res.status(200).json({ message: "Internship topic deleted successfully" });
                }
                else {
                    res.status(404).json({ error: "Internship topic not found" });
                }
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error("Error deleting internship topic:", error_5);
                res.status(500).json({ error: "Internal server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteInternshipTopic = deleteInternshipTopic;
