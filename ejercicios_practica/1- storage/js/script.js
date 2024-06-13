"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá realizar los siguientes enunciados todos en este
    script de javascript. Cada enunciado agrega una funcionalidad
    extra al programa.
/*

/* 1 - Enunciado

- Debera capturar el evento "onclick" del boton "Ingresar"
y leer los datos ingresados en "usuario" y "email".
- Tome esos datos y almacenelo en memoria permanente del explorador.
- Deberá completar las etiquetas <p> de id "usuarioLogeado" y "emailLogeado"
con los datos almacenados en memoria, a fin de darle la bienvenida al usuario logeado.

*/

/*   let boton = document.getElementById("btningresar");
boton.addEventListener("click", () => {
    let usuario = document.getElementById("usuario").value; 
    localStorage.setItem("uno", usuario);
    document.getElementById("usuario").value = ""; 
    let email = document.getElementById("email").value; 
    localStorage.setItem("dos", email);
    document.getElementById("email").value = ""; 
});   */
const usuarioInput = document.getElementById("usuario");
const emailInput = document.getElementById("email");
const ingresarButton = document.getElementById("btnIngresar");


ingresarButton.addEventListener("click", () => {
    const usuario = usuarioInput.value;
    const email = emailInput.value;

    
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("email", email);


    usuarioLogeado.textContent = `Bienvenido, ${usuario}!`;
    emailLogeado.textContent = `Email: ${email}`;

  
});

/* 2 - Enunciado

- Al comenzar el script se debe verificar si en memoria se encuentran
almacenados los datos de "usuario" y "email".
- En caso de que hubiera datos almacenados se debe completar los elementos
"usuarioLogeado" y "emailLogeado".
- Se debe ocultar la sección "login" (puede usar la clase CSS hidden ya creada)
y deberá revelar la sección "logout" (quitar la clase hidden).
*/
/* const botoningresar = document.getElementById("btnIngresar");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const usuarioLogeado = document.getElementById("usuariologeado");
const emailLogeado = document.getElementById("emailLogeado");

const usuarioAlmacenado = localStorage.getItem("usuario");
const emaiLAlmacenado = localStorage.getItem("email");
if(usuarioAlmacenado&& emaiLAlmacenado){
    usuarioLogeado.textContent = `¡bienvenido, ${usuarioAlmacenado}!`
    emailLogeado.textContent = `Email: ${emaiLAlmacenado}`;

    seccionLogin.classList.add("hidden");
    seccionLogout.classList.remove("hidden");
    botonIngresar.addEventListener("click", function() {
        
        const usuario = inputUsuario.value;
        const email = inputEmail.value;

        localStorage.setItem("usuario", usuario);
        localStorage.setItem("email", email);
    
  
        usuarioLogeado.textContent = `¡Bienvenido, ${usuario}!`;
        emailLogeado.textContent = `Email: ${email}`;
    
        seccionLogin.classList.add("hidden");
        seccionLogout.classList.remove("hidden");
    });

}  

/* 3 - Enunciado

- Debera capturar el evento "onclick" del boton "Salir". Cuando este
botón sea presionado deberá borrar de memoria las variables de este programa.
- Luego deberá refrescar la página (desde javascript, con window.location.reload()) y al
volverse a cargar debería aparecer nuevamente la sección de bienvenida
ya que no debería haber más datos en memoria cargados.

*/
const botonSalir = document.getElementById("btnSalir");


botonSalir.addEventListener("click", function() {

    localStorage.removeItem("usuario");
    localStorage.removeItem("email");


    window.location.reload();
});
