const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.get("/greet", (req, res) => {
  res.send("Good Morning");
});
server.listen(2222);
