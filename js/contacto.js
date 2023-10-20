const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("email");
const telefono = document.getElementById("telefono");
const opciones = document.getElementById("opciones");
const mensaje = document.getElementById("message");
const btn = document.getElementById('btn');
const peso = document.getElementById("peso");
const ciudad = document.getElementById("ciudad");
const valor = document.getElementById("valor");
const size = document.getElementById("size");
const menu = document.getElementById("menu");
const contenido = document.getElementById("contenido");
const btnForm = document.getElementById("btn-form");


const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const sugerencia = document.querySelectorAll("formulario__input-error");

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
  apellido: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
  ciudad: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  peso: /^[\d+(\.\d+)?]{1,4}$/, // 1 a 4 numeros.
  valor: /^\d{1,4}$/, // 1 a 4 numeros.
  size: /^[\d+(\.\d+)?]+x[\d+(\.\d+)?]+x[\d+(\.\d+)?]{1,}$/, // 11 a 14 numeros. 
  telefono: /^\d{11,14}$/ // 11 a 14 numeros.
}

const validarFormulario = (e) => {
  switch (e.target.name) {

    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;

    case "apellido":
      validarCampo(expresiones.apellido, e.target, "apellido");
      break;

    case "ciudad":
      validarCampo(expresiones.ciudad, e.target, "ciudad");
      break;

    case "peso":
      validarCampo(expresiones.peso, e.target, "peso");
      break;

    case "email":
      validarCampo(expresiones.correo, e.target, "email");
      break;

    case "telefono":
      validarCampo(expresiones.telefono, e.target, "telefono");
      break;

    case "valor":
      validarCampo(expresiones.valor, e.target, "valor");
      break;

    case "size":
      validarCampo(expresiones.size, e.target, "size");
      break;


  }

};


const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`form__content-${campo}`).classList.remove("form_content-incorrecto");
    document.getElementById(`form__content-${campo}`).classList.add("form_content-correcto");
    document.querySelector(`#form__content-${campo} i`).classList.remove("fa-circle-check");
    document.querySelector(`#form__content-${campo} i`).classList.add("fa-circle-xmark");
    document.querySelector(`#form__content-${campo} p`).classList.remove("formulario__input-error-incorrecto");
    document.querySelector(`#form__content-${campo} p`).classList.add("formulario__input-error-correcto");


  } else {
    document.getElementById(`form__content-${campo}`).classList.add("form_content-incorrecto");
    document.getElementById(`form__content-${campo}`).classList.remove("form_content-correcto");
    document.querySelector(`#form__content-${campo} i`).classList.add("fa-circle-xmark");
    document.querySelector(`#form__content-${campo} i`).classList.remove("fa-circle-check");
    document.querySelector(`#form__content-${campo} p`).classList.add("formulario__input-error-incorrecto");
    document.querySelector(`#form__content-${campo} p`).classList.remove("formulario__input-error-correcto");


  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});



function validarContacto() {

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

   else if (mensaje.value === "") {
    Swal.fire({
      icon: 'error',
      text: 'Por favor ingresa un mensaje'
    });
  }


}

function validarForm() {

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

  else if (menu.value === "") {
    Swal.fire({
      icon: 'error',
      text: 'selecciona una modalidad de envio'
    });
  }

 
  else if (ciudad.value === "") {
    Swal.fire({
      icon: 'error',
      text: 'Por favor ingresa la ciudad de destino'
    });
  }

  else if (peso.value === "") {
    Swal.fire({
      icon: 'error',
      text: 'Por favor ingrese un peso'
    });
  }
 

/*   else if (contenido.value !== "mercancia" && contenido.value !== "documento") {
    Swal.fire({
      icon: 'error',
      text: 'selecciona el tipo de contenido'
    });
  } */

 /*  else if (size.value === "") {
    Swal.fire({
      icon: 'error',
      text: 'ingresa el tamano en cm AnchoxAltoxProfundidad'
    });
  }

  else if (valor.value === "") {
    Swal.fire({
      icon: 'error',
      text: 'por favor ingresa un valor'
    });
  } */

  else if (mensaje.value === "") {
    Swal.fire({
      icon: 'error',
      text: 'Por favor ingresa un mensaje'
    });
  }


}


//evento

document.addEventListener("click", (e) => {
  if (e.target === btnForm) {
    e.preventDefault();
    validarForm();
  }


});
document.addEventListener("click", (e) => {
  if (e.target === btn) {
    e.preventDefault();
    validarContacto();
  }


});


document.addEventListener("change", (e) => {
  if (e.target === contenido) {

    mostrar();
  }


});


function mostrar() {
  /* let select = document.getElementById("contenido"); */
  let size = document.getElementById("form__content-size");
  let valor = document.getElementById("form__content-valor");


  if (contenido.value === "mercancia") {
    document.getElementById("form__content-size").classList.remove("form__content-size");
    document.getElementById("form__content-size").classList.add("form__content-size-active");
    document.getElementById("form__content-valor").classList.remove("form__content-valor");
    document.getElementById("form__content-valor").classList.add("form__content-valor-active");

  } else {
    document.getElementById("form__content-size").classList.add("form__content-size");
    document.getElementById("form__content-size").classList.remove("form__content-size-active");
    document.getElementById("form__content-valor").classList.add("form__content-valor");
    document.getElementById("form__content-valor").classList.remove("form__content-valor-active");

  };

};

