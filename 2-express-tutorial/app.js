// First, we import the module
const express = require("express");
// Then, we invoke it
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

// app.get
// app.post
// app.put
// app.delete
// app.all -> Works with all of previous methods
// app.use -> For middleware
// app.listen
