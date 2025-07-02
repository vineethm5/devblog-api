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



// localhost:5000/api/blogs/?tag=mysql&authors=vishnu M
const allblogs = asyncHandler(async(req,res)=>{
    // const blogs = await blog.find({user_id: req.user.id}).sort({createdAt: -1})
    const {tag,authors} = req.query;
    filter = {user_id:req.user.id}
    if(tag)
    {
        filter.tags = {$in :[tag]}
    }
    if(authors)
    {
        filter.author = {$in : [authors]}
    }

    console.log(filter)

    // Only include blogs where the tags array contains the given tag.
    // $in: [tag] means: match if tag exists in the tags array.

    const is_avail = await blog.find(filter);
    if(is_avail)
    {
        res.status(200).json(is_avail);
    }
    else
    {

        res.status(400).json({message:"No blogs found"});
    }
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

const deleteblog = asyncHandler(async(req,res)=>{
    console.log("test")
    const isavail = await blog.findById(req.params.id)
    console.log(isavail)
    if(!isavail)
    {
        res.status(400).json({message:"blog not available"})
    }
    console.log(isavail);
    const dele= await isavail.deleteOne()
    if(dele)
    {
        res.status(200).json({message:"deleted Successfully"})
    }
})



const uploadd = (req,res)=>
{
    if(!req.file)
    {
        res.status(400).json({message:"No file uploaded"})
    }
    else
    {
        res.status(200).json({message:"uploaded Successfully",file:req.file})
    }

}


module.exports = {createBlogs, allblogs, getblogs,updateblog,deleteblog,uploadd};