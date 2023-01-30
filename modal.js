const myModal = new bootstrap.Modal(document.getElementById('myModal'));
let nombreCliente = localStorage.getItem("cliente");

if(!nombreCliente){
    myModal.show();
} else{
    escribirNombre(nombreCliente);
}

function registrarNombre (){
    let nombre = document.getElementById("nombreCliente");
    localStorage.setItem("cliente",nombre.value);
    escribirNombre(nombre.value);
    myModal.hide();
}

function escribirNombre(nombre){
    document.getElementById("saludoCliente").append(`Bienvenido ${nombre} al sistema `);
}

//Función agregada solamente para poder limpiar de manera más rápida el cliente, en las pruebas.
function limpiarStorage(){
    localStorage.removeItem("cliente");
}