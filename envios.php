<?php
$datos = json_decode(file_get_contents("php://input"));
// Aquí podemos procesar los datos
$nombre = $datos->nombre;
$celular = $datos->celular;
$correo = $datos->correo;
$mensaje = $datos->mensaje;

file_put_contents("datos.txt", "Nombre: $nombre, Celular: $celular, Correo: $correo, Mensaje: $mensaje\n", FILE_APPEND);
echo json_encode("Mensaje enviado!");

?>
