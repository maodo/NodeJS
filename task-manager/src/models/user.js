const mongoose = require('mongoose')
const validator = require('validator').default

const User = mongoose.model('user', {
    password:{
        type: String,
        required:true,
        trim:true,
        minlength:7,
        validate(value) {
            if (value.toLowerCase().includes('password')){
                throw new Error('Password must not contain password word')
            }
        }
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }
    ,
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

module.exports = User