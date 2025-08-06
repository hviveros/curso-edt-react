import { Link } from "react-router-dom";
import "./articulo.css"

const articulo = ({id, title, userId }) => {
    return(
        <div key={id} className="articulo">
            <h2>{title}</h2>
            <div className="info">
                <p><span className="label">Id:</span>{id}</p>
                <p><span className="label">Id Usuario:</span> {userId}</p>
            </div>
            <Link to={`/articulos/${id}`}>Ver detalles</Link>
        </div>
    )
}

export default articulo;