
let btn = document.getElementById('btn');


function validar() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let correo = document.getElementById("mail").value;
  let telefono = document.getElementById("telefono").value;
  let opciones = document.getElementById("opciones").value;
  let expresion
  
  if (nombre === " ") {
    alert("EL cambo es obligatorio");
    return false;
  }
}