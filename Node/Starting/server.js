// use express and create server

// crete post requert
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.post('/data', (req, res) => {
    res.send('POST request received');
});

app.get('/movies', (req, res) => {

    const movies = fs.readFileSync('./movies.json', 'utf8');
    res.header("Content-Type", 'application/json');
    res.send(movies);

});

app.post('/movies', (req, res) => {
    let movies = JSON.parse(fs.readFileSync('./movies.json', 'utf8'));
    const { title, director, year, genre } = req.body;

    if (!title || !director || !year || !genre) {
        return res.status(400).send("Please provide title, director, year and genre");
    }
    movies.push({ title, director, year, genre });
    fs.writeFileSync('./movies.json', JSON.stringify(movies, null, 2));
    res.send('Movie added successfully');

})

app.put('/movies/:title', (req, res) => {
    const { title } = req.params;
    let movies = JSON.parse(fs.readFileSync('./movies.json', 'utf8'));
    const movie = movies.find((m) => m.title.toLowerCase() === title.toLowerCase());
    if (!movie) {
        return res.status(404).send("Movie not found");
    }
    const { newtitle, director, year, genre } = req.body;
    if (newtitle) movie.title = newtitle;
    if (director) movie.director = director;
    if (year) movie.year = year;
    if (genre) movie.genre = genre;
    console.log(newtitle);

    fs.writeFileSync('./movies.json', JSON.stringify(movies, null, 2));
    res.status(200).json({ message: "Movie updated successfully", data: movie });




});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
