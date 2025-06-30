const asyncHandler = require("express-async-handler");
const Comment_sc = require("../models/commentschema");
const add_comment = asyncHandler(async(req,res)=>{
    const {comment} = req.body;

    // console.log(comment)
    const add_com = await Comment_sc.create({
        blog_id:req.params.id,
        author_id:req.user.id,
        content:comment.trim()
    });

    console.log(add_com);
    if(add_com)
    {
        res.status(200).json({message:"Commented Successfully"})
    }
    else
    {
        res.status(400).json({message:"Something Went Wrong"})
    }
});

module.exports = {add_comment};