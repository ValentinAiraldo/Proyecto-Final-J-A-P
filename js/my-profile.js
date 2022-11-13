function guardarUsuario(){
   let datosUsuario = [];
   let Nombre1 = document.getElementById("pri-nom");
   let Nombre2 = document.getElementById("seg-nom");
   let Apellido1 = document.getElementById("pri-ape");
   let Apellido2 = document.getElementById("seg-ape");
   let email = document.getElementById("email");
   let Contacto = document.getElementById("contacto");
   var datos = new Object();
   datos['Nombre'] = Nombre1.value;
   datos['Segundo Nombre'] = Nombre2.value;
   datos['Apellido'] = Apellido1.value;
   datos['Segundo Apellido'] = Apellido2.value;
   datos['Email'] = email.value;
   datos['Contacto'] = Contacto.value;
   datosUsuario.push(datos)
   localStorage.setItem("datos de usuario", JSON.stringify(datosUsuario));
   localStorage.setItem("Usuario", email.value)
}

function mostrarUsuario(){
    let datos = JSON.parse(localStorage.getItem("datos de usuario"));
    let Nombre = datos[0].Nombre;
    let segNombre = datos[0]['Segundo Nombre'];
    let Apellido = datos[0].Apellido;
    let segApellido = datos[0]['Segundo Apellido'];
    let Email = datos[0].Email;
    let Contacto1 = datos[0].Contacto;
    document.getElementById("pri-nom").value = Nombre;
    document.getElementById("seg-nom").value = segNombre;
    document.getElementById("pri-ape").value = Apellido;
    document.getElementById("seg-ape").value = segApellido;
    document.getElementById("email").value = Email;
    document.getElementById("contacto").value = Contacto1;
}

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
       form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
             event.preventDefault()
             event.stopPropagation()
          } else{
            guardarUsuario();
          }
          form.classList.add('was-validated')
       }, false)
    })
 })()


document.addEventListener("DOMContentLoaded", function(){
   Usuario = localStorage.getItem("Usuario");
   datos = localStorage.getItem("datos de usuario");
   if(Usuario){
    document.getElementById("email").value = Usuario;
   } 
   if (datos){
    mostrarUsuario();
   }
})
