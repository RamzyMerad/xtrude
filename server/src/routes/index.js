const express= require("express");
const router= express.Router();
const users = require("./users");
const posts= require("./posts");

router.use("/users",users);
router.use("/posts",posts);

router.get("/",(req,res)=>{
res.sendStatus(200);
});

module.exports =router;