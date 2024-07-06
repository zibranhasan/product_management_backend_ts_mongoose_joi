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
const product_model_1 = __importDefault(require("./product.model"));
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = new product_model_1.default(product);
    return newProduct.save();
});
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return product_model_1.default.find();
});
const getProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return product_model_1.default.findById(productId);
});
const updateProduct = (productId, productData) => __awaiter(void 0, void 0, void 0, function* () {
    return product_model_1.default.findByIdAndUpdate(productId, productData, { new: true });
});
const deleteProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return product_model_1.default.findByIdAndDelete(productId);
});
const searchProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    return product_model_1.default.find({ name: new RegExp(searchTerm, "i") });
});
exports.default = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    searchProducts,
};
