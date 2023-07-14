const express = require('express')
const router = express.Router()
const User = require('../models/User')

const {body,validationResult} = require('express-validator')
const { toHaveErrorMessage } = require('@testing-library/jest-dom/matchers')

router.post("/createuser", 
body('email').isEmail(),
body('name').isLength({min:5}),
body('password','Incorrect Password').isLength({min:5}),
async (req, res) => {
    
    const errors = validationResult(res)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    
    try {
        // await User.create({
        //     name:"Anupam", // req.body.name -> use it for getting data from user  
        //     password:"123",
        //     email:"abc12@gmail.com",
        //     location:"sada"
        // })

        // await User.create({
        //     name: req.body.name,
        //     password: req.body.password,
        //     email: req.body.email,
        //     location: req.body.location
        // })
        const { name, password, email, location } = req.body;
        await User.create({ name, password, email, location });
        res.json({ success: true })
    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router