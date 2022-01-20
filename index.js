const http = require("http");
const fs = require("fs");
const hostname = "localhost";
const port = 8080;
const dirname = "./";

const server = http.createServer((req, res) => {
  // Checking if requested file is a html page
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      pathname = dirname.concat("index.html");
      res.statusCode = 200;
      break;
    case "/about":
      res.setHeader("Content-Type", "text/html");
      pathname = dirname.concat("about.html");
      res.statusCode = 200;
      break;
    case "/contact-me":
      res.setHeader("Content-Type", "text/html");
      pathname = dirname.concat("contact-me.html");
      res.statusCode = 200;
      break;
    default:
      res.setHeader("Content-Type", "text/html");
      pathname = dirname.concat("404.html");
      res.statusCode = 404;
      break;
  }
  // Checking if requested file is a css page
  if (req.url.indexOf(".css") !== -1) {
    res.setHeader("Content-Type", "text/css");
    res.statusCode = 200;

    switch (req.url) {
      case "/style.css":
        pathname = dirname.concat("style.css");
        break;
      case "/reset.css":
        pathname = dirname.concat("reset.css");
        break;
    }
  }

  fs.readFile(pathname, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(port, hostname, (err) => {
  if (err) {
    console.error(`Something went wrong ${err}`);
  } else {
    console.log(`Server is listening on: ${port}`);
  }
});
