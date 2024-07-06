"use strict";
// src/services/orderService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../product/product.model"));
const order_model_1 = __importDefault(require("./order.model"));
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.default.findById(order.productId);
    if (!product) {
        throw new Error("Product not found");
    }
    if (product.inventory.quantity < order.quantity) {
        throw new Error("Insufficient quantity available in inventory");
    }
    product.inventory.quantity -= order.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    yield product.save();
    const newOrder = new order_model_1.default(order);
    return newOrder.save();
});
const getAllOrders = () => {
    return order_model_1.default.find();
};
const getOrdersByEmail = (email) => {
    return order_model_1.default.find({ email });
};
exports.default = {
    createOrder,
    getAllOrders,
    getOrdersByEmail,
};
