const express = require("express");
const users = express.Router();
const userService = require("./../db/users");
users.get("/", async(req, res) => {
  const usrs = await userService.get();
  res.send(usrs);
});
users.post("/", async(req, res) => {
  const user= req.body;
  const usr = await userService.create(user);
  res.send(usr);
});
module.exports = users;