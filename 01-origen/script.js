// importamos las funciones de librería
import { createElement, render } from "./libreria.js";

// ejecutar la función para crear un elemento y asignar a una constante
const Link1 = createElement("a", {"class": "link", "href": "/inicio"}, ["Inicio"]);
const Link2 = createElement("a", {"class": "link", "href": "/nosotros"}, ["Nosotros"]);
const Link3 = createElement("a", {"class": "link", "href": "/contacto"}, ["Contacto"]);

const Li1 = createElement("li", {"class": "li"}, [Link1]);
const Li2 = createElement("li", {"class": "li"}, [Link2]);
const Li3 = createElement("li", {"class": "li"}, [Link3]);

const Ul = createElement("ul", {"class":"ul"}, [Li1, Li2, Li3]);

const Header = createElement("header", {"id": "mainHeader", "class": "main-header header"}, [Ul]);


// ejecutar la función para renderizar
render(Header, "root");