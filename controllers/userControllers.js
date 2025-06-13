const asyncHandler = require("express-async-handler");
const User= require("../models/userModels");
const bycrpt= require("bcrypt");
const jwt = require("jsonwebtoken");

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
});


const login = asyncHandler(async(req,res)=>{
const {useremail,username,password} = req.body;
const isfound = await User.findOne({useremail});


if(isfound && await bycrpt.compare(password,isfound.password))
{
    const tocken =  jwt.sign({
    useremail:isfound.useremail,
    username: isfound.username,
    id:isfound.id
    },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"10m"})
    res.status(200).json({message:"Login Successfull",tocken:tocken})
}
else{
    res.status(400).json({message:"Invalid username or password"})
}
})

module.exports = {signup,login}