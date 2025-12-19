// crud of todo list

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

app.post('/add-todo',(req ,res) => {
    const {title,descrtiption ,state} = req.body;
    if(!title || !descrtiption || !state){
        return res.status(400).send({message : 'All fields are required'});
    }

    const data = JSON.parse(fs.readFileSync('./Data.json'));

    data.push({id: data.length + 1 , title, descrtiption, state});
    
    fs.writeFileSync('./Data.json',JSON.stringify(data, null, 2));
    res.status(201).send({message : 'Todo added successfully'});
})

app.get('/get-todos',(req ,res)=> {
    const data = JSON.parse(fs.readFileSync('./Data.json'));
    res.status(200).send(data);

})

app.patch('/update-todo/:id',(req,res) => {
    const {id} = req.params;
    const {title,descrtiption ,state} = req.body;
    const data = JSON.parse(fs.readFileSync('./Data.json'));
    const todoIndex = data.findIndex((todo) => todo.id == id);  
    if(todoIndex === -1){
        return res.status(404).send({message : 'Todo not found'});
    }
    if(title) data[todoIndex].title = title;
    if(descrtiption) data[todoIndex].descrtiption = descrtiption;
    if(state) data[todoIndex].state = state;
    fs.writeFileSync('./Data.json',JSON.stringify(data));
    res.status(200).send({message : 'Todo updated successfully'});
})

app.delete('/delete-todo/:id',(req,res) => {
    const {id} = req.params;
    const data = JSON.parse(fs.readFileSync('./Data.json'));
    const newData = data.filter((todo) => todo.id != id);
    fs.writeFileSync('./Data.json',JSON.stringify(newData));
    res.status(200).send({message : 'Todo deleted successfully'});

 })

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});