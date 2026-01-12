const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
    return;
  }
  if (req.url === "/about") {
    res.end("About Page");
    return;
  }
  res.end("Error Page");
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
