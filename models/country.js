const mongoose = require('mongoose')
const countrySchema = new mongoose.Schema({
    name: String,
    schools: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "School"
        }
    ]
})

module.exports = mongoose.model("Country", countrySchema)