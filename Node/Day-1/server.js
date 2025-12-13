const e = require('express');
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.get('/' ,(req,res) => {
    res.send("Now You On Root directory")
})

app.get('/about',(req ,res)=> {
    res.send("This is About Page")
})

// app.post('/data' ,(req ,res)=> {
//     const {name ,roll ,city} =req.body;
//     console.log(req.body)
//     fs.appendFileSync('./data.json',JSON.stringify({name, roll, city}) + "\n");
//     res.send("Data Received Successfully")

// })

app.post('/data',(req ,res) => {
    const {name ,roll ,city} =req.body;
    // const data = [];
    
        if(!name || !roll || !city) {
            return res.status(400).send("Please provide name , roll and city");
        }

        const fileData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    
        fileData.push({name, roll, city});
        fs.writeFileSync('./data.json', JSON.stringify(fileData, null, 2));
       
        res.status(201).json({message: "Data added successfully", data: {name, roll, city}});
  
})

app.get('/users',(req ,res) => {
    const users =fs.readFileSync('./data.json', 'utf8');
    res.header("Content-Type",'application/json');
    res.send(users);
})
const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server starting.......")
   
});

