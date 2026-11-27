const User = require("../models/usermodel");

const updateuser = async (req,res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndUpdate (
            id,
            req.body,
            { new: true, runValidators: true}
        );

        if(!user) {
            return res.status(404).json({
                message: "user not found"
            });
        }

        res.status(200).json({
            message: "user update successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: "something went wrong",
            error: error.message
        });
    }
}

module.exports = updateuser;