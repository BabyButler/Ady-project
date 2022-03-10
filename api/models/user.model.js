const mongoose = require('mongoose'); 



const userSchema = new mongoose.Schema({
    username: {type:String, required:true},
    email: {type:String, required:true,unique:true},
    password: {type:String, required:true},
    role: {type:String, default:'user'},
    active: {type:Number, default:1},
    avatar: {type:String},
})
module.exports = mongoose.model('user',userSchema);