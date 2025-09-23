// --- //
//  a
// --- //

/* 
const persona = {
  nombre: "Ivan Isay",
  edad: 37,
  direccion: {
    ciudad: "Qro",
    pais: "Mexico"
  }
};
*/

// Destructuración
const persona = {nombre: "Ivan Isay", edad: 37, direccion: {ciudad: "Qro", pais: "Mexico"}};
const { nombre, edad, direccion: { ciudad, pais } } = persona;

console.log("Hola, mi nombre es " + nombre + " y tengo " + edad + " años y vivo en " + ciudad + pais);


// --- //
//  b
// --- //

const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 }
];

// Para filtrar productos con precio mayor a 1000 y obtener sus nombres
const productosCaros = productos.filter(producto => producto.precio > 1000);

// Para obtener solo los nombres de esos productos
const nombresProductosCaros = productosCaros.map(producto => producto.nombre);

console.log("Los productos con precio mayor a 1000 son: " + nombresProductosCaros);

// --- //
//  c
// --- //

const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Maria", edad: 28 }
];

// Buscar la persona llamada "Luis" (de extra mostrar su edad)
const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log("Persona encontrada con nombre Luis: " + personaLuis.nombre + " con la edad de " + personaLuis.edad + " años");

// Para imprimir una lista de todas las personas con sus edades correspondientes
console.log("Lista de personas con sus edades:");
personas.forEach(persona => {
  console.log(`${persona.nombre} tiene ${persona.edad} años`);
});

// Para sumar todsa las edades y obtener un total
const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("La suma total de todas las edades es: " + totalEdades);