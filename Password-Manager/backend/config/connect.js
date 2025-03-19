const mongoose = require('mongoose')

async function connectDB(url){
    return mongoose.connect(url + "/password-manager")
}

module.exports = { connectDB }