const express = require('express');

const app = express();
const fs = require('fs');
app.use(express.json());

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Please provide username , email and password" });
    }

    const data = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
    const userExits = data.find((user) => user.email === email);
    if (userExits) {
        return res.status(409).json({ message: "User already exists with this email" });
    }

    data.push({ username, email, password });
    fs.writeFileSync('./db.json', JSON.stringify(data, null, 2));
    res.status(201).json({ message: "User registered successfully", data: { username, email, password } });
})


app.post('/signupotp', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Please provide username , email and password" });
    }

    const data = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
    const userExits = data.find((user) => user.email === email);
    if (userExits) {
        return res.status(409).json({ message: "User already exists with this email" });
    }
    

    data.push({ username, email, password });
    fs.writeFileSync('./db.json', JSON.stringify(data, null, 2));
    res.status(201).json({ message: "User registered successfully", data: { username, email, password } });
})



app.post('/login', (req, res) => {
    const { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).json({ message: "Please provide email and password" });
    }
    const user = auth(email, password);
   if(user){
    if(user.password === password){
        return res.status(200).json({message: "Login successful", data: user});
    }
    return res.status(401).json({message: "Invalid password"});
   }else{
    return res.status(401).json({message: "Invalid user"});
   }

})

function auth(email, password) {
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf8'));

    const user = data.find((user) => user.email === email);
    // if (!user) {
    //     return res.status(401).json({ message: "Invalid email" });
    // }
    // if (user.password !== password) {
    //     return res.status(401).json({ message: "Invalid password" });
    // }

    return user;

}

function generate() {
//   const lowercase = "abcdefghijklmnopqrstuvwxyz";
//     const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    // const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?";
    
    const subset = numbers;
    const length = 6;
    let id = "";
    for (let i = 0; i < length; i++) {
        id += subset[Math.floor(Math.random() * subset.length)];
    }
    return id;
}



app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});

