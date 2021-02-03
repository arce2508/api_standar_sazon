
const mongoose = require('mongoose')

let validRoles = {
    values: ['ADMIN', 'STUDENT'],
    message: 'Estas logeado como: {VALUE}'
}

const userSchema = new mongoose.Schema({
    _id: {
        type: IDBDatabase,
        required: true
    },
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
        enum: validRoles
    }
})

let validCategories = {
    values: ['ENTRADA', 'PLATO FUERTE', 'CREMA', 'SOPA', 'ENSALADA', 'SALSA', 'ENTREMES', 'GUARNICION', 'CARNE', 'POSTRE'],
    message: 'Tu platillo es: {VALUE}'
}

const subRecipeSchema = new mongoose.Schema ({
    subRecipeName: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    mainRecipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipes'
    },
    ingredients: [{
        productName: {
            type: String,
            minlength: 5,
            maxlength: 50,
            required: true
        },
        grossWeight: {
            type: Number,
            min: 1,
            max: 1000,
            required: true
        },
        netWeight: {
            type: Number,
            min: 1,
            max: 1000,
            required: true
        },
        cost: {
            type: Number,
            min: 1,
            max: 10000,
            required: true
        },
        measurement: {
            type: String,
            minlength: 2,
            maxlength: 25,
            required: true,
            enum: 'Medidas'
        },
        portion: {
            type: String,
            minlength: 2,
            maxlength: 50,
            required: true,
            enum: 'Porciones'
        },
        unitCost: {
            type: Number,
            min: 1,
            max: 10000,
            required: true
        }
    }]
})

const recipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: validCategories,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    ingredients: [{
        productName: {
            type: String,
            minlength: 5,
            maxlength: 50,
            required: true
        },
        grossWeight: {
            type: Number,
            min: 1,
            max: 1000,
            required: true
        },
        netWeight: {
            type: Number,
            min: 1,
            max: 1000,
            required: true
        },
        cost: {
            type: Number,
            min: 1,
            max: 10000,
            required: true
        },
        measurement: {
            type: String,
            minlength: 2,
            maxlength: 25,
            required: true,
            enum: 'Medidas'
        },
        portion: {
            type: String,
            minlength: 2,
            maxlength: 50,
            required: true,
            enum: 'Porciones'
        },
        unitCost: {
            type: Number,
            min: 1,
            max: 10000,
            required: true
        }
    }],
    subRecipes: [{}]
})

const ingredientSchema = new mongoose.Schema({

})
module.exports = mongoose.model('users', userSchema)
 