const mongoose = require("mongoose");

const connect = async () =>
{
    try{

        const dbConect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(dbConect.connection.name,dbConect.connection.host);
    }
    catch(err)
    {
        console.log(err);
        process.exit(1);
    }
}

module.exports=connect;

