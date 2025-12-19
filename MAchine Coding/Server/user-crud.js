const express  = require('express');
const app = express();
app.use(express.json());
const fs = require('fs');

app.get('/users',(req,res) => {
    const users = JSON.parse(fs.readFileSync('./user-crud.json'));
    // console.log(typeof users)
    res.send(users);
})

app.post('/new-user',(req,res)=> {
    const {name , age, city} = req.body;
    const users = JSON.parse(fs.readFileSync('./user-crud.json'));
    users.push({id: users.length + 1, name, age, city});
    fs.writeFileSync('./user-crud.json' , JSON.stringify(users, null, 2));
    res.send({message : 'User added successfully'});
})

app.delete('/delete-user/:id',(req,res) => {
    const {id} = req.params;
    const users = JSON.parse(fs.readFileSync('./user-crud.json'));

    const updatedusers = users.filter((user) => user.id != id);
    fs.writeFileSync('./user-crud.json' , JSON.stringify(updatedusers ,null,2));
    res.send({message : 'User deleted successfully'});

    
})

app.put('/update/:id',(req,res) => {
    const {id} =req.params;
    const {name ,age ,city} =req.body;
    const users = JSON.parse(fs.readFileSync('./user-crud.json'));
    const userIndex = users.findIndex((user) => user.id == id);
    if(userIndex === -1){
        res.send({message: "User Not Found"})
        
    }
    users[userIndex] = {
        id: users[userIndex].id,
        name: name || users[userIndex].name,
        age: age || users[userIndex].age,
        city: city || users[userIndex].city
        
        };

fs.writeFileSync('./user-crud.json' , JSON.stringify(users , null ,2));
res.send({message : 'User updated successfully'});

 })






app.listen(5000, ()=> {
    console.log('Server is running on port 5000');
})