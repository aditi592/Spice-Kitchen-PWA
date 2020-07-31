const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.phone=req.body.phone;
    user.password = req.body.password;

    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else{
            if(err.code==11000)
            res.status(422).send(['Duplicate Email address Found.']);
            else
            return next(err);
        }
    });
}