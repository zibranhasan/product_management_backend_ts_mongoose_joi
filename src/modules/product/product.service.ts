import { Product } from "./product.interface";
import ProductModel from "./product.model";

const createProduct = async (product: Product) => {
  const newProduct = new ProductModel(product);
  return newProduct.save();
};

const getProducts = async () => {
  return ProductModel.find();
};

const getProductById = async (productId: string) => {
  return ProductModel.findById(productId);
};

const updateProduct = async (productId: string, productData: Product) => {
  return ProductModel.findByIdAndUpdate(productId, productData, { new: true });
};

const deleteProduct = async (productId: string) => {
  return ProductModel.findByIdAndDelete(productId);
};

const searchProducts = async (searchTerm: string) => {
  return ProductModel.find({ name: new RegExp(searchTerm, "i") });
};
export default {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
};
