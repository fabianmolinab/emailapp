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