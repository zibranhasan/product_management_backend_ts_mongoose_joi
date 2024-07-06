// src/services/orderService.ts

import ProductModel from "../product/product.model";
import { Order } from "./order.interface";
import OrderModel from "./order.model";

const createOrder = async (order: Order) => {
  const product = await ProductModel.findById(order.productId);

  if (!product) {
    throw new Error("Product not found");
  }

  if (product.inventory.quantity < order.quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  product.inventory.quantity -= order.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();

  const newOrder = new OrderModel(order);
  return newOrder.save();
};

const getAllOrders = () => {
  return OrderModel.find();
};

const getOrdersByEmail = (email: string) => {
  return OrderModel.find({ email });
};

export default {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
