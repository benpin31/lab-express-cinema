const express = require('express');
const router = express.Router();

const movieModel = require("./../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => {
    movieModel.find()
        .then(movies => {
            console.log(movies) ;
            res.render("movies", {movies})
        })
        .catch(error => console.log(error))
});

module.exports = router;
