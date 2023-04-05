const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to home page");
});

const users = [{ name: "mohamed" }, { name2: "ayman" }, { name3: "ali" }];

app.post("/users/add", (req, res) => {
  const user = req.body;
  res.end("User add");
});

app.get("/users", (req, res) => {
  res.json(users);
});
app.listen(3000, () => {
  console.log("server listening on port 3000");
});
