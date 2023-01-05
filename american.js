
//Declaración de variables y constantes.
const PREMIUM = 1500;
const DOBLE = 1000;
const CLASICA = 500;
let precioTotal = 0;
let loadedBurger = 0; 

//Declaramos esta funcion y la invocamos 2 veces, una para la edad y la otra para cant de hamb.
function isCantInvalid(cant, min=0, max=1000){
    return isNaN (cant) || cant < min || cant > max;
}

//Ingresamos el nombre del usuario.
let nombre = prompt ("Ingrese su nombre");

//Ingresamos la edad con la condicion de que si ponemos letras u otro valor me repita el ciclo.
let edad = parseInt (prompt ("Ingrese su edad"));
while (isCantInvalid(edad,18)) {
   edad = parseInt (prompt ("Error en el valor ingresado, por favor ingrese su edad"));
}

//ingresamos cantidad de hamb con la condicion de que se repita el ciclo siempre y cuando
//no pongamos el dato correcto: número o número entre 1 y 10, em ese caso activa segundo prompt.

let cantidadHamb = parseInt ( prompt ("Cuantas hamburguesas quieres comprar? Tienes un maximo de 10"));
while (isCantInvalid(cantidadHamb,1,10)) {
    cantidadHamb = parseInt ( prompt ("Error en el valor ingresado. Ingrese un número, tienes un maximo de 10"));
}

//Seleccion de hamb. Suma los totales, dependiendo de la cant de hamb que elegimos. Y si no escribimos de manera 
//correcta, se activa alert y se inicia nuevamente el ciclo.
while (loadedBurger < cantidadHamb){
    let hambSelected = prompt ("Escribe tu hamburguesa preferida: CLASICA $500, DOBLE $1000 O PREMIUM $1500").toUpperCase();
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

//Mensaje final (alert) el precio total de las hamburguesas seleccionadas y el nombre del us.
alert (`El precio total es de $ ${precioTotal}. Gracias ${nombre.toLocaleUpperCase()} por su compra`);
