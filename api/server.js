const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const connectDb = require('./config/connectDb')
const bcrypt = require('bcrypt');
const userRouter = require('./routes/user.route')
const userSchema = require('./models/user.model')
app.use(cors());
app.use(express.json());
app.use('/api',userRouter);

connectDb();
init()
async function init() {
    const isAdmin = await userSchema.findOne({role: 'admin'})
    if(!isAdmin){
        const admin = new userSchema({
            username: 'admin',
            email: 'admin@admin.com',
            password: bcrypt.hashSync('123456789',10),
            role: 'admin' 
        }) 
        await admin.save();
        console.log('admin added to database')
    }
}

port= 5000;

app.listen(port,()=>{
    console.log('listening on port '+port)
})