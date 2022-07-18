// Programaación orientada objetos

// clase: siempre lleva un constructor donde se inicializa todo
class Pantalla{
    constructor(marca, modelo, pulgadas){
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    encendido(){
        console.log(`La pantalla ${this.marca} se ha encendido.`);
    }
    volumen(){
        console.log(`El volumen se ha modificado.`);
    }
    info(){
        console.log(`La pantalla ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas.`);
    }
    // define una función 
    set peso(){
        this.kgs = value.kgs;
    }
    // obtiene información
    get peso(){
        return this.kgs;
    }
}


// instancias de la clase pantalla
const tvSala = new Pantalla('Master','Oasis',55);
//const tvHabitación = new Pantalla();
const tvHabitación = new Pantalla('Origin','Artemis',80);

