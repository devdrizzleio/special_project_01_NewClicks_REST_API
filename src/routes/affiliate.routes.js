import express from "express";
import { createAffiliateLink } from "../controllers/affiliate.controller.js";
import { validateRequiredFields } from "../middlewares/validation.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /affiliate-links:
 *   post:
 *     summary: Generate affiliate link
 *     tags: [Affiliate]
 */
router.post(
  "/",
  validateRequiredFields(["productId", "affiliateId"]),
  createAffiliateLink
);

export default router;