const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("email");
const telefono = document.getElementById("telefono");
const opciones = document.getElementById("opciones");
const mensaje = document.getElementById("message");
const btn = document.getElementById('btn');

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
  apellido: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{11,14}$/ // 11 a 14 numeros.
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      if (expresiones.nombre.test(e.target.value)){
        document.getElementById("form__content-nombre").classList.remove("form_content-incorrecto");
        document.getElementById("form__content-nombre").classList.add("form_content-correcto");
        document.querySelector("#form__content-nombre i").classList.remove("fa-circle-check");
        document.querySelector("#form__content-nombre i").classList.add("fa-circle-xmark");
        

      } else{
        document.getElementById("form__content-nombre").classList.add("form_content-incorrecto");
        document.getElementById("form__content-nombre").classList.remove("form_content-correcto");
        document.querySelector("#form__content-nombre i").classList.add("fa-circle-xmark");
        document.querySelector("#form__content-nombre i").classList.remove("fa-circle-check"); 

      }

        break;
  }

}


inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
})

function validar() {

  if (nombre.value === "") {
    Swal.fire({
      icon: 'error',
      text: 'Nombre no puede estar vacio'
    });
  }

  else if (apellido.value === "") {
    Swal.fire({
      icon: 'error',
      text: 'Apellido no puede estar vacio'
    });
  }
  else if (correo.value === "") {
    Swal.fire({
      icon: 'error',
      text: 'Ingresa un Correo Eectronico'
    });
  }
  else if (telefono.value === "") {
    Swal.fire({
      icon: 'error',
      text: 'Ingesa un numero de telefono'
    });
  }

  else if (opciones.value === "") {
    Swal.fire({
      icon: 'error',
      text: 'selecciona una opcion de contacto'
    });
  }
  else if (mensaje.value === "")
    Swal.fire({
      icon: 'error',
      text: 'Por favor ingresa un mensaje'
    });

}


//evento
document.addEventListener("click", (e) => {
  if (e.target === btn) {
    e.preventDefault();
    validar();
  }


});