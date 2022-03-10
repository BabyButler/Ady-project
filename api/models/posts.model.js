const mongoose = require('mongoose');



const postSchema = new mongoose.Schema({
    description: {type:String, required:true},
    media: {type:String, required:true},
    username: {type:String},
    userAvatar: {type:String},
    createdAt: {type:Date,default:new Date()}
})
module.exports = mongoose.model('Post',postSchema);