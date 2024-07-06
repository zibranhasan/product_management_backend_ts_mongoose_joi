import mongoose, { Schema, Document } from "mongoose";
import { Product } from "./product.interface";

interface ProductDocument extends Product, Document {}

const variantSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<ProductDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

const ProductModel = mongoose.model<ProductDocument>("Product", productSchema);
export default ProductModel;
