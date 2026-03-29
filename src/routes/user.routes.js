import express from "express";
import { createUser, getUserById } from "../controllers/user.controller.js";
import { validateRequiredFields } from "../middlewares/validation.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 */
router.post(
  "/",
  validateRequiredFields(["name", "email"]),
  createUser
);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 */
router.get("/:id", getUserById);

export default router;