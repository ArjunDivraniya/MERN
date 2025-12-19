const express = require('express');
const fs = require('fs');
const axios = require('axios');
const app = express();
const PORT =5000;
app.use(express.json());


axios.get('https://jsonplaceholder.typicode.com/todos')
.then(response => {
    const data =response.data;
    fs.writeFileSync('./api-data.json',JSON.stringify(data,null,2));
  
})
.catch(error => {
    console.error('Error fetching data:', error);
})

app.get('/api/todos',(req,res) => {
    const todos  = JSON.parse(fs.readFileSync('./api-data.json','utf-8'));
    
    res.json(todos);
})



app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`);
})

