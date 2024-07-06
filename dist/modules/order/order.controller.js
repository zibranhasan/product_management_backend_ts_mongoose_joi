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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersByEmail = exports.getAllOrders = exports.createOrder = void 0;
const order_validation_1 = require("./order.validation");
const order_service_1 = __importDefault(require("./order.service"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = order_validation_1.orderSchema.validate(req.body);
    if (error) {
        return res
            .status(400)
            .json({ success: false, message: error.details[0].message });
    }
    try {
        const order = req.body;
        const newOrder = yield order_service_1.default.createOrder(order);
        res.status(201).json({
            success: true,
            message: "Order created successfully!",
            data: newOrder,
        });
    }
    catch (err) {
        // Type guard to check if err is an instance of Error
        if (err instanceof Error) {
            res.status(500).json({ success: false, message: err.message });
        }
        else {
            res
                .status(500)
                .json({ success: false, message: "An unknown error occurred" });
        }
    }
});
exports.createOrder = createOrder;
const getAllOrders = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield order_service_1.default.getAllOrders();
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: orders,
        });
    }
    catch (err) {
        // Type guard to check if err is an instance of Error
        if (err instanceof Error) {
            res.status(500).json({ success: false, message: err.message });
        }
        else {
            res
                .status(500)
                .json({ success: false, message: "An unknown error occurred" });
        }
    }
});
exports.getAllOrders = getAllOrders;
const getOrdersByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const orders = yield order_service_1.default.getOrdersByEmail(email);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully for user email!",
            data: orders,
        });
    }
    catch (err) {
        // Type guard to check if err is an instance of Error
        if (err instanceof Error) {
            res.status(500).json({ success: false, message: err.message });
        }
        else {
            res
                .status(500)
                .json({ success: false, message: "An unknown error occurred" });
        }
    }
});
exports.getOrdersByEmail = getOrdersByEmail;
