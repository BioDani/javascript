
const boton = document.querySelector('.boton');

// Eventos del mouse

boton.addEventListener('click', function() {
    console.log('Botón presionado');
});

boton.addEventListener('mouseover', function() {
    console.log('El mouse está sobre el botón')
});


boton.addEventListener('mouseout', function() {
    console.log('El mouse está fuera del botón')
});

// Eventos del teclado
 
window.addEventListener('keydown' , function(event) {
    console.log('Pulsando tecla');
    console.log(String.fromCharCode(event.keyCode));
});

window.addEventListener('keypress' , function(event) {
    console.log('Tecla pulsada');
});


window.addEventListener('keyup' , function(event) {
    console.log('Tecla liberada');
});

// Carga de página 

window.addEventListener('load', function(){
    console.log('El contenido de la pagina se ha cargado completamente');
});



