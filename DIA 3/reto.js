/*
1. Hacer superclase Maestro y subclases Maestro de Física y
  Maestro de Música y a cada uno asignarle su materia y
  calcular su promedio de grupo a partir de calificaciones
  (puedes usar arreglos). El maestro de física tiene un
  atributo “antiguedad” que guarda un valor numerico,
  mientras que el maestro de música tiene un atributo “edad”
  también guardando un valor numérico.
  */

//CALIFICACIONES
//VAR CALIFICACIONES = [10,9,8]

class Maestro{
    constructor(calificaciones){
        this.calificaciones=calificaciones;
    }

    //metodo
    calcularPromedio(){
        var noCalificaciones = this.calificaciones.length;
        var sumatoriaCalificaciones = 0;
        this.calificaciones.forEach(function(cal) {
            sumatoriaCalificaciones/noCalificaciones;
        });
    }
}

class MaestrodeFisica extends Maestro{
    constructor(calificaciones,antiguedad){
        super(calificaciones);
        this.antiguedad=antiguedad,
        this.materia="Física";
    }
}

class MaestroDeMusica extends Maestro{
    constructor(calificaciones, edad){
        super(calificaciones);
        this.edad=edad;
        this.materia="Musica";
    }
}

var maestro = new Maestro ([8,9,10]);
var musica = new MaestroDeMusica([8,9,19],28);
var fisica = new MaestrodeFisica([8,9,10],4);

console.log(maestro);
console.log(musica);
console.log(fisica);