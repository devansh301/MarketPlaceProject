const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// user database
const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : true,
        trim : true,
        min : 3,
        max : 20
    },
    lastName:{
        type : String,
        required : true,
        trim : true,
        min : 3,
        max : 20
    },
    username:{
        type: String,
        required: true,
        trim: true,
        unique:true,
        index: true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password:{
        type: String,
        required: true
    },
    role:{
        type:String,
        enum: ['user','admin'],
        default : 'user'
    },
    contactNumber:{
        type: String
    },
    profilePicture:{
        type: String
    }
    
},{timestamps:true});


// to hash the plain password and name it as password
userSchema.virtual('password').set(function(password){
    this.hash_password = bcrypt.hashSync(password,10); 
});

// make full-name from first and last name
userSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`;
});

// to check the password
// returns true of false
userSchema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password,this.hash_password);
    }
};


module.exports = mongoose.model('User',userSchema);
