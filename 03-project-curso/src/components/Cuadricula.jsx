import usePetition from "../hooks/usePetition";
import Articulo from "./articulo/articulo";
import "./Cuadricula.css"

function Cuadricula() {

    const [articulos, cargandoArticulos] = usePetition(`posts`);

    // Loader
    if(!articulos) return (<span>Cargando...</span>);

    return(
        <div className="app-container">
            <h1>Lista de articulos</h1>
            <div className="articulo-container">  
                {
                articulos.map(({id, title, userId}) => (
                    <Articulo 
                    key={id} 
                    title={title} 
                    userId={userId} 
                    id={id} 
                    />
                ))
                }
            </div>
        </div>
    )
}

export default Cuadricula;
