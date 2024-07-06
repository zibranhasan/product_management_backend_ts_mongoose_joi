"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
// src/routes/orderRoutes.ts
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const router = (0, express_1.Router)();
router.get("/orders", order_controller_1.getAllOrders);
router.get("/orders/search", order_controller_1.getOrdersByEmail);
router.post("/orders", order_controller_1.createOrder);
exports.OrderRoutes = router;
