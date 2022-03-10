const mongoose = require('mongoose');



const commentSchema = new mongoose.Schema({
    comment: {type:String, required:true},
    post_id: {type:String, required:true},
    username: {type:String},
    avatar: {type:String},
    createdAt: {type:Date,default:new Date()}
})
module.exports = mongoose.model('Comment',commentSchema);