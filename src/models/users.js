const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 50,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    membership: {
        type: String,
        default: 'STUDENT',
        required: true,
    }
})

const model = mongoose.model('Users', userSchema)

module.exports = model