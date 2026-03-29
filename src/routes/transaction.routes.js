import express from "express";
import {
  createTransaction,
  getAllTransactions
} from "../controllers/transaction.controller.js";
import { validateRequiredFields } from "../middlewares/validation.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /transactions:
 *   post:
 *     summary: Create transaction
 *     tags: [Transactions]
 */
router.post(
  "/",
  validateRequiredFields(["productId", "affiliateId", "amount", "commission"]),
  createTransaction
);

/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Get all transactions
 *     tags: [Transactions]
 */
router.get("/", getAllTransactions);

export default router;