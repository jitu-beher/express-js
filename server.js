const express = require("express");

const app = express();
app.use(logger);

app.set("view engine", "ejs");

app.get("/", homePagelogger, (req, res) => {
  res.status(500).send("Hi");
});

app.get("/download-serverjs", (req, res) => {
  res.download("./server.js");
});

app.get("/index", (req, res) => {
  res.render("index", { text: "Some Text" });
});

const userRouter = require("./router/users");
app.use("/users", userRouter);

function logger(req, res, next) {
  console.log("common logger");
  console.log(req.originalUrl);
  next();
}

function homePagelogger(req, res, next) {
  console.log("home page logger");
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
