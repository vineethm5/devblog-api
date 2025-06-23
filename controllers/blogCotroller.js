const asyncHandler = require("express-async-handler");
const blog = require("../models/blogModel");


const createBlogs = asyncHandler(async(req,res)=>{
    const {title,content,tags,author,createdAt} = req.body;
    console.log(req.user)
    if(!req.user)
    {
        res.status(401).json({message:"Unauthorized"});
    }
    
    const blogcreate = await blog.create({
        user_id : req.user.id,
        title: title,
        content: content,
        tags : tags,
        author: author,
        createdAt

        })

    if(blogcreate)
    {
        res.status(201).json({message:"blog has been created"});
    }
    else
    {
        res.status(400).json({message:"something went wrong"});
    }
    
})

const allblogs = asyncHandler(async(req,res)=>{

    const blogs = await blog.find({user_id: req.user.id}).sort({createdAt: -1});
    res.status(200).json(blogs);

})

const getblogs = asyncHandler(async(req,res)=>{
    const userid = req.params.id;
    const isfound = await blog.findById({user_id:userid})
    if(!isfound)
    {
        res.status(401).json({message:"User Unauthorized"})
    }
    else
    {
        console.log(isfound);
    }          
})



module.exports = {createBlogs, allblogs, getblogs};