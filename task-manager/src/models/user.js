const mongoose = require('mongoose')
const validator = require('validator').default
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    
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
        unique:true,
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
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

// Create a relationship between two entities
userSchema.virtual('tasks',{
    ref: 'task',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString()}, 'thisismynewcourse')

    user.tokens = user.tokens.concat({ token})
    await user.save()

    return token

}

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    
    delete userObject.password
    delete userObject.tokens
    
    return userObject
}


userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email: email })
    
    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password,user.password)
    
    if (!isMatch) {
        throw new Error('Unable to login')
    }
    return user
}
// Password hashing before saving
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password,8)
    }
    
    next()

})
const User = mongoose.model('user', userSchema)

module.exports = User