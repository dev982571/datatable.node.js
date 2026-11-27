const mongoose = require("mongoose");

const dbconnection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/datatable");

        console.log("mongodb connected successfully");
    } catch (error) {
        console.log("mongodb connection failed",error);
    }
};

module.exports = dbconnection;