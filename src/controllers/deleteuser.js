const User = require("../models/usermodel");

const deleteuser = async (req,res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id);

        if(!User) {
            res.status(404).json({
                message: "user not found"
            });
        }
        res.status(200).json({
            message: "user delete successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: "something went wrong"
        });
    };
}

module.exports = deleteuser;