const mongoose = require("mongoose");
const userdetails = mongoose.Schema({
    username:
    {
        type:String
    },
    useremail:{
        type:String
    },
    password:{
        type:String
    }
},
{
    timestamp:true
});

module.exports=mongoose.model("user",userdetails,"User");