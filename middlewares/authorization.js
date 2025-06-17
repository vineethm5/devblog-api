const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const validate = asyncHandler(async(req,res,next)=>{

    const authheader =  req.headers.authorization || req.headers.Authorization;
    if(authheader && authheader.startsWith("Bearer "))
    {
        let tocken = authheader.split(" ")[1];
        const verify = jwt.verify(tocken,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err)
            {
                if(err.name === 'TockenExpriedError')
                {
                    return res.status(401).json({message:"tocken expired please login agin"});
                }
                else
                {
                    return res.status(403).json({message:"Unauthorized"});
                }
            }
            req.user = decoded
            next();
        });
    }
    else{
        res.status(401)
        throw new Error("No tocken provided")
    }
})

module.exports=validate;