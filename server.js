import express from "express";
import cors from "cors";
import morgan from "morgan";

import { loadEnvVariables } from "./src/config/env.config.js";
import { connectDatabase } from "./src/config/db.config.js";

import userRoutes from "./src/routes/user.routes.js";
import productRoutes from "./src/routes/product.routes.js";
import affiliateRoutes from "./src/routes/affiliate.routes.js";
import trackingRoutes from "./src/routes/tracking.routes.js";
import transactionRoutes from "./src/routes/transaction.routes.js";

import { swaggerDocs } from "./docs/swagger.js";
import { errorHandler } from "./src/middlewares/error.middleware.js";

// ==============================
// LOAD ENV VARIABLES
// ==============================
loadEnvVariables();

// ==============================
// INITIALIZE APP
// ==============================
const app = express();

// ==============================
// CORE MIDDLEWARES
// ==============================
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ==============================
// HEALTH CHECK ROUTE
// ==============================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${process.env.APP_NAME} API is running healthy & lively`
  });
});

// ==============================
// API ROUTES
// ==============================
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/affiliate-links", affiliateRoutes);
app.use("/api/v1/track", trackingRoutes);
app.use("/api/v1/transactions", transactionRoutes);

// ==============================
// SWAGGER DOCUMENTATION
// ==============================
swaggerDocs(app);

// ==============================
// ERROR HANDLING MIDDLEWARE
// ==============================
app.use(errorHandler);

// ==============================
// DATABASE CONNECTION + SERVER START
// ==============================
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📘 Swagger Docs available at /api-docs`);
    });
  } catch (error) {
    console.error("Server startup error:", error.message);
    process.exit(1);
  }
};

startServer();