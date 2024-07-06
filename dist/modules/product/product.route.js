"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = __importDefault(require("./product.controller"));
const router = (0, express_1.Router)();
router.get("/products", product_controller_1.default.searchProducts);
router.post("/products", product_controller_1.default.createProduct);
router.get("/products", product_controller_1.default.getProducts);
router.get("/products/:productId", product_controller_1.default.getProductById);
router.put("/products/:productId", product_controller_1.default.updateProduct);
router.delete("/products/:productId", product_controller_1.default.deleteProduct);
exports.ProductRoutes = router;
