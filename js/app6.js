'use strict'

// Written by Daniel Tejada-Hernández
// friday, July 12th 2022
// From linkedin learning: JavaScript esencial


// Cadenas de texto

let pais = 'Colombia';
let empresa ='Onnovacion';

// o también: 

let servicio = new String('software');

//Longitud cadena de texto
console.log('Colombia tiene ',pais.length,' letras.');

/*
--------Métodos de busqueda-------- 
-indexOf:primera indicencia
-lastIndexOf: última incidencia
-search: posición donde lo encuentra
-match: encuentra todas las incidencias
-substr: recibe por parametros las coordenadas del pedazo de texto que está buscando.
-substring
-charAt: retorna una posición particular, comenzando desde el 0

Nota: g= global y i=in case sensitive y se pueden combinar (gi). 
*/

let mensaje = 'Estamos aprendiendo muchas cosas en este momento.';
console.log(mensaje);
let resultado = mensaje.search('aprendiendo');
console.log(resultado);

// Startwith
resultado = mensaje.startsWith('Es');
console.log(resultado);

resultado = mensaje.startsWith('es');
console.log(resultado);

let textoEn = mensaje.indexOf('Estamos');
console.log(textoEn);

//EndsWith
resultado = mensaje.endsWith('momento.');
console.log(resultado);

// Include
resultado = mensaje.includes('cosas');
console.log(resultado);

//--------Métodos de generación, reemplazo y separación-------- 
mensaje = 'Daniel';
resultado = mensaje.repeat(3);
console.log(resultado);

mensaje = "Daniel Hernandez T.";
resultado = mensaje.replace('Hernandez','Tejada');
resultado = resultado.replace('T.','Hernandez');
console.log(resultado);

//slice
mensaje = "1-2-3-4-5-6"
resultado = mensaje.slice(2);
console.log(resultado);
resultado = mensaje.slice(2,resultado.length);
console.log(resultado);

// Split: separa cadena en un arreglo
mensaje = "1-2-3-4-5-6";
resultado = mensaje.split('-');
console.log(resultado);

//Trim: quita espacios en blanco al inicio y al final de cadena
mensaje = '       hola, cómo vas?         ';
resultado = mensaje.trim();
console.log(resultado);


