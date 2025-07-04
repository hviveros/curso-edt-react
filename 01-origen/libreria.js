// console.log("%cTest", "color:skyblue; font-size: 2rem");

const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
const link1 = document.createElement("li");
const anchor1 = document.createElement("a");

anchor1.innerHTML = "Inicio";

const body = document.getElementById("root");

body.appendChild(header);
header.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(link1);
link1.appendChild(anchor1);

function createElement(elemento, atributos = {}, hijos = []){
    const elem = document.createElement(elemento);
    let keys = Object.keys(atributos); // Obtiene todas las llaves y guarda en keys como un array
    keys.map(k => elem.setAttribute(k, atributos[k])) // Recorrer cada elemento y se le agrega su valor (con setAttribute)
}

// objeto atributos
// {
//     id: "cabecera",
//     class: "main header",
//     href: "/nosotros"
// }