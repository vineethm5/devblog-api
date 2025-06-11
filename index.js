require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;
const errorHandler=require("./middlewares/errorHandler");

app.use(express.json());
app.use("/api/auth/",require("./routers/userRoute"));

app.use(errorHandler);


app.listen(PORT,(err)=>{
if(!err)
{
    console.log(`Server Connected Sucessfully to the port ${PORT}`);
}
});
