const User = require("../models/usermodel");

const createuser = async(req,res) => {
    try {
        const {name,age,email,city} = req.body;

        const existinguser = await User.findOne({email});

        if(existinguser) {
            return res.status(400).json({
            message: "user already exist"
            });
        }

        const user = await User.create({
            name,
            age,
            city,
            email
        });

        res.status(201).json({
            message: "user created successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            message: "something went wrong",
            error: error.message
        });
    }
}

module.exports = {createuser}