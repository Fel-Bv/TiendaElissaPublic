const $contenedor_capa_formulario = document.getElementById('contenedor-capa-formulario')
const $saltar_formulario = document.getElementById('saltar-formulario')
const $enviar_formulario = document.getElementById('enviar-formulario')
const $preferencias = document.getElementById('preferencias')

const $formulario = document.getElementById('formulario-preferencias')
const $marcas = $formulario.querySelectorAll('input[type="checkbox"]')
const $calzado = document.getElementById('tipo-calzado')
const $precio = document.getElementById('precio')

function cambiarVisibilidadFormulario() {
    $contenedor_capa_formulario.classList.toggle('invisible')
}

let mostrarFormulario = getCookie('mostrarFormulario')
mostrarFormulario === ''? mostrarFormulario = true: mostrarFormulario = mostrarFormulario

if (mostrarFormulario !== 'false') {
    cambiarVisibilidadFormulario()
}

/* EVENTOS */
$saltar_formulario.onclick = (evento) => {
    cambiarVisibilidadFormulario()
    setCookie('mostrarFormulario', 'false')
}

$formulario.onsubmit = (evento) => {
    evento.preventDefault()

    cambiarVisibilidadFormulario()
    setCookie('mostrarFormulario', 'false')


    let calzado = $calzado.value
    let marcas_preferidas = []
    let precio = $precio.value * 1000

    $marcas.forEach((checkbox) => {
        if (checkbox.checked) {
            marcas_preferidas.push(checkbox.id)
        }
    })
    if ($marcas === []) {
        $marcas = [
            'marca-nike',
            'marca-adidas',
            'marca-converse',
            'marca-vans',
        ]
    }


    let productos_recomendados = []
    productos.forEach((producto) => {
        if (
            producto.tipo == calzado &&
            marcas_preferidas.includes(producto.marca) &&
            producto.precio >= precio && producto.precio <= precio + 1000
        ) {
            productos_recomendados.push(producto)
        }
    })


    document.querySelector('.mensaje-recomendaciones').innerHTML = `
    <h3>Te recomendamos los siguienes productos:</h3>
    <a href="./index.html">Ver Catálogo Completo</a>
    `
    $contenedor_productos.innerHTML = ''
    productos_recomendados.forEach((producto) => {
        $contenedor_productos.innerHTML += `
        <div class="item" itemid="${producto.id}}">
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
}

$preferencias.onclick = (event) => {
    cambiarVisibilidadFormulario()
    setCookie('mostrarFormulario', 'true')
}
