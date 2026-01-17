const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// This always need to be before the routes we want to log
// Because express executes code in order
app.use([logger, authorize]);
// app.use("/api", logger); // This middleware will only affect to routes that starts with /api

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  // http://localhost:5000/api/products?user=bruce
  console.log(req.user); //{ name: 'bruce', id: 7 }
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
