//Clase de tipoHamburguesa para identificar numero, nombre, tamaño y precio
class TipoHamburguesa {
    constructor (num, name, sizes, image){
        this.num = num;
        this.name = name;
        this.sizes = sizes;
        this.image = image;
    }

}
class tamañoHamb {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

}
//Array para agrupara las clases de hamburguesas
const tiposDeHamburguesa = [
    new TipoHamburguesa(1,"Argenta", [new tamañoHamb("simple",770), new tamañoHamb("doble",1000)],
        "./img/burgers/argenta.png"),
    new TipoHamburguesa(2,"Barbacoa", [new tamañoHamb("simple",770), new tamañoHamb("doble",1000)],
        "./img/burgers/barbacoa.png"),
    new TipoHamburguesa(3,"Big American", [new tamañoHamb("simple",690), new tamañoHamb("doble",920)],
        "./img/burgers/bigamerican.png"),
    new TipoHamburguesa(4,"Bluecheese", [new tamañoHamb("simple",700), new tamañoHamb("doble",930)],
        "./img/burgers/bluecheese.png"),
    new TipoHamburguesa(5,"Cheddar y Bacon", [new tamañoHamb("simple",770), new tamañoHamb("doble",1000)],
        "./img/burgers/chedarybacon.png"),
    new TipoHamburguesa(6,"Cheeseburger", [new tamañoHamb("simple",660), new tamañoHamb("doble",890)],
        "./img/burgers/cheeseburger.png"),
    new TipoHamburguesa(7,"Clasica", [new tamañoHamb("simple",690), new tamañoHamb("doble",920)],
        "./img/burgers/clasica.png"),
    new TipoHamburguesa(8,"Doble Cuarto", [new tamañoHamb("simple",690), new tamañoHamb("doble",920)],
        "./img/burgers/doblecuarto.png"),
    new TipoHamburguesa(9,"Extreme", [new tamañoHamb("simple",770), new tamañoHamb("doble",1000)],
        "./img/burgers/extreme.png"),
    new TipoHamburguesa(10,"Italy", [new tamañoHamb("simple",770), new tamañoHamb("doble",930)],
        "./img/burgers/italy.png"),
    new TipoHamburguesa(7,"Oklahoma", [new tamañoHamb("simple",770), new tamañoHamb("doble",930)],
        "./img/burgers/oklahoma.png"),
    new TipoHamburguesa(7,"Patty Melt", [new tamañoHamb("simple",980) ],
        "./img/burgers/pattymelt.png"),
    
]; 

let gridHamb = document.getElementById("grid-hamb")

for(let TipoHamburguesa of tiposDeHamburguesa ){
    let sizesPrices = "";
    for(let tamañoHamb of TipoHamburguesa.sizes){
        sizesPrices += ` <li class="list-group-item">${tamañoHamb.nombre} $${tamañoHamb.precio}<img onclick="alert('${TipoHamburguesa.name}-${tamañoHamb.nombre}')" src="img/carrito.png" class="carrito" alt="carrito"></li>`
    }

    let newcards = document.createElement("div")
    newcards.innerHTML = `<div class="card" style="width: 10rem; height: 17rem;">
    <img src=${TipoHamburguesa.image} class="card-img-top" alt="imagen hamburguesa">
    <div>
        <h5>${TipoHamburguesa.name}</h5>
    </div>
         <ul class="list-group list-group-flush">
           ${sizesPrices}
        </ul>
    </div>`
    gridHamb.appendChild(newcards)

} 






/*


//Array para ingresar las hamburgesesas seleccionados por el usuario
let hambSelected = [];
 

//Funcion que ordena las hamb de mayor a menor precio
function ordenPriceMayMen(array){
    const mayorMenor = [].concat(array)
    mayorMenor.sort((a,b) => b.price - a.price)
   return mayorMenor;
}


//Funcion que ordena las hamb de menor a mayor precio
function ordenPriceMenMay(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((a,b) => a.price - b.price)
    return menorMayor;
}


//Funcion que ordena las hamb por codigo
function ordenNumHamb(array){
    const codigoHamb = [].concat(array)
    codigoHamb.sort((a,b) => a.num - b.num)
    return codigoHamb;
}


//Funcion que ordena las hamb por abcdario
function ordenAbcd(array){
    const alfabetico = [].concat(array)
    alfabetico.sort((a,b) => {
          if(a.name > b.name) {
            return 1
          }
          if (a.name < b.name) {
            return -1
          }
          return 0;
    })
   return alfabetico;
}


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
let cantidadHamb = parseInt ( prompt (`Bienvenido ${nombre} Cuantas hamburguesas quieres comprar? Tienes un maximo de 10`));
while (isCantInvalid(cantidadHamb,1,10)) {
    cantidadHamb = parseInt ( prompt ("Error en el valor ingresado. Ingrese un número, tienes un maximo de 10"));
}

//Menú que tiene el usuario para visualizar el orden de las hamburguesas.
let visualizacion = parseInt (prompt (`Seleccione la manera en que usted quiere ver nuestras hamburguesas. \n1 - Codigo de Hamburguesa
2 - Mayor precio\n3 - Menor Precio\n4 - Alfabeticamente`))
while (isCantInvalid(visualizacion,1,4)) {
    visualizacion = parseInt (prompt ("Error en el valor ingresado"));
}


let listadoHamb = "Nuestras hamburguesas ordenadas ";
let hambOrdenas = [];
switch (visualizacion) {
    case 1:
        listadoHamb += "por codigo son:\n";
        hambOrdenas = ordenNumHamb(tiposDeHamburguesa)
        break;
    case 2:
        listadoHamb += "por mayor precio son:\n";
        hambOrdenas = ordenPriceMayMen(tiposDeHamburguesa)
        break;
    case 3:
        listadoHamb += "por menor precio son:\n";
        hambOrdenas = ordenPriceMenMay(tiposDeHamburguesa)
        break;
    case 4:
        listadoHamb += "alfabeticamente son:\n";
        hambOrdenas = ordenAbcd(tiposDeHamburguesa)
        break;

}

//Foreach para recorrer el array y poder concatenar los elemntos y asi armar el listado
hambOrdenas.forEach(element => {
    listadoHamb += `- COD: ${element.num} - ${element.name} (${element.size}) - $ ${element.price}\n`;
});
listadoHamb += "Seleccione el codigo de la hamburguesa deseada"

//Ciclo para seleccionar las hamburguesas
while (cantidadHamb > hambSelected.length) {
    let nunHambSelected = parseInt ( prompt (listadoHamb));  
    let hamburguesa = hambOrdenas.find(hamb => hamb.num == nunHambSelected);
    if (hamburguesa){
        hambSelected.push(hamburguesa);
    }else{
        alert ("Codigo incorrecto")
    }
}

// Aqui sumamos el precio de las hamburguesas seleccionadas.
let precioTotal = 0;
let hambCompradas = "Las hamburguesas seleccionas son: \n"
hambSelected.forEach(element => {
    precioTotal += element.price
    hambCompradas += `${element.name} (${element.size})\n`
})

//Mensaje final (alert) el precio total de las hamburguesas seleccionadas y un listado de lo que se compro.
alert (`${hambCompradas} \n El precio total es $ ${precioTotal} \n GRACIAS POR SU COMPRA`);



*/

















