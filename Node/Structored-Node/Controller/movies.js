const fs = require('fs');

function addMovie(req, res) {
 try {
  const { title, year, rating } = req.body;

  if (!title || !year || !rating) {
    return res.status(400).send('Title, year, and rating are required.');
  }
  if(typeof title !== 'string') {
    return res.status(400).send('Title must be a string.');
  }
    if(typeof year !== 'number' || year < 1888 || year > new Date().getFullYear()) {    
    return res.status(400).send('Year must be a valid number.');    
    }
    if(typeof rating !== 'number' || rating < 0 || rating > 10) {    
    return res.status(400).send('Rating must be a number between 0 and 10.');    
    }

    const movies =JSON.parse(fs.readFileSync('./data.json','utf-8'));
    movies.push({ title, year, rating });
    fs.writeFileSync('./data.json', JSON.stringify(movies, null, 2));

    res.status(201).send('Movie added successfully.');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}


function getMovies(req, res) {
try {
  const movies = JSON.parse(fs.readFileSync('./data.json','utf-8'));    
    res.json(movies);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { addMovie, getMovies };
