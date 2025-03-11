"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userController_1 = require("../controllers/userController");
var router = express_1.default.Router();
router.use(express_1.default.json()); // Make sure this is before your routes
router.get('/users', userController_1.getUsers);
router.post('/users', userController_1.createNewUser);
exports.default = router;
