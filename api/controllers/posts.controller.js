
const postSchema = require('../models/posts.model')
const commentSchema = require('../models/comment.model')

exports.addPost = async (req,res) => {
    const {description,media} = req.body;
    try {
        const post = new postSchema(req.body)
        await post.save()
       return  res.status(200).send({msg:'post added successfully'})
    } catch (error) {
        return  res.status(500).send({msg:error})
    }
}
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await postSchema.find(); 
       return  res.status(200).send({posts})
    } catch (error) {
        return  res.status(500).send({msg:error})
    }
}

exports.addComment = async (req, res) => {
    try{
        const comment = new commentSchema(req.body)
        await comment.save();
       return  res.status(200).send({msg:'comment added successfully'})
    }catch(error){
        return  res.status(500).send({msg:error})
    }
}

exports.getAllComments = async (req, res) => {
    try{
        const comments = await commentSchema.find()
       return  res.status(200).send({msg:'comment getted successfully',comments})
    }catch(error){
        return  res.status(500).send({msg:error})
    }
}
