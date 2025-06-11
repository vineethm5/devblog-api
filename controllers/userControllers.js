const asyncHandler = require("express-async-handler");
const User= require("../models/userModels");

const signup = asyncHandler(async(req,res)=>{
    const {username,useremail,password} = req.body;
    
    const isfind = await User.findOne({useremail});
    console.log(isfind);
    if(!isfind)
    {
        const adduser= await User.create({
            useremail,
            username,
            password
        });
        if(adduser)
        {
            res.status(201).json({message:"User Created"});
        }
    }
    res.status(400);
})

module.exports = {signup}