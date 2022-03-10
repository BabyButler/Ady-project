

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema = require('../models/user.model')
const commentSchema = require('../models/comment.model')
const postSchema = require('../models/posts.model')
exports.authSignUp =  async (req, res) => {
    const {username,email,password} = req.body;
    try {
       const userExist = await userSchema.findOne({email:email})
       if(userExist){
           return res.status(400).send({message:'user already exist'})
       }
       const user = new userSchema(req.body)
       const salt = 10
       const passwordHashed = bcrypt.hashSync(password,salt)
       const userId = {id:user._id}
       const token = jwt.sign(userId,process.env.TOKEN_PASSWORD)
       user.password = passwordHashed; 
      
       await user.save()
       return res.status(200).send({message:'success',token})
    } catch (error) {
        return res.status(500).send({message:error}) 
    }
}

exports.authSignIn = async (req, res) => {
    const {email,password} = req.body
    
    try {
        const userExist = await userSchema.findOne({email: email})
        if(!userExist) {
            return res.status(400).send({message:'user doesn\'texist'})
        }
        if(!userExist.active){
            return res.status(400).send({message:'You are banned'})
        }
        const passwordHashed = bcrypt.compareSync(password,userExist.password)
        if(!passwordHashed){
            return res.status(400).send({message:'bad credentials'})
        }
        const userId = {id:userExist._id}
        const token = jwt.sign(userId,process.env.TOKEN_PASSWORD)
        return res.status(200).send({message:'login successfully..',token})
    } catch (error) {
        return res.status(500).send({message:error}) 
    }
}


exports.getOneUser = async (req, res) => {
    const {ID} = req.body
    try {
        const user = await userSchema.findById(ID)
        user.password = null
        return res.status(200).send({user})
    } catch (error) {
        return res.status(500).send({message:error}) 
    }
}

exports.deletedComment = async (req, res) => {
    const {id} = req.params
    try {
        const comment = await commentSchema.findByIdAndDelete(id)
        return res.status(200).send({comment})
    } catch (error) {
        return res.status(500).send({message:error}) 
    }
}


exports.deletedPost = async (req, res) => {
    const {id} = req.params
    try {
        const post = await postSchema.findByIdAndDelete(id)
        return res.status(200).send({post})
    } catch (error) {
        return res.status(500).send({message:error}) 
    }
}

exports.updateComment = async (req, res) => {
    const {id} = req.params
    console.log(id) 
    try {
        const comment = await commentSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        
        return res.status(200).send({comment})
    } catch (error) {
        return res.status(500).send({message:error}) 
    }
}

exports.getAllUsers = async (req, res) => {
    try { 
        const users = await userSchema.find().where({role:'user'})
        return res.status(200).send({users})
    } catch (error) {
        return res.status(500).send({message:error}) 
    }
} 

exports.deleteUser = async (req, res) => {
    const {id} = req.params
    try { 
        const users = await userSchema.findByIdAndUpdate(id,{$set:{active:0}})
        return res.status(200).send({users})
    } catch (error) {
        return res.status(500).send({message:error}) 
    }
}
exports.updateUser = async (req, res) => {
    const {id} = req.params
    try { 
        const users = await userSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        return res.status(200).send({users})
    } catch (error) {
        return res.status(500).send({message:error}) 
    }
}