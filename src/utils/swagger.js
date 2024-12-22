import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Petshop API",
            version: "1.0.0",
            description: "API para el manejo de usuarios en el Petshop"
        },
    },
    apis: ["./routes/users.router.js"], // Cambia según la ubicación de tus rutas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
