import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: process.env.SWAGGER_TITLE || "NewClicks API",
      version: process.env.SWAGGER_VERSION || "1.0.0",
      description:
        process.env.SWAGGER_DESCRIPTION ||
        "Production-grade affiliate marketing backend service"
    },
    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:5000"
      }
    ]
  },

  apis: ["./src/routes/*.js"] // where Swagger reads annotations
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export { swaggerDocs };