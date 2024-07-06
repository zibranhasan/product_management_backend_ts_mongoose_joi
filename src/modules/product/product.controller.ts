import { Request, Response } from "express";
import { Product } from "./product.interface";
import productService from "./product.service";
import { productSchema } from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  const { error } = productSchema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  try {
    const product: Product = req.body;
    const newProduct = await productService.createProduct(product);
    res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: newProduct,
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

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getProducts();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: products,
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

const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const product = await productService.getProductById(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: product,
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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const productData: Product = req.body;
    const updatedProduct = await productService.updateProduct(
      productId,
      productData
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: updatedProduct,
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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await productService.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
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

const searchProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const products = await productService.searchProducts(searchTerm);
    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: products,
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

export default {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
};
