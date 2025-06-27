const express = require("express");
const authori = require("../middlewares/authorization");
const router = express.Router();
const {createBlogs,allblogs,getblogs,deleteblog} = require("../controllers/blogCotroller")

router.post("/",authori,createBlogs);
router.get("/",authori,allblogs);
router.get("/:id",authori,getblogs);
router.delete("/:id",authori,deleteblog);

module.exports= router;