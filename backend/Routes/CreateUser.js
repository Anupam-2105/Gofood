const express = require('express')
const router = express.Router()
const User = require('../models/User')

const { body, validationResult } = require('express-validator')
const { toHaveErrorMessage } = require('@testing-library/jest-dom/matchers')



const bcrypt = require("bcryptjs")





router.post("/createuser",
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({ min: 5 }),
    async (req, res) => {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }



        const salt = await bcrypt.genSalt(10)
        let secPassword = await bcrypt.hash(req.body.password, salt)




        try {
            // await User.create({
            //     name:"Anupam", // req.body.name -> use it for getting data from user  
            //     password:"123",
            //     email:"abc12@gmail.com",
            //     location:"sada"
            // })

            // await User.create({
            //     name: req.body.name,
            //     password: secPassword,
            //     email: req.body.email,
            //     location: req.body.location
            // })
            const { name, password, email, location } = req.body;
            await User.create({ name, password:secPassword, email, location }); // just writing secPassword is wrong
            res.json({ success: true })
        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })


router.post("/loginuser",

    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 }),
    async (req, res) => {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }


        let email = req.body.email
        try {
            let userData = await User.findOne({email})
            if (!userData) {
                return res.status(400).json({ errors: "Try login with correct credentials" })
            }

            if (req.body.password !== userData.password) {
                return res.status(400).json({ errors: "Try login with correct credentials" })
            }
            return res.json({ success: true })
        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })



module.exports = router