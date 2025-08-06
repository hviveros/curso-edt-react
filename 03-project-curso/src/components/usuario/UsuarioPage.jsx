import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UsuarioPage = () => {

    const params = useParams()

    const API_URL = import.meta.env.VITE_API_URL;
    
    const[usuario, setUsuario] = useState({});

    useEffect(() => {
        axios.get(`${API_URL}user/${params.id}`)
        .then((data) => {
                console.log(data);
                setUsuario(data.data)
            })
            .catch(() => {
                console.error("Fallo en la petición");
            })
    }, []);// Se va ejecutar una sóla vez

    return(
        <>
            <h1>Soy el usuario { usuario.firstName } { usuario.maidenName }</h1>
            <div className="info">
                <p> <span className="label">Email</span> { usuario.email }</p>
                <p> <span className="label">Phone</span> { usuario.phone }</p>
            </div>


            <h2>Empresa</h2>
            {/* Para ver si la información está llegando*/}
            <p>{JSON.stringify(usuario.company)}</p>
        </>

    )
}

export default UsuarioPage;