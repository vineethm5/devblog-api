const asyncHandler = require("express-async-handler");
const User= require("../models/userModels");
const bycrpt= require("bcrypt");

const signup = asyncHandler(async(req,res)=>{
    const {username,useremail,password} = req.body;
    
    const isfind = await User.findOne({useremail});
    console.log(isfind);
    const hashedpassword = await bycrpt.hash(password,10);
    if(!isfind)
    {
        const adduser= await User.create({
            useremail,
            username,
            password:hashedpassword
        });
        if(adduser)
        {
            res.status(201).json({message:"User Created"});
        }
    }
    res.status(409).json({message:"User alreday Exits"});
})

module.exports = {signup}