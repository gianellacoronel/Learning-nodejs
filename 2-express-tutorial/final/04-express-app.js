const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
// We have static files, that's why we use express.static
// Static files are files that server doesn't need to change
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
