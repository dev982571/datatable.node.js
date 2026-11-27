const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    email: {
    type: String,
    required: true,
    unique: true
    }
});

const user = mongoose.model("user",userschema);

module.exports = user;