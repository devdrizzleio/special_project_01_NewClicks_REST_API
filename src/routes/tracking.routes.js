import express from "express";
import {
  trackClick,
  trackPurchase
} from "../controllers/tracking.controller.js";

const router = express.Router();

/**
 * @swagger
 * /track:
 *   get:
 *     summary: Track click event
 *     tags: [Tracking]
 */
router.get("/", trackClick);

/**
 * @swagger
 * /track/purchase:
 *   post:
 *     summary: Track purchase event
 *     tags: [Tracking]
 */
router.post("/purchase", trackPurchase);

export default router;