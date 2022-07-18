// Written by Daniel Tejada-Hernández
// friday, July 12th 2022
// From linkedin learning: JavaScript esencial


// Métodos númericos en Javascript

let numero = '10.30'

// String a número
console.log(typeof numero,typeof Number(numero));

// Decimal a entero
console.log( parseInt(numero));

// Decimal a entero
console.log( parseInt(numero));

// Entero a decimal
console.log( parseFloat(numero));

// ¿Es un número?
console.log( isNaN(numero));

// ¿Es un número entero?
console.log( Number.isInteger(numero));

// Métodos númericos de instancias

numero = 0.0023;
// notación exponencial, con 3 cifras decimales
console.log(numero.toExponential(3));

numero = 5,647;
// Devuelve el entero pero con 3 decimales
console.log(numero.toFixed(2));

// Precisión de digitos decimales, precisión del digito hasta el 6to elemento
console.log(numero.toPrecision(6));

// Devuelve el String de un número

console.log(numero.toString());

