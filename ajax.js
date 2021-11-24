const $nombre = document.querySelector("#nombre"), 
    $celular = document.querySelector("#celular"),// los 3 input
    $correo = document.querySelector("#correo"),
    $mensaje = document.querySelector("#mensaje"),
    $btnEnviar = document.querySelector("#botonSubmit"), // El botón que envía el formulario
    $respuesta = document.querySelector("#msjEnviado"); // el div que muestra mensajes

// Agregar listener al botón
$btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
	verificar();

	const datos = {
        nombre: $nombre.value,
        celular: $celular.value,
        correo: $correo.value,
        mensaje: $mensaje.value,
        
    };
    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("pruebas1.php", {
            method: "POST", // Enviar por POST
            body: datosCodificados, // En el cuerpo van los datos
        })
        .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
        .then(respuestaDecodificada => {
            // Aquí ya tenemos la respuesta lista para ser procesada
            $respuesta.textContent = respuestaDecodificada;
        });
});
