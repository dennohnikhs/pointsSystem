const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "POINTS SYSTEM ",
      description: "API DOCUMENTATION",
      version: "1.0.0",
    },
  },
  apis: ["./src/v1/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  // Swagger Page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
    // console.log(req._url);
  });
  console.info(`Docs available at http://localhost:${port}/docs`);
}

module.exports = swaggerDocs;
