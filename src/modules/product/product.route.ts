import { Router } from "express";
import productController from "./product.controller";

const router = Router();
router.get("/products", productController.searchProducts);
router.post("/products", productController.createProduct);
router.get("/products", productController.getProducts);
router.get("/products/:productId", productController.getProductById);
router.put("/products/:productId", productController.updateProduct);
router.delete("/products/:productId", productController.deleteProduct);

export const ProductRoutes = router;
