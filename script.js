let peliculasArray = [
    { id: 1001, nombre: "AVATAR EL CAMINO DEL AGUA", genero: "FICCION", calificacion: 4, precio: 10500, imgUrl: "./images/Avatar.jpg" },
    { id: 1002, nombre: "GATO CON BOTAS ULTIMO DESEO", genero: "INFANTIL", calificacion: 3, precio: 9300, imgUrl: "./images/gatoBotas.jpg" },
    { id: 1003, nombre: "UN MUNDO EXTRAÑO", genero: "INFANTIL", calificacion: 4, precio: 9300, imgUrl: "./images/mundoExtra.jpg" },
    { id: 1004, nombre: "BABYLON", genero: "COMEDIA", calificacion: 5, precio: 10500, imgUrl: "./images/Babylon.jpg" },
    { id: 1005, nombre: "DESASTRE INMINENTE", genero: "ACCION", calificacion: 4, precio: 10200, imgUrl: "./images/desastreInminente.jpg" },
    { id: 1006, nombre: "EL ARO 4", genero: "TERROR", calificacion: 4, precio: 10300, imgUrl: "./images/elAro4.jpg" },
    { id: 1007, nombre: "ALERTA EXTREMA", genero: "ACCION", calificacion: 3, precio: 10000, imgUrl: "./images/alertaExtrema.png" },
    { id: 1008, nombre: "GENERACION LOW COST", genero: "DRAMA", calificacion: 4, precio: 10100, imgUrl: "./images/generacionLow.jpg" },
    { id: 1009, nombre: "MEGAN", genero: "TERROR", calificacion: 3, precio: 9900, imgUrl: "./images/megan.jpg" },
    { id: 10010, nombre: "AGENTE FORTUNE", genero: "ACCION", calificacion: 4, precio: 10200, imgUrl: "./images/agenteFortune.jpg" },
    { id: 10011, nombre: "EL PEOR VECINO DEL MUNDO", genero: "COMEDIA", calificacion: 4, precio: 10100, imgUrl: "./images/vecino.jpg" },
    { id: 10012, nombre: "LA FARSA", genero: "DRAMA", calificacion: 4, precio: 10150, imgUrl: "./images/farsa.jpg" },
    { id: 10013, nombre: "TERRIFIER 2", genero: "TERROR", calificacion: 3, precio: 10100, imgUrl: "./images/terrifier2.jpg" },
    { id: 10014, nombre: "EL PRODIGIO", genero: "DRAMA", calificacion: 5, precio: 10500, imgUrl: "./images/elProdigio.jpg" },
    { id: 10015, nombre: "EL MENU", genero: "SUSPENSO", calificacion: 4, precio: 10400, imgUrl: "./images/elMenu.jpg" }
]
let carroCompra = []
let totalCompra = 0

function AgregarProCarro(e) {
    const resultado = peliculasArray.find(pelicula => pelicula.id === Number(e.target.id))
    let mensaje
    if (carroCompra.find(pelicula => pelicula.id == resultado.id)) {
       mensaje = "Esta pelicula ya esta en el carro de compra"
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


let contenedorPeliculas = document.getElementById("contenedorPeliculas")
let contenedorCarroCompra = document.getElementById("contenedorCarroCompra")

let buscador = document.getElementById("buscadortxt")
buscador.oninput = BuscarPelicula
renderizarPeliculas(peliculasArray)
carroCompraRecuperar()

let verCarrito = document.getElementById("verCarrito")
verCarrito.addEventListener("click", mostrarOcultarC)

function mostrarOcultarC() {
    contenedorCarroCompra.classList.toggle("ocultar")
    contenedorPeliculas.classList.toggle("ocultar")
}


function BuscarPelicula() {
    let peliIngresada = peliculasArray.filter(peli => peli.nombre.includes(buscador.value.toUpperCase()) || peli.genero.includes(buscador.value.toUpperCase()))
    renderizarPeliculas(peliIngresada)
   
}

function renderizarPeliculas(arrayPeliculas) {
    contenedorPeliculas.innerHTML = ""
    arrayPeliculas.forEach(pelicula => {
        let tarjetaPelicula = document.createElement("div")
        //tarjetaPelicula = document.createElement("div")
        tarjetaPelicula.classList.add("pelicula")
        tarjetaPelicula.id = `tarjeta${pelicula.id}`
        tarjetaPelicula.innerHTML = `
            <h4>${pelicula.nombre}</h4>
            <img src=${pelicula.imgUrl}></img>
            <p>$${pelicula.precio}</p>
            <button type="button" class="btn btn-info" id=${pelicula.id}>Agregar</button>
        `
        contenedorPeliculas.append(tarjetaPelicula)
        let botonAgre = document.getElementById(pelicula.id)
        botonAgre.onclick = AgregarProCarro
    })
}

function renderizarCarroCompra(peliculasCarroCompra) {
    totalCompra = peliculasCarroCompra.reduce((acc, peli) => acc += peli.precio, 0)
    contenedorCarroCompra.innerText = ""
    peliculasCarroCompra.forEach(pelicula => {
        let tarjetaPelicula = document.createElement("div")
        tarjetaPelicula.classList.add("col-12")
        tarjetaPelicula.classList.add("itemCarroCompra")
        tarjetaPelicula.innerHTML += `
            <h5>${pelicula.nombre} $${pelicula.precio}</h5>
            <button type="button" class="btn btn-danger" onClick=eliminarPelicula(eliminar${pelicula.id}) id=eliminar${pelicula.id}>X</button>
        `
        contenedorCarroCompra.appendChild(tarjetaPelicula)
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

function eliminarPelicula(e){

    let id = e.id.substring(8)
    let indice = carroCompra.findIndex(pelicula => pelicula.id === Number(id))
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