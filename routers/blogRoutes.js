const express = require("express");
const authori = require("../middlewares/authorization");
const router = express.Router();
const {createBlogs} = require("../controllers/blogCotroller")

router.post("/",authori,createBlogs);


module.exports= router;