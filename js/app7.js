"use strict"

// Creando arreglos 

let platillos = ['ceviche','tacos', 'pasta'];
let bebidas = new Array('chicha','pozol');

console.log(typeof platillos, Array.isArray(platillos));

//agrega elemento nuevo al arreglo
platillos.push('Tostadas');

console.log(platillos);

platillos.pop();

console.log(platillos);

// reune todos los elementos de array y lo regresa como texto

let mensaje = platillos.join();
console.log(mensaje);
