const mongoose= require('mongoose');

//schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Password is required'],
    },
    
},{timestamps:true});

const usersModel = mongoose.model('users', userSchema)
module.exports = usersModel