require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;
const errorHandler=require("./middlewares/errorHandler");
const dbConnect = require("./Config/userConfig");
dbConnect();
app.use(express.json());
app.use("/api/auth/",require("./routers/userRoute"));  
app.use("/api/blogs",require("./routers/blogRoutes"));

app.use(errorHandler);


app.listen(PORT,(err)=>{
if(!err)
{
    console.log(`Server Connected Sucessfully to the port ${PORT}`);
}
});
