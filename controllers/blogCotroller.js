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
    const blogid = req.params.id;
    // console.log(blogid);
    const isfound = await blog.findById(blogid)
    // console.log(isfound);
    if(!isfound)
    {
        res.status(401).json({message:"User Unauthorized"})
    }
    else
    {
        res.status(200).send(isfound)
    }          
})

const updateblog = asyncHandler(async(req,res)=>{
    const isavail = await blog.find(req.params.id)
    if(!isavail)
    {
        res.status(400).json({menubar:"blog not available"})
    }
    const updating = await blog.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
})



module.exports = {createBlogs, allblogs, getblogs,updateblog};