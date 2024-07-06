// src/routes/orderRoutes.ts
import { Router } from "express";
import {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
} from "./order.controller";

const router = Router();
router.get("/orders", getAllOrders);
router.get("/orders/search", getOrdersByEmail);
router.post("/orders", createOrder);

export const OrderRoutes = router;
