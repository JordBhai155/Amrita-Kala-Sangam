const mongoose = require("mongoose");

const URI = process.env.URI

const connectDb = async ()=>{
    try {
        await mongoose.connect(URI)
        console.log("connection successful")
    }
    catch(err){
        console.log("connection failed")
    }
}

module.exports = connectDb;