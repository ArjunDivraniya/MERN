const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

const app= express();
app.use(express.json());
app.use(cookieParser());
const SECRET_KEY = '1234567890abcdef';

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required :true
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type :String,
        enum : ['admin' , 'user'],
        default : 'user'
    }
})

const User = mongoose.model('User' , userSchema);

mongoose.connect('mongodb+srv://arjundivraniyacg_db_user:auth-jwt@cluster0.vqktaeo.mongodb.net/rbac_DB')
.then(() => {
    console.log("Connected to MongoDB for RBAC");
})
.catch((err) => {
    console.error("Error connecting to MongoDB", err);
})

app.post('/register' ,async (req,res) => {
    const user = await User.create(req.body);
    res.json(user);

})

app.post('/login' , async (req,res) => {
const {email ,password} = req.body;
const user = await User.findOne({email : email});
if(!user){
    return res.json({message : "Invalid User"})
};
const token = jwt.sign({
    email : user.email,
    role : user.role
} , SECRET_KEY);
res.cookie('token' , token);
res.json({ token : token})
})

const jwtauth = (req ,res , next) => {
    const tokenFromCookie = req.cookies && req.cookies.token;
    const authHeader = req.headers.authorization;
    const tokenFromHeader = authHeader && authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    const token = tokenFromCookie || tokenFromHeader;
    if(!token){
        return res.status(401).json({message : "Auth Failed, Token missing"});
    }
    try{
        const user  = jwt.verify(token , SECRET_KEY);
        req.user = user;
        return next();
    }catch(err){
        return res.status(401).json({message : "Auth Failed, Invalid Token"});
    }
}

const rolecheck = (...roles) => {
 return (req ,res ,next) => {
     const user  = req.user;
    if(!user){
        return res.status(401).json({message : "Auth Failed"});
    }
    if(!roles.includes(user.role)){
        return res.status(403).json({message  : "Access Denied, insufficient permissions"});
    }
    next();

 }
}



 app.get('/' , (req,res) => {
    res.status(200).json({message : "Welcome to All"} )
 });
 app.get('/admin' ,jwtauth ,rolecheck('admin')  , (req,res) => {
    res.status(200).json({message : "On Admin Access Route"} )
 })

 app.get('/users' ,jwtauth ,rolecheck('user') , (req ,res) => {
    res.status(200).json({message : "On User Access Route"} )
 })
 
app.listen(3000 , () => {
    console.log("Role based auth server is running on port 3000");
})