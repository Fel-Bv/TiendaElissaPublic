const $contenedor_productos = document.querySelector('.container-items')
const $bienvenida = document.getElementById('bienvenida')

const productos = [
  {
    "id": 0,
    "titulo": "Tenis Converse",
    "precio": 1200,
    "imgSrc": "./static/img/converse.jpg",
    "URL": "converse1.html",

    "tipo": "bota",
    "marca": "marca-converse"
  }, {
    "id": 1,
    "titulo": "Tenis Vans",
    "precio": 1400,
    "imgSrc": "./static/img/vans.jpg",
    "URL": "vans1.html",

    "tipo": "bota",
    "marca": "marca-vans"
  }, {
    "id": 2,
    "titulo": "Tenis Converse 2",
    "precio": 1270,
    "imgSrc": "./static/img/converse2.jpg",
    "URL": "converse2.html",

    "tipo": "bota",
    "marca": "marca-converse"
  }, {
    "id": 3,
    "titulo": "Tenis Vans2",
    "precio": 1350,
    "imgSrc": "./static/img/vans2.jpg",
    "URL": "vans2.html",

    "tipo": "bota",
    "marca": "marca-vans"
  }, {
    "id": 4,
    "titulo": "Tenis Nike",
    "precio": 1800,
    "imgSrc": "./static/img/nike.jpg",
    "URL": "nike1.html",

    "tipo": "bota",
    "marca": "marca-nike"
  }, {
    "id": 5,
    "titulo": "Tenis Nike2",
    "precio": 1860,
    "imgSrc": "./static/img/nike2.jpg",
    "URL": "nike2.html",

    "tipo": "bota",
    "marca": "marca-nike"
  }
]

productos.forEach((producto) => {
  $contenedor_productos.innerHTML += `
  <div class="item" itemid="${producto.id}">
      <figure>
          <img src="${producto.imgSrc}" alt="${producto.titulo}">
      </figure>
      <div class="info-product">
          <h2>${producto.titulo}</h2>
          <p class="price">$${producto.precio}</p>
          <button onclick="añadirCarrito(${producto.id})">Añadir al carrito.</button>
          <a href="${producto.URL}"> Ver Objeto... </a>
      </div>
  </div>
  `
})


let nombre = getCookie('nombre')
if (nombre != '') {
  $bienvenida.innerHTML = `Bienvenid@, ${nombre}`
}
