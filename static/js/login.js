var inputs = document.getElementsByClassName('formulario__input');
for (var i =0; i < inputs.length; i++) {
    inputs [i].addEventListener('keyup', function () {
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    } );
}



const $nombre = document.getElementById('nombre')
const $login = document.getElementById('login')

$login.onsubmit = (evento) => {
    evento.preventDefault()

    setCookie('nombre', $nombre.value)
    window.location.href =  window.location.href.replace('login.html', '')
}
