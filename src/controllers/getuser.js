const User = require("../models/usermodel");

const getuser = async(req,res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            message: "users fetched successfully",
            users
        });
    } catch (error) {
        res.status(200).json({
            message: "something went wrong",
            error : error.message
        });
    }
};

module.exports = getuser;