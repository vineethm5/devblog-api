const express = require("express");
const authori = require("../middlewares/authorization");
const uplo = require("../middlewares/upload");
const router = express.Router();

const {createBlogs,allblogs,getblogs,deleteblog,uploadd} = require("../controllers/blogCotroller");
const {add_comment,view_comments,} = require("../controllers/CommentController");



router.post("/",authori,createBlogs);
router.get("/",authori,allblogs);
router.get("/:id",authori,getblogs);
router.delete("/:id",authori,deleteblog);
router.post("/:id/comments",authori,add_comment);
router.get("/:id/comments",authori,view_comments);

router.post("/upload",uplo.single('file'),uploadd);
// The uplo middleware (from multer) is being used directly. By default, multer expects a field name for the file, such as uplo.single('file') or uplo.array('files').
// If you use just uplo, multer will not know which field to expect, and file uploads may not work as intended, possibly resulting in errors like "Unexpected field" or "No file uploaded".

module.exports= router;