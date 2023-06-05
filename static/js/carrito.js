const $contenedor_carrito = document.querySelector('.container-cart-products')
const $total_carrito = document.getElementById('total-pagar')
const $btn_carrito = document.querySelector('.container-icon svg')
let carrito = []
try {
  carrito = JSON.parse(getCookie('carrito'))
} catch (error) {}
let total = 0


carrito.forEach((producto) => {
  total += producto.precio
  renderizarProducto(producto)
})


function renderizarProducto(producto) {
  $contenedor_carrito.innerHTML = `
<div class="cart-product" itemid="${producto.id}">
  <div class="info-cart-product">
    <span class="cantidad-producto-carrito">1</span>
    <p class="titulo-producto-carrito">${producto.titulo}</p>
    <span class="precio-producto-carrito">\$${producto.precio}</span>
  </div>
  <svg onclick="eliminarCarrito(${producto.id})" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</div>
  ` + $contenedor_carrito.innerHTML

  $total_carrito.innerHTML = `\$${total}`
}

function actualizarCookiesCarrito() {
  setCookie('carrito', JSON.stringify(carrito))
  setCookie('total', total)
}


function añadirCarrito(itemId) {
  let producto = productos.find((item) => item.id == itemId)
  carrito.push(producto)
  total += producto.precio

  actualizarCookiesCarrito()
  renderizarProducto(producto)
}

function eliminarCarrito(itemId) {
  let nuevo_carrito = []
  let nuevo_total = 0
  carrito.forEach((producto) => {
    if (producto.id != itemId) {
      nuevo_carrito.push(producto)
      nuevo_total += producto.precio
    }
  })

  carrito = nuevo_carrito
  total = nuevo_total

  actualizarCookiesCarrito()

  $contenedor_carrito.querySelectorAll('.cart-product').forEach((producto) => {
    if (producto.getAttribute('itemId') == itemId) {
      producto.remove()
    }
  })
}

$btn_carrito.addEventListener('click', () => {
    $contenedor_carrito.classList.toggle('hidden-cart')
    $total_carrito.innerHTML = `\$${total}`
}, false)
