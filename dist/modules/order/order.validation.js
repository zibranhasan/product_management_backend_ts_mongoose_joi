"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
// src/validators/orderValidator.ts
const joi_1 = __importDefault(require("joi"));
exports.orderSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    productId: joi_1.default.string().required(),
    price: joi_1.default.number().positive().required(),
    quantity: joi_1.default.number().integer().positive().required(),
});
