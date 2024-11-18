// esta funcion agrega el valor del boton a la calculadora , el que ya tiene mas el siguiente 

function agregar (valor) {
    document.getElementById("pantalla").value += valor
}
// esta funcion vacia la pantalla 
function borrar () {
    document.getElementById("pantalla").value = '' // o a vacio
}
// esta funcion vacia la pantalla 
function calcular () {
    const  valorPantalla = document.getElementById("pantalla").value 
    const resultado = eval(valorPantalla) // ejecuta los valores almacenados
    document.getElementById("pantalla").value = resultado
}


