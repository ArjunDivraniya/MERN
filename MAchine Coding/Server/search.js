const express = require('express')
const mongoose = require('mongoose')
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://arjundivraniyacg_db_user:auth-jwt@cluster0.vqktaeo.mongodb.net/Search')
.then(() => {
    console.log("Connected to MongoDB for Search");
})
.catch((err) => {
    console.error("Error connecting to MongoDB", err);
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String
})

const users = mongoose.model('users' , userSchema);

app.get('/search' , async (req,res) => {
    const { query } = req.query;
    if(!query || query.trim() === ''){
        return res.status(400).json({ message: 'Query parameter required' });
    }
    try{
        const data = await users.find({
            $or : [
               { name : { $regex : query , $options : 'i' }},
               { email : { $regex : query , $options : 'i' }},
               { role : { $regex : query , $options : 'i' }}
            ]
        }).lean();
        res.json({ results : data });
    }catch(err){
        console.error('Search error:', err);
        res.status(500).json({ message : 'Error performing search' });
    }

 })

app.listen(3000 , () => {
    console.log("Search server Started on port 3000");
})