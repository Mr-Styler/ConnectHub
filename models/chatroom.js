const mongoose = require('mongoose')
const roomSchema = new mongoose.Schema({
    name: String,
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    image: { type: String, default: "../../images/jeager.jpg"},
    reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    isGroup: {type: Boolean, default: false},
    department: String,
    School: String,
    messages: [{
        text: {
            type: String,
            trim: true
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        time: Date,
    }]
})

module.exports = mongoose.model("Room", roomSchema)