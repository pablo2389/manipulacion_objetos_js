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

/*Enunciado

- Al comenzar el script se debe verificar si en memoria se encuentran
almacenados los datos de "usuario" y "email".
- En caso de que hubiera datos almacenados se debe completar los elementos
"usuarioLogeado" y "emailLogeado".
- Se debe ocultar la sección "login" (puede usar la clase CSS hidden ya creada)
y deberá revelar la sección "logout" (quitar la clase hidden).
*/{
    
    let usuario = document.getElementById("usuario");
    let email = document.getElementById("email");
    let boton = document.getElementById("btnIngresar");
    let usuarioLogeado = document.getElementById("usuarioLogeado");
    let emailLogeado = document.getElementById("emailLogeado");
    let login = document.getElementById("login");
    let logout = document.getElementById("logout");
    let salida = document.getElementById("btnSalir");

    
    boton.addEventListener("click", () => {
        
        localStorage.setItem("usuario", usuario.value);
        localStorage.setItem("email", email.value);

        
        usuarioLogeado.textContent = localStorage.getItem("usuario");
        emailLogeado.textContent = localStorage.getItem("email");

        
        login.classList.add("hidden");
        logout.classList.remove("hidden");
    });

    
    salida.addEventListener("click", () => {
        
        localStorage.removeItem("usuario");
        localStorage.removeItem("email");

        
        usuarioLogeado.textContent = '';
        emailLogeado.textContent = '';

        
        login.classList.remove("hidden");
        logout.classList.add("hidden");

        
        window.location.reload();
    });
};




/* 3 - Enunciado

- Debera capturar el evento "onclick" del boton "Salir". Cuando este
botón sea presionado deberá borrar de memoria las variables de este programa.
- Luego deberá refrescar la página (desde javascript, con window.location.reload()) y al
volverse a cargar debería aparecer nuevamente la sección de bienvenida
ya que no debería haber más datos en memoria cargados.

*/
   let botonSalir = document.getElementById("btnSalir");


botonSalir.addEventListener("click", () =>{

    localStorage.removeItem("usuario");
    localStorage.removeItem("email");
 usuarioLogeado ='';
 emailLogeado =``;

    window.location.reload();
});
