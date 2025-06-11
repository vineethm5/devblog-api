const constants = require("../CONSTANTS");
const { stack } = require("../routers/userRoute");
 const errorHandler = (err,req,res,next)=>{
    const statuscode = res.status ? res.status : 500
    switch(statuscode)
    {
        case constants.VALIDATION_ERROR:
        res.json({title:"validation ",message:err.message,stacktrace:err.stack});
        case constants.UNAUTHORIZED:
        res.json({title:"Unauthorized ",message:err.message,stacktrace:err.stack});
        case constants.FORBIDDEN:
        res.json({title:"forbidden",message:err.message,stacktrace:err.stack});
        case constants.NOT_FOUND:
        res.json({title:"Not found",message:err.message,stacktrace:err.stack});
        case constants.SERVER_ERROR:
        res.json({title:"Server error ",message:err.message,stacktrace:err.stack});
    }
 }

 module.exports=errorHandler;