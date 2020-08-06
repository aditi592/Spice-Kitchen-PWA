const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//defining a user schema
var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: "Full Name Cant be empty"
    },
    email: {
        type: String,
        required: "Email cant be empty",
        unique: true
    },
    phone: {
        type: Number,
        required: "cant be empty"
    },
    password: {
        type: String,
        required: "Cant be empty",
        minlength: [7, "Need a minimum of 7 characters"]
    },
    saltSecret: String
});

//Generate a salt secret
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

//Methods 
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    //passing payload 7 secret code for encryption
    return jwt.sign({ _id: this._id },
        process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXP
    });
} 

mongoose.model('User', userSchema);

