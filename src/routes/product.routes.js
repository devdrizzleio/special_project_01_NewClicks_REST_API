import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById
} from "../controllers/product.controller.js";
import { validateRequiredFields } from "../middlewares/validation.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a product
 *     tags: [Products]
 */
router.post(
  "/",
  validateRequiredFields(["title", "price", "vendorId"]),
  createProduct
);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 */
router.get("/", getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags: [Products]
 */
router.get("/:id", getProductById);

export default router;