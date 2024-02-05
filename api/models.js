const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PersonsSchema = new Schema({
    name: String,
    story: String,
    src: String,
    description: String,
    quote: String,
    author: String
})

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
const Persons = mongoose.model("persons", PersonsSchema);
module.exports = {
    UserNext,
    Persons
}