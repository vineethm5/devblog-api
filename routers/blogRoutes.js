const express = require("express");
const authori = require("../middlewares/authorization");
const router = express.Router();
const {createBlogs,allblogs,getblogs} = require("../controllers/blogCotroller")

router.post("/",authori,createBlogs);
router.get("/",authori,allblogs);
router.get("/:id",authori,getblogs);

module.exports= router;