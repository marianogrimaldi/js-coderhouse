const PREMIUM = 1500;
const DOBLE = 1000;
const CLASICA = 500;
let precioTotal = 0;
let loadedBurger = 0; 

let nombre = prompt ("Ingrese su nombre");

let edad = parseInt (prompt ("Ingrese su edad"));
while (isNaN(edad)) {
   edad = parseInt (prompt ("Error en el valor ingresado, por favor ingrese su edad"));
}

let cantidadHamb = parseInt ( prompt ("Cuantas hamburguesas quieres comprar? Tienes un maximo de 10"));
while (isNaN (cantidadHamb) || (cantidadHamb < 1 && cantidadHamb > 10)) {
    cantidadHamb = parseInt ( prompt ("Error en el valor ingresado. Ingrese un número, tienes un maximo de 10"));
}



while (loadedBurger < cantidadHamb){
    let hambSelected = prompt ("Escribe tu hamburguesa preferida: CLASICA, DOBLE O PREMIUM").toUpperCase();
    if (hambSelected == "PREMIUM"){
        precioTotal = precioTotal + PREMIUM;
        loadedBurger++;
    }else if (hambSelected == "DOBLE"){
        precioTotal = precioTotal + DOBLE;
        loadedBurger++;
    }else if (hambSelected == "CLASICA"){
        precioTotal = precioTotal + CLASICA;
        loadedBurger++;
    }else {
        alert ("No existe ese tipo de hamburguesa")
    }

}


alert (`El precio total es $ ${precioTotal}. Gracias ${nombre.toLocaleUpperCase()} por su compra`);
