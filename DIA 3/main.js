//YA NO USAR VAR, USAR LET.
/*function imprimeNombre(){
    console.log(nombre);
}*/

/*let imprimeNombre = (nombre,edad)=>`Mi nombre es ${nombre} y mi edad es ${edad}.`; //ARROW FUNCTION



let nombre = imprimeNombre("Simon",20);
console.log(nombre);

let operacion = (i)=> {
    for(let i=0;i<=100;i++){

        
        if(i%2==0){
            console.log("Fizz")
        }       
        else if(i%5==0){
            console.log("Buzz")
        }
        if(i%2==0 && i%5==0){
            console.log("FizzBuzz")
        }

        else{
            console.log(i);
        }


       

        
    }
}

operacion();

*/


/*let mayorDeEdad = edad => edad <18 ? "Es menor de edad" : "Es mayor de edad";

let resultado = mayorDeEdad(17);
console.log(resultado);*/


//CALLBACK
let operacion = (numero,operacion)=>operacion(numero);

let cuadrado = (x)=> x*x;
let doble = (x)=> x*2;
let triple = (x)=> x*3;

let resultado = operacion(5,cuadrado);
let resultado2 = operacion(5,doble);
let resultado3=operacion(5,triple);

console.log(resultado);
console.log(resultado2);
console.log(resultado3);


