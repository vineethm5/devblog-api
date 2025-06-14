const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title:String,
    required:[true,"Please Enter Blog Title"],
    
})