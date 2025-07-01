const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const commentSch = moongose.Schema({

    blog_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Blog"   // this always should be a string, not a variable
    },
    author_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User" // this always should be a string, not a variable
    },
    content:{
        type:String,
        required:[true]
    },
    entered_on:
    {
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Comments",commentSch);