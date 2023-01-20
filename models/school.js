const mongoose = require('mongoose')
let schoolSchema = new mongoose.Schema({
    name: String,
    country: String,
    location: String,
    head: String,
    type: String,
    faculties: Array,
})

module.exports = mongoose.model("School", schoolSchema)