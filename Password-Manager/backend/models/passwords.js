const mongoose = require('mongoose')

const passwordSchema = new mongoose.Schema({
    url:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const passwordModel = mongoose.model("passwordCollection", passwordSchema)

module.exports = passwordModel