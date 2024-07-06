// src/controllers/orderController.ts
import { Request, Response } from "express";
import { orderSchema } from "./order.validation";
import orderService from "./order.service";

export const createOrder = async (req: Request, res: Response) => {
  const { error } = orderSchema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  try {
    const order = req.body;
    const newOrder = await orderService.createOrder(order);
    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: newOrder,
    });
  } catch (err) {
    // Type guard to check if err is an instance of Error
    if (err instanceof Error) {
      res.status(500).json({ success: false, message: err.message });
    } else {
      res
        .status(500)
        .json({ success: false, message: "An unknown error occurred" });
    }
  }
};

export const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: orders,
    });
  } catch (err) {
    // Type guard to check if err is an instance of Error
    if (err instanceof Error) {
      res.status(500).json({ success: false, message: err.message });
    } else {
      res
        .status(500)
        .json({ success: false, message: "An unknown error occurred" });
    }
  }
};

export const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const orders = await orderService.getOrdersByEmail(email);
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully for user email!",
      data: orders,
    });
  } catch (err) {
    // Type guard to check if err is an instance of Error
    if (err instanceof Error) {
      res.status(500).json({ success: false, message: err.message });
    } else {
      res
        .status(500)
        .json({ success: false, message: "An unknown error occurre" });
    }
  }
};
