//Modal de presentacion para registrar el nombre del cliente

const myModal = new bootstrap.Modal(document.getElementById('myModal'));
let nombreCliente = localStorage.getItem("cliente");

if(!nombreCliente){
    myModal.show();
} else{
    escribirNombre(nombreCliente);
}
//registramos en el local para que no vuleva a preguntar la proxima vez que entramos al sitio.
function registrarNombre (){
    let nombre = document.getElementById("nombreCliente");
    localStorage.setItem("cliente",nombre.value);
    escribirNombre(nombre.value);
    myModal.hide();
    //le agregagamos un toastift para ponerle onda
    Toastify({
        text: "DEFINITIVAMENTE LAS HAMBURGUESAS MAS RICAS DEL MUNDO",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", 
        position: "center", 
        stopOnFocus: true, 
        style: {
          background: "red",
        },
        onClick: function(){} 
      }).showToast();
}
//frase de bienvemida al sector de compras
function escribirNombre(nombre){
    document.getElementById("saludoCliente").append(`Bienvenido/a ${nombre} a American Burger `);
}


