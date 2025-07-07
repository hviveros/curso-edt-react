//Indicar que las funciones serán exportables desde otros archivos
export function createElement(elemento, atributos = {}, hijos = []){
    const elem = document.createElement(elemento);
    let keys = Object.keys(atributos); // Obtiene todas las llaves y guarda en keys como un array
    keys.map(k => elem.setAttribute(k, atributos[k])) // Recorrer cada elemento y se le agrega su valor (con setAttribute)

    // Renderizando el parámetro hijos[]
    hijos.map(h => {
        if( typeof h === "string" ){
            elem.innerHTML += h;
            return;
        }
        elem.appendChild(h);
    })

    return elem; // retorna el elemento
}

// funcion para insertar los elementos en el body
export function render( contenido, elementoRaiz ){
    let elemRaiz = document.getElementById(elementoRaiz);
    elemRaiz.appendChild(contenido);
}