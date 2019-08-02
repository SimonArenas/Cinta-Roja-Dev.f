/*class planeta{
    constructor (nombre, masa, epoca, minima, media, maxima){
        this.nombre=nombre,
        this.masa=masa,
        this.epoca=epoca
        this.temperatura={
            minima:minima,
            media:media,
            maxima:maxima
        }
    }

    //Método
    rotar (){
        console.log("Estoy rotando")
    }
}
    var jupiter = new planeta ("Jupiter","1,899x10","J200", "63.15", "11.15", "71.15");
    var pluton = new planeta ("Pluton","1,899x10","J100", "63.15", "11.15", "71.15");
    var mercurio = new planeta ("Mercurio","1,899x10","J000", "63.15", "11.15", "71.15");

console.log(jupiter);
console.log(pluton);
console.log(mercurio);
jupiter.rotar();
*/


/*
class perro {
    constructor(nombre, raza, edad, continente1,continente2 ,continente3 ) {
        this.nombre = nombre,
            this.raza = raza,
            this.edad = edad,
            this.continente = [continente1, continente2, continente3]
    }
    //metodo
    ladrar() {
        console.log("Este perro esta ladrando")
    }

    continentesExistentes(){
        console.log("A " +this.nombre+ " lo puedes encontrar en "+this.continente[0]+ this.continente[1]+ this.continente[2]);
        //STRING INTERPOLATION
        console.log(`A ${bulldog.nombre} lo puedes encontrar en ${this.continente}`)
    }
}

//instancia
var bulldog = new perro("Bully", "Bulldog", 15, " america"," europa", " asia");

console.log(bulldog);

bulldog.ladrar();

bulldog.continentesExistentes();*/



class Bebida{
    constructor(nombre,ml, imagen){
        this.nombre=nombre,
        this.ml=`${ml} ml`,
        this.imagen=imagen
    }
}

class BebidaAlcholida extends Bebida{
    
    constructor(nombre, ml, gradosAlcohol){
        //´para hederar se usar SUPER
    super(nombre,ml);
    this.gradosAlcohol= `${gradosAlcohol} % de alcohol`
    }
}

class Refresco extends Bebida{
    constructor(nombre, ml, sabor, gramosazucar){
        super(nombre,ml);
        this.sabor=`El sabor de ${nombre} es de sabor ${sabor}`,
        this.gramosazucar= gramosazucar
    }
}

var Agua = new Bebida("Agua natural", 600, "https://jumbocolombiafood.vteximg.com.br/arquivos/ids/200117-750-750/7702535013830.jpg?v=636262153181500000");
var cerveza = new BebidaAlcholida("cerveza",600,15,"https://jumbocolombiafood.vteximg.com.br/arquivos/ids/200117-750-750/7702535013830.jpg?v=636262153181500000");
var CocaCola= new Refresco ("coca cola",600,"cola",30,"https://jumbocolombiafood.vteximg.com.br/arquivos/ids/200117-750-750/7702535013830.jpg?v=636262153181500000");


console.log(Agua);
console.log(cerveza);
console.log(CocaCola);

document.getElementById("Agua").src=Agua.imagen;
document.getElementById("nombreAgua").innerHTML=Agua.nombre;
document.getElementById("aguaDescripcion").innerHTML= `Contenido de bebida ${Agua.ml}`;





class planeta{
    constructor (nombre, masa, epoca, minima, media, maxima, imagen){
        this.nombre=nombre;
        this.masa=masa;
        this.epoca=epoca;
        this.temperatura={
            minima:minima,
            media:media,
            maxima:maxima
        }
        this.imagen=imagen;
    }
}

    var jupiter = new planeta ("Jupiter","1,899x10","J200", "63.15", "11.15", "71.15", "https://i1.wp.com/www.sopitas.com/wp-content/uploads/2019/03/Planeta-J%C3%BApiter-1120x581.png");

    console.log(jupiter);

    document.getElementById("nombrePlaneta").innerHTML=jupiter.nombre;
    document.getElementById("descripcionPlaneta").innerHTML=`La masa es de: ${jupiter.masa}. La época es ${jupiter.epoca}. La
    temperatura mínima es: ${jupiter.temperatura.minima}`;
    document.getElementById("Jupiter").src=jupiter.imagen;

