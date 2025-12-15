const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
app.use(express.json());
// const { addMovie, getMovies } = require('./Controller/movies');
const movieRoutes = require('./Routes/movies');


app.use('/api', movieRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});