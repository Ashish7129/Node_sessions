const express = require("express");
const server = express();
let greetings = ["Good Evening", "Hello Moto", "Golu ka birthday"];
server.get("/", (req, res) => {
  res.send("Hello World");
});

server.get("/greet", (req, res) => {
  res.send("Good Morning");
});

server.get("/greet/:id", (req, res) => {
  if (isNaN(parseInt(req.params.id))) {
    res.send("Wrong Number");
  }
  res.send(greetings[req.params["id"]]);
});

function m1(req, res, next) {
  console.log(m1);
  next();
}
function m2(req, res, next) {
  console.log(m2);
  next();
}
server.use("/hello", m1);
server.use(m2);
server.get("/hello", (req, res) => {
  console.log(req.query);
  res.send("hello " + req.query.name);
});
server.listen(2222);
