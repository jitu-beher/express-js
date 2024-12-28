const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
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
app.listen(3000);
