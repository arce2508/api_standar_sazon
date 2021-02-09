
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
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
        //enum: validRoles
    }
})

const model = mongoose.model('users', userSchema)

module.exports = model