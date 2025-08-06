import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticuloPage = () => {

    const params = useParams()

    const API_URL = import.meta.env.VITE_API_URL;
    
    const[articulo, setArticulo] = useState({});

    useEffect(() => {
        axios.get(`${API_URL}posts/${params.id}`)
        .then((data) => {
                // console.log(data.data);
                setArticulo(data.data)
            })
            .catch(() => {
                console.error("Fallo en la petición");
            })
    }, []);// Se va ejecutar una sóla vez

    return(
        <>
            <h1>{ articulo.title }</h1>
            <div className="info">
                <p> <span className="label">Id:</span> { articulo.id }</p>
                <p> <span className="label">Id Usuario:</span> { articulo.userId }</p>
                <p className="articulo-body">{ articulo.body }</p>
            </div>

            <h4><span className="label">Comentarios:</span></h4>
        </>

    )
}

export default ArticuloPage;