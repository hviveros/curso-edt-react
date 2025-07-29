import { Link } from "react-router-dom";
import "./usuario.css"

const Usuario = ({id, firstName, lastName, company, gender, address, lat, email }) => {
    return(
        <div key={id} className="usuario">
            <h2>{firstName} {lastName}</h2>
            <div className="info">
                <p>{company}</p>
                <p>
                    <span className={ gender === "male" ? "male" : "female"}>
                    {gender}
                    </span>
                </p>
                <p><span className="label">City:</span>{address}</p>
                <p><span className="label">Lat:</span> {parseFloat(lat).toFixed(2)}</p>
                <span className="label">{email}</span>
            </div>
            <Link to={`/usuarios/${id}`}>Ver detalles</Link>
        </div>
    )
}

export default Usuario;