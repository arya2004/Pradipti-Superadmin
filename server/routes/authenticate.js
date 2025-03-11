"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authentication_1 = require("../controllers/authentication");
var userController_1 = require("../controllers/userController");
var isAuthenticated_1 = require("../middleware/isAuthenticated");
var router = express_1.default.Router();
router.post('/auth/register', authentication_1.register);
router.post('/auth/login', authentication_1.login);
router.post('/users', isAuthenticated_1.isAuthenticated, userController_1.getUsers);
exports.default = router;
