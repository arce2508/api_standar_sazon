
const mongoose = require('mongoose')

const url = 'mongodb+srv://eric:eric123@decima-test.nnrg3.mongodb.net/standar+sazon'

const conect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = {
    connect
}