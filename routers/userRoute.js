const express = require("express");
const router = express.Router();
const authorize = require("../middlewares/authorization")
const {signup,login} = require("../controllers/userControllers");

router.post("/signup",signup);
router.post("/login",authorize,login);

module.exports=router;