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
    //1 - Buscar el elemento HTML donde va a ir el nombre
    //2 - Por medio del innerHTML agregar el texto con el nombre del parámetro
}