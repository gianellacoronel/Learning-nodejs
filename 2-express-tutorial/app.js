const express = require("express");
const app = express();
const logger = require("./logger");

// This always need to be before the routes we want to log
// Because express executes code in order
app.use(logger);
// app.use("/api", logger); // This middleware will only affect to routes that starts with /api

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
