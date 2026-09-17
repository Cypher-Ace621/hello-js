// const math = require('./math.js');

// //console.log(math.add(6,6));

// console.log(math.subtraction(7, 12));

// raw-server.js (No NPM needed!)
const http = require("http"); // built-n module
const server = http.createServer((req, res) => {
  //req: Incoming request (method, url, headers)
  //res: Outgoing response(write, end)

  if (req.method === "GET" && req.url === "/") {
    // Manual route check
    res.writeHead(200, { "Content-Type": "text/plan" }); //Manual headers
    res.end("Hello from Raw Node.js!"); // send body & close
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found:("); //basic error
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Raw server running on http://localhost:${PORT}`);
});
