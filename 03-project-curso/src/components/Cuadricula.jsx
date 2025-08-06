import { useEffect, useState } from "react";
import axios from "axios";
import Articulo from "./articulo/articulo";
import "./Cuadricula.css"

function Cuadricula() {
    
    const API_URL = import.meta.env.VITE_API_URL;

    const[articulos, setArticulos] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}posts`)
            .then((data) => {
                // console.log(data.data);
                setArticulos(data.data)
            })
            .catch(() => {
                console.error("Fallo en la petición");
            })
    }, []);// Se va ejecutar una sóla vez

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
