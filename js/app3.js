"use strict"

// Written by Daniel Tejada-Hernández
// friday, July 1st 2022
// From linkedin learning: JavaScript esencial

// Funciones tipo Arrow

let saludar = nombre => "Hola " +nombre;
console.log(saludar('Daniel'));

let calcular = (datoA,datoB) => datoA+datoB;
console.log(calcular(10,3 ));

let generar = (datoA,datoB) => {
    let datoC = 5;
    return datoA+datoB+datoC;
}
console.log(generar(1,2))