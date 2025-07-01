const express = require("express");
const authori = require("../middlewares/authorization");
const router = express.Router();
const {createBlogs,allblogs,getblogs,deleteblog} = require("../controllers/blogCotroller");
const {add_comment,view_comments} = require("../controllers/CommentController");

router.post("/",authori,createBlogs);
router.get("/",authori,allblogs);
router.get("/:id",authori,getblogs);
router.delete("/:id",authori,deleteblog);
router.post("/:id/comments",authori,add_comment);
router.get("/:id/comments",authori,view_comments);

module.exports= router;