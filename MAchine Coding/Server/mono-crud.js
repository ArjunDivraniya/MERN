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
const User = mongoose.model('User' ,userSchema);


mongoose.connect('mongodb+srv://arjundivraniyacg_db_user:auth-jwt@cluster0.vqktaeo.mongodb.net/')
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB", err);
});

app.listen(3000 , () => {
    console.log("sserver With mongo Starting on port 3000");
})