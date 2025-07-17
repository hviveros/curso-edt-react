import { useEffect, useState } from "react";
import axios from "axios";
import Usuario from "./usuario";
import "./App.css"

function App() {
    
    const API_URL = import.meta.env.VITE_API_URL;

    const[usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}users`) // o https://jsonplaceholder.typicode.com/users
            .then((data) => {
                // console.log(data);
                setUsuarios(data.data.users)
            })
            .catch(() => {
                console.error("Fallo en la petición");
            })
    }, []);// Se va ejecutar una sóla vez

    // Loader
    if(!usuarios) return (<span>Cargando...</span>);

    return(
        <div className="app-container">
            <h1>Lista de usuarios</h1>
            <div className="usuario-container">  
                {
                usuarios.map(({id, firstName, lastName, email, address, company}) => (
                    <Usuario key={id} firstName={firstName} lastName={lastName} email={email} address={address.city} company={company.department}/>
                ))
                }
            </div>
        </div>
    )
}

export default App;
