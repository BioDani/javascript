"use strict" // 1

// Written by Daniel Tejada-Hernández
// friday, July 1st 2022
// From linkedin learning: JavaScript esencial

/* References:
1. "use strict" helps programing with good practices. 
2. var: global variable
3. let: block container, for local variable
4. const: Does not change in all the script, i can not change it in all the code
5. using parseInt() and parseFloat()
6. using String()
7. Boolean
8. Date
*/

// alert("Hi from a extern file, Daniel");

console.log('Hi console');

// Variable declaration
var namePerson = "Daniel Tejada-Hernández";
const pi = 3.141618;

function greeting(){
    let namePerson = 'Maleja'
    console.log("Hello, ",namePerson);
}

console.log('hey, ',namePerson)
greeting(namePerson);

// string to number
var num = "123";
var num2 =  Number(num);

 // number  or string to int
num = 123.233;
console.log(num);
num = parseInt(num);
console.log(num);

// string to float
num = '2.718';
console.log(num+num);
num = parseFloat(num);
console.log(num + num);

// number to string
num = 34;
num = String(num);
console.log(num+num)

// Booleans
var state = true;
console.log(state);
var state = Boolean(1 > 2)
console.log(state);

// Dates
var dateToday = new Date();
console.log(dateToday)
console.log(dateToday.getMonth());
console.log(dateToday.getDay());
console.log(dateToday.getFullYear());
