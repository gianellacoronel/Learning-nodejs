const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});

// OUTPUT
// Server listening on port 5000
//  - When I search http://localhost:5000 in browser, message below appears -
// request event
