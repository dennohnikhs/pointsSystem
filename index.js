const express = require("express");
const dotenv = require("dotenv");
const v1Router = require("./src/v1/routes/index");
const swaggerDocs = require("./swagger");
const authMiddleware = require("./src/middleware/auth-middleware");
const app = express();

app.use(express.json());
app.use(authMiddleware);
app.use(v1Router);
dotenv.config({ path: "config.env" });
const port = process.env.PORT || 5500;

app.get("/", (req, res) => {
  res.send("Server has started...");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  swaggerDocs(app, port);
});
