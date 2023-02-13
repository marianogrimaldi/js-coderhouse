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
    Toastify({
        text: "DEFINITIVAMENTE LAS HAMBURGUESAS MAS RICAS DEL MUNDO",
    
        duration: 3000,
       
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "red",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

function escribirNombre(nombre){
    document.getElementById("saludoCliente").append(`Bienvenido ${nombre} a American Burger `);
}


