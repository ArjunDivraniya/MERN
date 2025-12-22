const express =require('express');
const   jwt = require('jsonwebtoken');
const app =express();
app.use(express.json());

const SECRET_KEY = '1234567890abcdef';
function setUser ({email,role}){
const tocken = jwt.sign({
    email : email,
    role : role
},SECRET_KEY)
return tocken;
}

function getUser (token){
    try{
        const user =jwt.verify(token ,SECRET_KEY);
        return user;
    }
    catch (err){
        return null;
    }
}

app.post('/login',(req,res) =>{
    const {email,role,password} = req.body;
    const token = setUser({email,role});

   res.cookie('token',token);
    res.json({message : 'User logged in', token : token});


})

app.post('/signup',(req,res) => {
    const {email,role,password} =req.body;
    const token =setUser({email,role});
    res.cookie('token',token);
    res.json({message : 'User signed up', token : token});
})

app.listen(3000,() => {
    console.log("Server is running on port 3000");
})