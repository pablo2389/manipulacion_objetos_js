"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá utilizar los datos en formato JSON disponible
    en "data.js" para realizar los siguientes enunciados.
/*

/* 1 - Enunciado

- Levantar los datos data.js parseando el JSON, generando
una array de personas.
- Con el array anterior utilice el metodo filter para generar
un array de personas mayores o igual a 18 años.
- Imprimir en consola el array resultante.

*/
 /* const personasJSON = `[
    {"nombre": "Max", "edad": 20},
    {"nombre": "Javascript", "edad": 28},
    {"nombre": "Emma", "edad": 15},
    {"nombre": "React", "edad": 9}
]`*/
let personas =JSON.parse(personasJSON);
let mayoresDeEdad = personas.filter(persona => persona.edad >=18);
let menoresDeEdad =personas.filter(persona => persona.edad< 18);
console.log(mayoresDeEdad);
console.log(menoresDeEdad);
/* 2 - Enunciado

- Con el array de personas filtradas (resultado del enunciado anterior)
utilice le método forEach para en cada iteración con cada persona
renderizar el nombre y edad de esa persona en el HTML.
- Agregue al HTML los elementos que crea necesario e utilice los
mecanismos que prefiera para agregar por cada persona el nombre y edad
en el HTML (es decir, generar el contenido de forma dinámica).

*/
// JavaScript (en un archivo separado llamado 'script.js')

// Espera hasta que el contenido del DOM esté completamente cargado
/*
document.addEventListener('DOMContentLoaded', (event) => {
    let data = [
      { nombre: "Max", edad: 20 },
      { nombre: "Javascript", edad: 28 },
      { nombre: "Emma", edad: 15 },
      { nombre: "React", edad: 9 }
    ];
  
    document.getElementById('filtrarBtn').addEventListener('click', function() {
      let edad = document.getElementById('edadInput').value;
      document.getElementById('result').textContent = 'Edad ingresada: ' + edad;
  
      let mayoresDeEdad = data.filter(function(persona) {
        return persona.edad >= edad;
      });
  
      mayoresDeEdad.forEach(persona => {
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
  
        h2.textContent = persona.nombre;
        p.textContent = 'edad: ' + persona.edad;
        h2.addEventListener("click", () => {
          alert("hiciste clic en el nombre de " + persona.nombre);
        });
  
        div.appendChild(h2);
        div.appendChild(p);
  
        div.style.backgroundColor = "yellow";
        div.style.color = "red";
        div.style.fontSize = "30px"; 
        div.style.padding = "10px"; 
        div.style.marginBottom = "20px"; 
        div.style.textAlign = "center";
        div.style.border = "2px solid black";
  
        div.addEventListener("click", () => {
          if (div.style.background.includes("linear-gradient")) {
            div.style.background = "black";
            div.style.color = "blue";
          } else {
            div.style.background = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
            div.style.color = "white";
          }
        });
  
        document.body.appendChild(div);
      });
    });
  });  
  


/* 3 - BONUS TRACK

- Si misión, en caso que decida aceptarla, es que la edad a filtrar
en el primer enunciado no sea un valor escrito en este script, sino
que sea un valor que se toma del HTML (un input).
- Que toda la acción de filtrado (enunciado 1) y renderizado (enunciado 2)
se dispare al presionar un botón en el HTML que usted agregue.

*/
/*
document.getElementById('filtrarBtn').addEventListener('click', function() {
    let edad = document.getElementById('edadInput').value;}); 
    */


    document.addEventListener('DOMContentLoaded',() =>{
      const data = [
        { nombre:"max",edad: 20},
        { nombre: "Javascript", edad: 28 },
        { nombre: "Emma", edad: 15 },
        { nombre: "React", edad: 9 },
      ];
      const filtrarBtn = document.getElementById('filtrarBtn');
      const edadInput = document.getElementById('edadInput');
      const result = document.getElementById('result');
      const container = document.getElementById('container');
      const body = document.body;
      filtrarBtn.addEventListener('click', () =>{
        const edad = parseInt(edadInput.value);

        result.textContent = `Edad ingresada:${edad}`;
        
        filtrarBtn.style.backgroundColor = "yellow";
        result.style.color = "green";
        result.style.padding = "10px"; 
        result.style.border = "2px solid black";
        result.style.fontSize = "24px";
        result.style.textAlign = "center";
        result.style.background ="black"
        result.style.textAlign = "center";
        filtrarBtn.style.padding = "10px 20px";
        filtrarBtn.style.border = "none";
        body.style.backgroundColor = "orange";
        container.style.overflowY = "scroll";
        const mayoresDeEdad = data.filter(persona => persona.edad >= edad);
      })
    })  
      