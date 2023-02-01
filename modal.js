//Modal de presentacion para registrar el nombre del cliente

const myModal = new bootstrap.Modal(document.getElementById('myModal'));
let nombreCliente = localStorage.getItem("cliente");

if(!nombreCliente){
    myModal.show();
} else{
    escribirNombre(nombreCliente);
}

function registrarNombre (){
    let nombre = document.getElementById("nombreCliente");
    // Argegar las validaciones del nombre (Que tenga datos, que sea algo racional, que no exceda determinada cantidad de caracteres, etc...)
    localStorage.setItem("cliente",nombre.value);
    escribirNombre(nombre.value);
    myModal.hide();
}

function escribirNombre(nombre){
    document.getElementById("saludoCliente").append(`Bienvenido ${nombre} a American Burger `);
}
