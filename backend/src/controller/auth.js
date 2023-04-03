const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

exports.signup = (req, res) => {
    User.findOne({
        email: req.body.email
    }).exec((error, user) => {
        if (user) return res.status(400).json({ message: 'User already registered' });
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        const _user = new User({ firstName, lastName, email, password, username: Math.random().toString() });

        _user.save((error, data) => {
            if (error) {
                return res.status(400).json({ message: 'something went wrong' });
            }
            if (data) {
                return res.status(201).json({
                    // user: data
                    message: 'user created successfully'
                })
            }
        });
    });
}

exports.signin = (req,res) =>{
    User.findOne({
        email : req.body.email
    }).exec((error,user) =>{
        if(error){
            return res.status(400).json({ message : "something went wrong"});
        }
        if(user){
            if(user.authenticate(req.body.password)){
                const token = jwt.sign({_id: user._id},process.env.JWT_KEY,{expiresIn:'1h'});
                const {_id,firstName,lastName,email,role,fullName} = user;
                res.status(200).json({
                    token,
                    user:{
                        _id,firstName,lastName,email,role,fullName
                    }
                });
            }
            else{
                return res.status(400).json({
                    message : "wrong password"
                });
            }
        }
    });
}

exports.requireSignIn = (req,res,next) =>{
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token,process.env.JWT_KEY);
    req.user = user;
    next();
}