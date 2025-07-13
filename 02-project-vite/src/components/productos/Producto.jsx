import { useRef } from "react";

import "./Producto.css";

const Producto = ({ titulo, descripcion, imagen }) => {

    const miReferencia = useRef();

    const desactivarProducto = () => {
        miReferencia.current.classList.add("desactivada");
    }

    return(
        <div>
            <img ref={miReferencia} src={imagen} alt={titulo} />
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <button onClick={desactivarProducto}>Desactivar</button>
        </div>
    )
}

export default Producto;