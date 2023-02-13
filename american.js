//Clase de tipoHamburguesa para identificar numero, nombre, tamaño y precio
class TipoHamburguesa {
    constructor (num, name, sizes, image){
        this.num = num;
        this.name = name;
        this.sizes = sizes;
        this.image = image;
    }

}
// Clase pare identificar el temaño y precio de las hamb.
class tamañoHamb {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

}
let carrito = [];
let valorCompra = 0;
//Array para agrupara las clases de hamburguesas
let tiposDeHamburguesa = []; 

const mostrarListado = async ()=>{
    debugger
    const response = await fetch("hambstock.json");
    const data = await response.json()
    
    for(let tipoHamburguesa of data){
        let sizes = [];
        for (let size of tipoHamburguesa.sizes){
            sizes.push(new tamañoHamb(size.nombre, size.precio));
        }
        let hambnueva = new TipoHamburguesa (tipoHamburguesa.num, tipoHamburguesa.name, sizes, tipoHamburguesa.image)
        tiposDeHamburguesa.push(hambnueva);
    }

    let gridHamb = document.getElementById("grid-hamb")

    for(let TipoHamburguesa of tiposDeHamburguesa ){
        let sizesPrices = "";
        for(let tamañoHamb of TipoHamburguesa.sizes){
            sizesPrices += ` <li class="list-group-item">${tamañoHamb.nombre} $${tamañoHamb.precio}<img onclick="selecHamburguesa(${TipoHamburguesa.num},'${tamañoHamb.nombre}')" src="img/carrito.png" class="carrito" alt="carrito"></li>`
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
    
}

mostrarListado();



//sección de funciones
function selecHamburguesa (idTipoHamburguesa,nombreSize){
    let hambur = getHamb(idTipoHamburguesa);
    let sizeSelected = getSize(hambur,nombreSize)
    carrito.push([hambur,sizeSelected]);
    valorCompra += sizeSelected.precio;
    document.getElementById("compraCliente").innerHTML = `Usted a seleccionado ${carrito.length}  ${carrito.length > 1? "hamburguesas": "hamburguesa"} por un valor de $${valorCompra}`

}


function getHamb(idHamb){
    return tiposDeHamburguesa.find(hamburguesa => hamburguesa.num == idHamb);
    
}

function getSize(hambSelected, nombreSize){
    return hambSelected.sizes.find(size => size.nombre === nombreSize);
} 



let finCompra = document.getElementById ("finCompra");

finCompra.addEventListener("click", ()=>{
    
})

function finalizarCompra(){
    let texto = `Compraste ${carrito.length} hamburguesas.
    Por un valor total de $${valorCompra}`;

    Swal.fire({
        title: texto,
        
        
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "No, volver a elegir",
        confirmButtonText: 'Si, quiero comprar!'
      }).then((result) => {
        debugger;
        if (result.isConfirmed) {
            Swal.fire(
                'A disfrutar',
                'Muchas gracias por tu compra'
              )
        }else if(result.isDenied){
            alert("Ejecuto un método para borrar toda la selección");
            carrito=[];
            valorCompra=0;
            
        }
        
      })
}














