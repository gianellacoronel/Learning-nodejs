const express = require("express");
const app = express();

// req => middleware => res
// MIDDLEWARE FUNCTION
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time); // GET / 2026
  next(); // IT'S IMPORTANT TO CALL NEXT() TO MOVE TO THE NEXT MIDDLEWARE FUNCTION
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
