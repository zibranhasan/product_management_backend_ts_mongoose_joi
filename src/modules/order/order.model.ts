// src/models/orderModel.ts
import mongoose, { Schema, Document } from "mongoose";
import { Order } from "./order.interface";

export interface OrderDocument extends Order, Document {}

const orderSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model<OrderDocument>("Order", orderSchema);
export default OrderModel;
