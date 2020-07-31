const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//defining a user schema
var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required:"Full Name Cant be empty"
    },
    email: {
        type: String,
        required:"Email cant be empty",
        unique:true
    },
    phone:{
        type:Number,
        required:"cant be empty"
    },
    password: {
        type: String,
        required:"Cant be empty",
        minlength:[7,"Need a minimum of 7 characters"]
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
mongoose.model('User', userSchema);

