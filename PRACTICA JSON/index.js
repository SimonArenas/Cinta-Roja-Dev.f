const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

const PORT = 3000;



const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



app.listen(PORT, () => {
    console.log(`Servidor corriento en puerto ${PORT}`);
});


//Método ReadFileSync
// let rawdata = fs.readFileSync('data.json');
// let ponente = JSON.parse(rawdata);
// console.log(ponente);


//Método sin JSON aparte
// let ponente2 = { 
//     nombre: 'Gerardo',
//     edad: 23
// };
 
// let data = JSON.stringify(ponente2);
// fs.writeFileSync('ponente-2.json', data);
// console.log(ponente2);