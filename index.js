require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/auth/",require("./routers/userRoute"));
app.use(express.json());


app.listen(PORT,(err)=>{
    if(!err)
    {
        console.log(`Server Connected Sucessfully to the port ${PORT}`);
    }
});
