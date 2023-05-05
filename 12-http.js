const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the server");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
        <h1>Oops!</h1>
        <p>Page not found</p>
        <a href="/">back to home</a>
    `);
  }
});

server.listen(5000);
