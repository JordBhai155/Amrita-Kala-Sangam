const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        required:true,


    },
    age:{
        type:String,
        required:true,

    },
    
    
})


// Defining the model

const User = new mongoose.model("User", userSchema)

module.exports = User