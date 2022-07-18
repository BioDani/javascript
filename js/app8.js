// arrow function

let platillos = ['carne','pastas','arroz'];
console.log(platillos);

// otra manera
platillos.forEach(platillo => console.log(platillo));


// find
let p = platillos.find(platillo => platillo == 'tostadas');
console.log(p);

// findIndex
let i = platillos.findIndex(platillo => platillo == 'pastas');
console.log(i);

// filter
let j = platillos.findIndex(platillo => platillo == 'pastas');
console.log(j);

// some: recibe una función  como callback
// every : valida que todos los elemento cumplan con una  condicion