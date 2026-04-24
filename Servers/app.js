const express = require("express");
const routes = require("./routes");
const { swaggerUi, openApiDocument } = require("../Swagger/swagger");

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));
app.use(routes);

module.exports = app;
