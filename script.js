let zapatillasArray = [
    { id: 1001, nombre: "ADIDAS ULTRABOOST LIGHT", genero: "RUNNING", calificacion: 5, precio: 89999, imgUrl: "./images/ultraboostlight.webp" },
    { id: 1002, nombre: "ADIDAS ADISTAR 2.0", genero: "RUNNING", calificacion: 4, precio: 78999, imgUrl: "./images/adistar.webp" },
    { id: 1003, nombre: "ADIDAS ADIZERO SL", genero: "RUNNING", calificacion: 4, precio: 68999, imgUrl: "./images/ADIZERO.webp" },
    { id: 1004, nombre: "ADIDAS ULTRABOOST 22", genero: "RUNNING", calificacion: 3, precio: 62999, imgUrl: "./images/ultraboost22.webp" },
    { id: 1005, nombre: "ADIDAS TERREX MID GORE-TEX", genero: "OUTDOOR", calificacion: 5, precio: 102999, imgUrl: "./images/terrexgoretex.webp" },
    { id: 1006, nombre: "ADIDAS TERREX AGRAVIC PRO", genero: "OUTDOOR", calificacion: 5, precio: 99999, imgUrl: "./images/terrexagravic.webp" },
    { id: 1007, nombre: "ADIDAS TERREX SPEED", genero: "OUTDOOR", calificacion: 4, precio: 75999, imgUrl: "./images/terrexspeed.webp" },
    { id: 1008, nombre: "ADIDAS TERREX EAXTRAILL", genero: "OUTDOOR", calificacion: 3, precio: 57999, imgUrl: "./images/terrexeaxtrail.webp" },
    { id: 1009, nombre: "ADIDAS NMS_V3 EXCLUSIVE", genero: "ORIGINALS", calificacion: 5, precio: 89999, imgUrl: "./images/nmd.webp" },
    { id: 10010, nombre: "ADIDAS SUPERSTAR", genero: "ORIGINALS", calificacion: 5, precio: 71999, imgUrl: "./images/superstar.webp" },
    { id: 10011, nombre: "ADIDAS ADI2000", genero: "ORIGINALS", calificacion: 4, precio: 62999, imgUrl: "./images/ADI2000.webp" },
    { id: 10012, nombre: "ADIDAS FORUM MID", genero: "ORIGINALS", calificacion: 3, precio: 55999, imgUrl: "./images/forummid.webp" },

]
let carroCompra = []
let totalCompra = 0

function AgregarProCarro(e) {
    const resultado = zapatillasArray.find(zapatilla => zapatilla.id === Number(e.target.id))
    let mensaje
    if (carroCompra.find(zapatilla => zapatilla.id == resultado.id)) {
        mensaje = "Este articulo ya esta en el carro de compra"
    }
    else {
        carroCompra.push(resultado)
        renderizarCarroCompra(carroCompra)
        mensaje = "Producto agregado correctamente"
    }
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`style: 
        style: {
                background: "linear-gradient(to right, #581845, #ff5733)",
        }
    }).showToast();
    carroCompraGuardar()
}


let contenedorZapatilla = document.getElementById("contenedorZapatilla")
let contenedorCarroCompra = document.getElementById("contenedorCarroCompra")

let buscador = document.getElementById("buscadortxt")
buscador.oninput = BuscarZapatilla
renderizarZapatilla(zapatillasArray)
carroCompraRecuperar()

let verCarrito = document.getElementById("verCarrito")
verCarrito.addEventListener("click", mostrarOcultarC)

function mostrarOcultarC() {
    contenedorCarroCompra.classList.toggle("ocultar")
    contenedorZapatilla.classList.toggle("ocultar")
}


function BuscarZapatilla() {
    let zapatillaIngresada = zapatillasArray.filter(peli => peli.nombre.includes(buscador.value.toUpperCase()) || peli.genero.includes(buscador.value.toUpperCase()))
    renderizarZapatilla(zapatillaIngresada)
    
}

function renderizarZapatilla(arrayZapatilla) {
    contenedorZapatilla.innerHTML = ""
    arrayZapatilla.forEach(zapatilla => {
        let tarjetaZapatilla = document.createElement("div")
        //tarjetaZapatilla = document.createElement("div")
        tarjetaZapatilla.classList.add("zapatilla")
        tarjetaZapatilla.id = `tarjeta${zapatilla.id}`
        tarjetaZapatilla.innerHTML = `
            <h4>${zapatilla.nombre}</h4>
            <img src=${zapatilla.imgUrl}></img>
            <p>$${zapatilla.precio}</p>
            <button type="button" class="btn btn-info" id=${zapatilla.id}>Agregar</button>
        `
        contenedorZapatilla.append(tarjetaZapatilla)
        let botonAgre = document.getElementById(zapatilla.id)
        botonAgre.onclick = AgregarProCarro
    })
}

function renderizarCarroCompra(zapatillaCarroCompra) {
    totalCompra = zapatillaCarroCompra.reduce((acc, zapa) => acc += zapa.precio, 0)
    contenedorCarroCompra.innerText = ""
    zapatillaCarroCompra.forEach(zapatilla => {
        let tarjetaZapatilla = document.createElement("div")
        tarjetaZapatilla.classList.add("col-12")
        tarjetaZapatilla.classList.add("itemCarroCompra")
        tarjetaZapatilla.innerHTML += `
            <h5>${zapatilla.nombre} $${zapatilla.precio}</h5>
            <button type="button" class="btn btn-danger" onClick=eliminarZapatilla(eliminar${zapatilla.id}) id=eliminar${zapatilla.id}>X</button>
        `
        contenedorCarroCompra.appendChild(tarjetaZapatilla)
    })
    contenedorCarroCompra.innerHTML += `
        <div class="col-12">
            <p>___________________________</p>
        </div>
        <div class="col-12">
            <p>Total: $${totalCompra}</p>
        </div>
        <div class="col-12">
            <button type="button" class="btn btn-success" id="comprar">COMPRAR</button>
        </div>
    `
    
    let comprar = document.getElementById("comprar")
    comprar.addEventListener("click", finalizarCompra)
}

function eliminarZapatilla(e){

    let id = e.id.substring(8)
    let indice = carroCompra.findIndex(zapatilla => zapatilla.id === Number(id))
    carroCompra.splice(indice, 1)
    renderizarCarroCompra(carroCompra)
    carroCompraGuardar()
}
function carroCompraGuardar(){
    let carroCompraJSON = JSON.stringify(carroCompra)
    localStorage.setItem("carroCompra", carroCompraJSON)
}
function carroCompraRecuperar(){
    if(localStorage.getItem("carroCompra")){
        carroCompra = JSON.parse(localStorage.getItem("carroCompra"))
        renderizarCarroCompra(carroCompra)
    }
}


function finalizarCompra(){
     mostrarSweetAlert("Compra Finalizada","Gracias por tu compra, el total a pagar es: $" + totalCompra, 'success', 5000, false)
     localStorage.removeItem("carroCompra")
     carroCompra = []
     renderizarCarroCompra(carroCompra)
 }
 
 function mostrarSweetAlert(titulo, texto, icono, tiempo, mostrarBoton, urlImagen, anchoImagen, altoImagen) {
     Swal.fire({
       title: titulo,
       text: texto,
       icon: icono,
       timer: tiempo,
       showConfirmButton: mostrarBoton,
       imageUrl: urlImagen,
       imageWidth: anchoImagen,
       imageHeight: altoImagen
     })
 }