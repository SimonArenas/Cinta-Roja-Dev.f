const express = require("express");
const bodyParser = require("body-parser"); //Esto interpreta el request y lo hará legible para Node.js y Express.

//Declaramos instancia
const app = express();


//BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



//Rutas
app.get("/", (req, res) => {
    res.status(200).send({
        'mensaje': 'hola mundo'
    });
});

app.get("/nombre", (req, res) => { //localhost:3200/simon
    res.status(200).send({
        nombre: "Simón",
        cinta: "Cinta Roja",
    });
})

app.get("/apellido", (req, res) => { //localhost:3200/arenas
    res.status(200).send({
        nombre: "Arenas",
        cinta: "Cinta Roja",
    });
})

//Params
app.get("/pokemon/:nombre/:apellido", (req, res) => { //localhost:3200/pokemon/simon/arenas
    const {
        nombre,
        apellido
    } = req.params;
    res.status(200).send(`El nombre es: ${nombre} ${apellido}`);
});

//Query Parameters
app.get("/suma", (req, res) => { //localhost:3200/suma?num1=5&num2=5
    const {num1, num2}= req.query;
    const resultado= (+num1)+ (+num2);
    res.status(200).send(({resultado}));

});

app.get("/multiplicacion/:num1/:num2", (req, res) => { //localhost:3200/multiplicacion/5/5
    const {
        num1,
        num2
    } = req.params;
    const resultado= (+num1)*(num2);
    res.status(200).send(`La multiplicacion es ${resultado}`);
});


//Query Parameters
app.get("/division", (req, res) => { //localhost:3200/division?num1=10&num2=5
    const {num1, num2}= req.query;
    const resultado= (+num1)/ (+num2);
    res.status(200).send(({resultado}));

});


//Esta linea va hasta el final
app.listen(3200, () => {
    console.log('Servidor corriento en puerto 3200');
});
