const mongoose = require('mongoose')
let tipSchema = new mongoose.Schema({
    title: String,
    docType: String,
    level: Number,
    department: String,
    mediaSrc: String,
})

module.exports = mongoose.model("Tip", tipSchema)