const express = require('express')
const router = express.Router()
const User = require('../models/User')


router.post("/createuser", async (req,res) => {
    try{
        // await User.create({
        //     name:"Anupam", // req.body.name -> use it for getting data from user  
        //     password:"123",
        //     email:"abc12@gmail.com",
        //     location:"sada"
        // })

        await User.create({
            name:req.body.name,  
            password:req.body.password,
            email:req.body.email,
            location:req.body.location
        })
    res.json({success:true})
    } catch(error){
        console.log(error)
        res.json({success:false})
    }
})

module.exports = router