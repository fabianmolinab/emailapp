import './css/custom.css';
import './css/materialize.min.css';
import './js/materialize.min.js'


// Variables
    const email = document.getElementById('email')
    const asunto = document.getElementById('asunto')
    const mensaje = document.getElementById('mensaje')
    const btnEnviar = document.getElementById('enviar')
    const resetBtn = document.getElementById('resetBtn')
    const formulario = document.getElementById('enviar-mail')
//Eventos

function eventListeners() {
    //Inicio de la aplicación y desabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp)

    //Campos del formulario
    email.addEventListener('blur', validarCampo)
    asunto.addEventListener('blur',validarCampo)
    mensaje.addEventListener('blur', validarCampo)

    //Boton de enviar en el submit
    btnEnviar.addEventListener('click',enviarEmail)

    //Boton de reset
    resetBtn.addEventListener('click',reset)

}


//Llamados

eventListeners()



//Funciones

function inicioApp() {
    // Desabilitar el envio

    btnEnviar.disabled = true
}

function validarCampo() {
    
    //Valida la longitud del texto del campo actual 
    validarLongitud(this)

    //Validar el email 

    if(this.type === 'email'){
        validarMail(this)
    }

    //Valida que no este vacio y que no tenga errores
    let errores = document.querySelectorAll('.error')
    
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {

        if(errores.length === 0){
            btnEnviar.disabled = false
        }
    }
}

// Cuando se envia el correo

function enviarEmail(e) {
    e.preventDefault()
    
    //Spinner al presionar Enviar
    const spinnerGif = document.querySelector('#spinner')
    spinnerGif.style.display = 'block'

    // Gif que envia email
    const enviado = document.createElement('img')
    enviado.src = 'img/mail.gif'
    enviado.style.display = 'block'

    //Ocultar Spinner y mostrar gif de enviado

    setTimeout(function(){
        spinnerGif.style.display = 'none'

        document.querySelector('#loaders').appendChild(enviado)
    },5000)

    setTimeout(function(){
        enviado.remove()

        formulario.reset()
    },8000)

}

// Verifica la longitud del texto en los campos
function validarLongitud(campo) {

    if(campo.value.length >0){
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error')
    }else {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error')
    }
}

function validarMail(campo){
    
    const mensaje = campo.value
    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error')
    }else {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error')
    } 
}
// Resetear el formulario
function reset(e){
    
    formulario.reset()
    e.preventDefault
}
