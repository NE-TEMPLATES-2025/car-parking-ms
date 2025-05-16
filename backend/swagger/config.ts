import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Car Parking Management System",
      version: "1.0.0",
      description: "APIs for managing car parks including slots, vehicles, users, etc...",
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1/",
      },
    ],
    components: {
  securitySchemes: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
},
security: [
  {
    bearerAuth: [],
  },
],
  },
  apis: ["./routes/*.ts"], // all your route files
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
