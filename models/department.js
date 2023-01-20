const mongoose = require('mongoose')
let departmentSchema = new mongoose.Schema({
    name: String,
    head: String,
    levels: [ {
        level: Number,
        NumOfStudents: {
            type: Number,
            default: 0
        }
    } ],
    NumOfStudents: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Department", departmentSchema)