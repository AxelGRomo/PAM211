// Inciso A

/* 
var nombre = "Armando";
var edad = 25;
nombre = "Ana Maria";
var saludo = "Hola, " + nombre + ". Tienes " + edad + " años.";
*/


// Cambiado var por let y const
let nombre = "Armando";
let edad = 25;
nombre = "Ana Maria";
const saludo = "Hola, " + nombre + ". Tienes " + edad + " años.";

// Muestra en consola el contenido de saludo
console.log(saludo);
document.write("<h2>" + "Inciso A" + "</h2>");
document.write("<h3>Mi nombre es: " + nombre + " y tengo " + edad + " años.</h3>");

// Inciso B

// Función Tradicional
/* 
function cuadrado(numero){
    return numero * numero;
} 
*/

// Función Flecha
const cuadrado = (numero) => numero * numero;

// Muestra en consola en probando con 3 numeros diferentes
console.log("El cuadrado de 2 es: " + cuadrado(2));
console.log("El cuadrado de 5 es: " + cuadrado(5));
console.log("El cuadrado de 10 es: " + cuadrado(10));
document.write("<h2>" + "Inciso B" + "</h2>");
document.write("<h3>El cuadrado de 2 es: " + cuadrado(2) + "</h3>");
document.write("<h3>El cuadrado de 5 es: " + cuadrado(5) + "</h3>");
document.write("<h3>El cuadrado de 10 es: " + cuadrado(10) + "</h3>");

// Inciso C

/*Crea una arrow funtion llamada saludoPersonalizado que reciba dos
parametros: nombre y edad, y retorne una cadena como la siguiente */

const saludoPersonalizado = (nombre, edad) => "Hola, me llamo " + nombre + " y tengo " + edad + " años.";
console.log(saludoPersonalizado("Romo", 20));
document.write("<h2>" + "Inciso C" + "</h2>");
document.write("<h3>" + saludoPersonalizado("Romo", 20) + "</h3>");
//"Hola, me llamo Romo y tengo 20 años."