const express =require('express');
const mongoose = require('mongoose')
const app = express();
app.use(express.json());
app.use((req,res ,next) => {
    console.log(`Method : ${req.method} , URL : ${req.url} , Time : ${new Date()}`);
    next();
})

const userSchema =new mongoose.Schema({
    name: {
        type: String,
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    passwors : {
        type : String,
        required : true,
    }
})
const User = mongoose.model('user' ,userSchema);


mongoose.connect('mongodb+srv://arjundivraniyacg_db_user:auth-jwt@cluster0.vqktaeo.mongodb.net/UserDB')
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB", err);
});

app.get('/users' , async (req,res) => {
    try{
        const users =await User.find();
        res.json(users);
    }
    catch(err){
        res.status(500).json({message : "Error fetching users"});
    }
})

app.post('post/users' , async (req,res) => {
    try{
        const {name ,email ,password} = req.body;
       const newuser = User.create({
        name : name,
        email : email,
        password : password
       })
        
        res.status(201).json(newuser);
    }catch(err){
        res.status(201).json(newuser);
    }
})

app.listen(3000 , () => {
    console.log("sserver With mongo Starting on port 3000");
})