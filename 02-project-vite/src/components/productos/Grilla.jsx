import Producto from "./Producto";

const Grilla = () => {
    return(
        <div className="main-content">
            <Producto 
                titulo="Producto 1" 
                descripcion="Breve descripción del producto 1"
                imagen="https://picsum.photos/seed/picsum/300/150"
            />
            <Producto 
                titulo="Producto 2" 
                descripcion="Breve descripción del producto 2"
                imagen="https://picsum.photos/300/150?grayscale"
            />
            <Producto 
                titulo="Producto 3" 
                descripcion="Breve descripción del producto 3"
                imagen="https://picsum.photos/300/150"
            />
        </div>
    )
}
export default Grilla;