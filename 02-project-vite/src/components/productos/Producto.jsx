const Producto = ({ titulo, descripcion, imagen }) => {
    return(
        <div>
            <img src={imagen} alt={titulo} />
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div>
    )
}

export default Producto;