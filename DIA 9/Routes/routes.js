const express = require("express");
const router = express.Router();
const { Movie } = require("../models/movie");

//Rutas
router.get("/", (req, res) => {
    res.status(3000).send({
        'mensaje': 'Corriendo'});
});

router.post("/api/v1/pelicula", (req, res) => {
    const {title,year, description, image, theme, director}=req.body;


    const newMovie = Movie({
        title,
        year,
        description,
        image,
        theme,
        director
    });

    newMovie.save((err,pelicula)=>{
        err ? res.status(409).send(err) : res.status(201).send(pelicula)});
    console.log(req.body);
});

module.exports = router;