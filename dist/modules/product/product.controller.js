"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("./product.service"));
const product_validation_1 = require("./product.validation");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = product_validation_1.productSchema.validate(req.body);
    if (error) {
        return res
            .status(400)
            .json({ success: false, message: error.details[0].message });
    }
    try {
        const product = req.body;
        const newProduct = yield product_service_1.default.createProduct(product);
        res.status(201).json({
            success: true,
            message: "Product created successfully!",
            data: newProduct,
        });
    }
    catch (err) {
        // Type guard to check if err is an instance of Error
        if (err instanceof Error) {
            res.status(500).json({ success: false, message: err.message });
        }
        else {
            res
                .status(500)
                .json({ success: false, message: "An unknown error occurred" });
        }
    }
});
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_service_1.default.getProducts();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: products,
        });
    }
    catch (err) {
        // Type guard to check if err is an instance of Error
        if (err instanceof Error) {
            res.status(500).json({ success: false, message: err.message });
        }
        else {
            res
                .status(500)
                .json({ success: false, message: "An unknown error occurred" });
        }
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const product = yield product_service_1.default.getProductById(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: product,
        });
    }
    catch (err) {
        // Type guard to check if err is an instance of Error
        if (err instanceof Error) {
            res.status(500).json({ success: false, message: err.message });
        }
        else {
            res
                .status(500)
                .json({ success: false, message: "An unknown error occurred" });
        }
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const updatedProduct = yield product_service_1.default.updateProduct(productId, productData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: updatedProduct,
        });
    }
    catch (err) {
        // Type guard to check if err is an instance of Error
        if (err instanceof Error) {
            res.status(500).json({ success: false, message: err.message });
        }
        else {
            res
                .status(500)
                .json({ success: false, message: "An unknown error occurred" });
        }
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        yield product_service_1.default.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (err) {
        // Type guard to check if err is an instance of Error
        if (err instanceof Error) {
            res.status(500).json({ success: false, message: err.message });
        }
        else {
            res
                .status(500)
                .json({ success: false, message: "An unknown error occurred" });
        }
    }
});
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const products = yield product_service_1.default.searchProducts(searchTerm);
        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: products,
        });
    }
    catch (err) {
        // Type guard to check if err is an instance of Error
        if (err instanceof Error) {
            res.status(500).json({ success: false, message: err.message });
        }
        else {
            res
                .status(500)
                .json({ success: false, message: "An unknown error occurred" });
        }
    }
});
exports.default = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    searchProducts,
};
