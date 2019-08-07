const express = require("express");
const router = express.Router();
const {
    Movie
} = require("../models/movie");

//Rutas
router.get("/", (req, res) => {
    res.status(200).send({
        response: "Corriendo"
    });
});

router.post("/api/v1/pelicula", (req, res) => {
    const {
        title,
        year,
        description,
        image,
        theme,
        director
    } = req.body;


    const newMovie = Movie({
        title,
        year,
        description,
        image,
        theme,
        director
    });

    newMovie.save((err, pelicula) => {
        err ? res.status(409).send(err) : res.status(201).send(pelicula)
    });
    console.log(req.body);
});

router.get("/api/v1/pelicula", (req, res) => {

    Movie.find().exec().then(movies => res.status(200).send(movies))
        .catch(err => err => res.status(404).send(err));
});

router.get("/api/v1/busqueda/pelicula", (req, res) => {
    const {
        q
    } = req.query;
    Movie.find({
            title: q
        }).exec()
        .then(movie => {
            movie.length > 0 ?
                res.status(200).send(movie) :
                res.status(404).send("Not found")

        })
        .catch(err => res.status(404).send(err))

});

//Modificar todo el objeto o registro
router.put("/api/v1/peliculas/update", (req, res) => {
    const {id} = req.query;
    const body = req.body;

    Movie.findByIdAndUpdate(id, {
        $set: body}, {new: true})
        .then(newMovie =>{
            if(newMovie != null){
                res.status(200).send(newMovie)
            } else{
                res.status(404).send("Registro no encontrado")
            }
        })
        .catch(err => res.status(404).send(err))

});


//Delete
router.delete("/api/v1/peliculas/delete",(req,res)=>{

const {id}=req.query;

    Movie.findByIdAndRemove(id).exec()
    .then(pelicula=>{
        pelicula !== null
        ? res.status(200).send({mensaje:"Pelicula borrada exitosamente", body:pelicula})
        :res.status(304).send("Registro no eliminado")
    })
    .catch(err=>res.status(304).send("Registro no realizado"+err))

});


module.exports = router;