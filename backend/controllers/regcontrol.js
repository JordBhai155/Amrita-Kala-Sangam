const express= require("express");
const app = express()
const User = require("../model/usermodel")



const home = async (req,res) =>{
    try{
        res.status(200).send("competition")
    }
    catch(err){
        console.log(err)
    }
}

const register = async (req,res)=>{
    try{

        const {name ,email , age } = req.body

        

        await User.create({name ,email , age })

        
        console.log(req.body)
        // const data = req.body 
        res.status(200).send("running registration page")
    }
    catch(err){
        console.log(err)
        res.status(500).json("INTERNAL ERROR")
    }
}

module.exports = {register,home}