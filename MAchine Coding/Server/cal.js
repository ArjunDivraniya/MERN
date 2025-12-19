

const express = require('express');
const app =express();

app.get('/add',(req,res) => {
    let a =parseInt(req.query.a);
    let b =parseInt(req.query.b);
    let sum =a+b;
    res.send("The sum is " + sum);
})

app.get('/sub',(req,res) => {
    let a =parseInt(req.query.a);
    let b =parseInt(req.query.b);
    let sub =a-b;
    res.send("The subtraction is " + sub);
})

app.get('/mul',(req,res) => {
    let a =parseInt(req.query.a);
    let b =parseInt(req.query.b);
    let mul =a*b;
    res.send("The multiplication is " + mul);
})      
app.get('/div',(req,res) => {
    let a =parseInt(req.query.a);
    let b =parseInt(req.query.b);
    let div =a/b;
    res.send("The division is " + div);
})

app.listen(5000,()=> {
    console.log("server is running on port 5000");
})


