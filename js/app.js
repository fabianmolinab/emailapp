// Variables
    const email = document.getElementById('email')
    const asunto = document.getElementById('asunto')
    const mensaje = document.getElementById('mensaje')
    const btnEnviar = document.getElementById('enviar')

//Eventos

function eventListeners() {
    //Inicio de la aplicación y desabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp)

    //Campos del formulario
    email.addEventListener('blur', validarCampo)
    asunto.addEventListener('blur',validarCampo)
    mensaje.addEventListener('blur', validarCampo)
}


//Llamados

eventListeners()



//Funciones

function inicioApp() {
    // Desabilitar el envio

    btnEnviar.disabled = true
}

function validarCampo() {
    
    //Valida la longitud del texto y que no este vacio
    
}