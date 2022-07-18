"use strict"

// Written by Daniel Tejada-Hernández
// friday, July 1st 2022
// From linkedin learning: JavaScript esencial
// 2nd part

/* References:
1. JSON structure
2. JSON to text
3. text to JSON
4.
5.
6.
7.
8.
9.

*/

var person = {name: "Andrea" , lastName: "Garcia"};

var people = [{name: "Daniel" , lastName: "Tejada"},
{name: "Maleja" , lastName: "Tajada"},{name: "Beatriz" , lastName: "Hernández"}];

console.log(person);

// json to text
var personJSON = JSON.stringify(person)

// text to json
var newPerson = JSON.parse(personJSON)