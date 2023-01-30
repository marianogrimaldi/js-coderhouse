//darkmode

let darkmode = document.getElementById ("darkmode")
let lightmode = document.getElementById ("lightmode")

let modoOscuro = localStorage.getItem("mo")

if(modoOscuro == "true"){
    document.body.classList.add("modoOscuro")
}else{
    document.body.classList.remove("modoOscuro")
}

darkmode.addEventListener("click", ()=>{
    document.body.classList.add("modoOscuro")
    localStorage.setItem("mo",true)
})

lightmode.addEventListener("click", ()=>{
    document.body.classList.remove("modoOscuro")
    localStorage.setItem("mo", false)
})


