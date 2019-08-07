//PELICULAS

const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const mongoURI=require("./config/keys").mongoURI;
const PORT = 3000;
const router = require("./Routes/routes"); //llamando a las routes.js


const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/', router);

mongoose.connect(mongoURI,{useNewUrlParser:true}).then(()=> console.log("Conectado a MongoDB")).catch((err)=> console.log(err));


app.listen(PORT, () => {
    console.log(`Servidor corriento en puerto ${PORT}`);
});