const form = document.getElementById('formulario')
const btnEnviar = document.getElementById("botonSubmit")
const respuesta = document.getElementById("msjEnviado")


btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
	verificar();
	
	let formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.open("POST", form.action, true);
	xhr.onload = function(e) {
		let response = JSON.parse(xhr.response);
		if (xhr.status === 200) {
		respuesta.textContent = "Mensaje enviado!";
		} else {
		respuesta.textContent = "Hubo un error: " + response.error;
		}
	};
	xhr.send(formData); 
});
	
