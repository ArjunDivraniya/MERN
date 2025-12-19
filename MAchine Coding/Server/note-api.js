const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.post('/note',(req,res)=> {
    const {title,content} = req.body;
    if(!title || !content){
        return res.status(400).send("Title and Content are required");
    }
    const notes = JSON.parse(fs.readFileSync('./note-api.json'));
    const newNote = {id:notes.length + 1, title, content};
    notes.push(newNote);
    fs.writeFileSync("./note-api.json", JSON.stringify(notes , null ,2));
    res.status(201).send(newNote);
})

app.get('/notes', (req ,res) => {
    const notes  =JSON.parse(fs.readFileSync('./note-api.json'));
    res.send(notes);
})

app.delete('/note/:id', (req, res) => {
    const {id} = req.params;
    let notes = JSON.parse(fs.readFileSync('./note-api.json'));
    let newNotes = notes.filter((note) => note.id != id);
    fs.writeFileSync('./note-api.json', JSON.stringify(newNotes, null, 2));
    res.send({message: `Note with id ${id} deleted successfully`});
});

app.listen(4000, () => {
    console.log("Note API server is running on port 4000");
});