"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.productSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    category: joi_1.default.string().required(),
    tags: joi_1.default.array().items(joi_1.default.string()).required(),
    variants: joi_1.default.array()
        .items(joi_1.default.object({
        type: joi_1.default.string().required(),
        value: joi_1.default.string().required(),
    }))
        .required(),
    inventory: joi_1.default.object({
        quantity: joi_1.default.number().required(),
        inStock: joi_1.default.boolean().required(),
    }).required(),
});
