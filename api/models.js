const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserNextSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    }
})

const UserNext = mongoose.model("userNext", UserNextSchema)
module.exports = UserNext