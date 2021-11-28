let submit = document.getElementById("botonSubmit")
let textoMsj =document.getElementById("msjEnviado")
let nombre = document.getElementById("nombre")
let email = document.getElementById("correo")
let mensaje = document.getElementById("mensaje")
let faltaNom = document.getElementById("faltaNom")
let faltaEm = document.getElementById("faltaEm")
let faltaMen = document.getElementById("faltaMen")


nombre.addEventListener('input', valNombre) 

function valNombre() {
    let datoNombre=nombre.value

    if (datoNombre == '' || datoNombre == null) {
        faltaNom.classList.remove("is-hidden")
    }
    else {
        faltaNom.classList.add("is-hidden")
    }

}

email.addEventListener('input', valEmail) 

function valEmail() {
        
    if ((email.value) == '' || (email.value) == null) {
        faltaEm.classList.remove("is-hidden")
    }
    else {
        faltaEm.classList.add("is-hidden")
    }
}

mensaje.addEventListener('input', valMsj) 

function valMsj() {
    let mensajeEscrito= mensaje.value

    if (mensajeEscrito == '' || mensajeEscrito == null) {
        faltaMen.classList.remove("is-hidden")
    }
    else {
        faltaMen.classList.add("is-hidden")
    }
}


function verificar(){
    let pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let datoMail = pattern.test(email.value)
    let datoNombre=nombre.value
    let mensajeEscrito= mensaje.value

    if (datoNombre == '' || datoNombre == null){
        valNombre()
        evt.preventDefault();
    }
    else if (!datoMail){
        faltaEm.classList.remove("is-hidden")
        evt.preventDefault();    
    }       
    else if (mensajeEscrito == '' || mensajeEscrito == null){
        valMsj()
        evt.preventDefault();
    }       
    else {
        textoMsj.classList.remove("is-hidden")
        submit.style.display="none"

        setTimeout(function(){
           window.location.reload();
        },1000);  
    }
}

