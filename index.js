const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
// Config variables
const HOSTNAME = "localhost";
const PORT = process.env.PORT || 8080;
// Load static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/:name", (req, res) => {
  const fileName = req.params.name + ".html";
  const pathname = path.join(__dirname, "public", fileName);

  fs.readFile(pathname, (err) => {
    if (err) {
      console.error(err);
      res.sendFile(path.join(__dirname, "public", "404.html"), 404);
    } else {
      res.sendFile(pathname, 200);
    }
  });
});

app.listen(PORT, HOSTNAME, (err) => {
  if (err) {
    console.error(`Something went wrong ${err}`);
  } else {
    console.log(`Server is listening on: ${PORT}`);
  }
});
