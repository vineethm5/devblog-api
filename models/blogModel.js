const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
user_id:{
type : mongoose.Schema.Types.ObjectId,
ref:"User",
required:[true,"Please enter the User id"]
},

    title:
    { type : String,
    required:[true,"Please Enter Blog Title"]
    },
    content:{
        type: String,
        required:[true,"Please Enter the Content"]
    },
    tags:{
        type:[String],
        default:[]
    },
    author:{
        type:String,
        required:[true,"Please enter the author name"]
    },
    createdAt:{
        type:Date
    }

    
},
{
    timestap:true
}
)
module.exports = mongoose.model("Blog",blogSchema);