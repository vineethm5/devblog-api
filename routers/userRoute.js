const express = require("express");
const router = express.Router();
const authorize = require("../middlewares/authorization")
const {signup,login,userinfo} = require("../controllers/userControllers");

router.post("/signup",signup);
router.post("/login",login);
router.post("/userinfo",authorize,userinfo);

module.exports=router;