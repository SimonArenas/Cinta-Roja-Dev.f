const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId; //Generar string aleatorio

const movieSchema = new Schema({
    movieId: ObjectId,
    title: String,
    year: Number,
    description: String,
    image: [String],
    theme:{
        type: String,
        enum:["comedia", "drama" , "terror" , "accion"]
    },
    director:{
        type: String,
        default:"Simón Arenas"
    }
});

const Movie=mongoose.model('Pelicula',movieSchema);//Variable que exporta
module.exports= { Movie }