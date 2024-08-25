require("dotenv").config()
const express = require('express');
const app = express()
const registerRoute = require("./route/register")
const connectDB = require("./fetchdb")
const cors = require("cors")

app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.status(200).send("Hello !")
})

app.use("/api",registerRoute)


connectDB().then(()=>{

    const PORT = process.env.PORT || 5000;
    app.listen(PORT,()=>{
        console.log("Server Started!")
    })

})