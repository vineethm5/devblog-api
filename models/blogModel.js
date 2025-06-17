const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title:
    { type : String,
    required:[true,"Please Enter Blog Title"]
    },
    content:{
        type: String,
        required:[true,"Please Enter the Content"]
    },
    tags:{
        type:String,
        required:[true,"Please enter the Tags"]
    },
    author:{
        type:String,
        required:[true,"Please enter the author name"]
    },
    created_at:{
        type:Date
    }

    
},
{
    timestap:true
}
)