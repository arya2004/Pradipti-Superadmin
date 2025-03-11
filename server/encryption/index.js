"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = exports.authentication = void 0;
var crypto_1 = __importDefault(require("crypto"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var authentication = function (salt, password) {
    var secret = process.env.SECRET;
    // Ensure all the values are valid and not undefined
    if (!salt || !password || !secret) {
        throw new Error('Missing required values: salt, password, or secret');
    }
    var hmacData = [salt, password].join('-');
    return crypto_1.default
        .createHmac('sha256', hmacData)
        .update(secret)
        .digest('hex');
};
exports.authentication = authentication;
var random = function () { return crypto_1.default.randomBytes(128).toString('base64'); };
exports.random = random;
