var mongoose = require('mongoose')
var passportLocalMongoose = require("passport-local-mongoose")

var userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: {
        type: String,
        required: [true, "A user must have an email"]
    },
    gender: String,
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School'
    },
    faculty: String,
    department: String,
    degree: String,
    level: String,
    photo: String,
    password: {
        type: String,
        required: [true, "A user must have a security password"]
    },
    isAdmin: Boolean,
    socketId: String,
    chatrooms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chatroom'
        }
    ],
})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", userSchema)