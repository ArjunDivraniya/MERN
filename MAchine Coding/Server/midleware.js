const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) =>{
console.log(req.method , req.url ,new Date())
next();
})
app.get('/',(req,res , next) => {
    res.json({message: "Welcome to Middleware Server"})
    next();
})

app.listen(3000, () => {
    console.log("Middleware server is running on port 3000");
});
