const express = require('express');

const { addMovie, getMovies } = require('../Controller/movies');

const router = express.Router();
router.post('/add-movies', addMovie);

router.get('/movies', getMovies);

module.exports = router;