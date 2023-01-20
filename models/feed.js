const mongoose = require('mongoose')
let updateSchema = new mongoose.Schema({
    title: String,
    body: String,
    level: Number,
    department: String,
    mediaSrc: String,
    comments: [{
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        text: {
            type: String,
            trim: true,
        },
        likes: {
            type: Number,
            default: 0,
        },
        time: Date,
        replies: [{
            replier: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            text: {
                type: String,
                trim: true,
            },
            likes: {
                type: Number,
                default: 0,
            },
            time: Date
        }]
    }]
})

module.exports = mongoose.model("Update", updateSchema)