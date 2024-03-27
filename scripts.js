/* 1.- Crea una función que ordene de forma descendente un arreglo de números.
Entrada -> [9,3,1,6,5,88,-1,2,7]
Salida -> [88,9,7,6,5,3,1,-1] */
console.log("Ejercico 1");
let arreglo = [9, 3, 1, 6, 5, 88, -1, 2, 7];

function ordenar(arreglo) {
  return arreglo.sort((a, b) => b - a);
}

console.log(ordenar(arreglo));

console.log("Ejercicio 2");

/* 2.- Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/.
Entrada -> [‘b’,‘h’,‘w’,‘e’,‘a’]
Salida -> [‘a’,‘b’,‘e’,‘h’,‘w’] */

let entrada = ["b", "h", "w", "e", "a"];

function ordenamientoDecimal(entrada) {
  return entrada.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
}

console.log(ordenamientoDecimal(entrada));

console.log("Ejercicio 3");

/* 3.- Crear una clase Alumno con los siguientes datos:
Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio.
Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio. */
let promedios = [];
class Alumno {
  constructor(nombre, calificaciones) {
    this.nombre = nombre;
    this.calificaciones = calificaciones;
  }
  obtenerPromedio() {
    const suma = this.calificaciones.reduce(
      (total, actual) => total + actual,
      0
    );
    const promedio = suma / this.calificaciones.length;
    promedios.push({ [this.nombre]: Number(promedio.toFixed(2)) });
    return promedio;
  }
}

let alumno1 = new Alumno("ISSABELLA", [10, 9, 8, 8, 9]);
alumno1.obtenerPromedio();
let alumno2 = new Alumno("Hadassah", [10, 10, 9, 9, 8]);
alumno2.obtenerPromedio();
let alumno3 = new Alumno("Samanta", [1, 1, 3, 4, 5]);
alumno3.obtenerPromedio();
let alumno4 = new Alumno("Santi", [6, 7, 8, 9, 10]);
alumno4.obtenerPromedio();
let alumno5 = new Alumno("Jonathan", [10, 10, 10, 10, 10]);
alumno5.obtenerPromedio();
console.log(JSON.stringify(promedios) );

class Salon {
  constructor(grupo) {
    this.grupo = grupo;
  }
  ordenarAlumnos() {
    this.grupo.sort((a, b) => {
      const valorA = Object.values(a)[0];
      const valorB = Object.values(b)[0];
      return valorB - valorA;
    });
  }
}

let salon1 = new Salon(promedios);
salon1.ordenarAlumnos();
console.log(promedios);

console.log("Ejercicio 4");

/* 4.- Crear una funcion que ordene palabras de menor numero de letras a mayor.
Entrada -> [“adios”,“hola”,“maximo”,“uno”,“despedida”]
Salida -> [“uno”,“hola”,“adios”,“maximo”,“despedida”] */

let palabrasAordenar = ['adios','hola','maximo','uno','despedida'];

function ordenarPalabras(arreglo){
    return arreglo.sort((a,b) => a.length - b.length);
}

let orden = ordenarPalabras(palabrasAordenar);
console.log(orden);

/* 5.- Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.
Entrada -> [[7,3],[2,2],[1,0],[4,3]]
Salida -> [[1,0],[2,2],[4,3],[7,3]] */

console.log("Ejercicio 5");

function distanciaAlOrigen(coordenada) {
    const [x, y] = coordenada;
    return Math.sqrt(x ** 2 + y ** 2);
}

function ordenarPorDistanciaAlOrigen(coordenadas) {
    return coordenadas.sort((a, b) => distanciaAlOrigen(a) - distanciaAlOrigen(b));
}

const coordenadas = [[7,3],[2,2],[1,0],[4,3]];
const coordenadasOrdenadas = ordenarPorDistanciaAlOrigen(coordenadas);
console.log(coordenadasOrdenadas);

