import "./usuario.css"

const Usuario = ({id, firstName, lastName, email, address, company }) => {
    return(
        <div key={id} className="usuario">
            <h2>{firstName} {lastName}</h2>
            <div className="info">
                <p>{company}</p>
                <p>{address}</p>
                <span className="label">{email}</span>
            </div>
        </div>
    )
}

export default Usuario;