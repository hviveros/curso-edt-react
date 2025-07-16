import { useEffect, useState } from "react";
import axios from "axios";

function App() {

    const API_URL = import.meta.env.VITE_API_URL;

    const[usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}users`) // o https://jsonplaceholder.typicode.com/users
            .then((resp) => resp.json())
            .then((data) => setUsuarios(data.users))
            .catch(() => {
                console.error("Fallo en la petición");
            })
    }, []);// Se va ejecutar una sóla vez

    // Loader
    if(!usuarios) return (<span>Cargando...</span>);

    return (
        <>
            <h1>Lista de usuarios</h1>
            <ol>
                {
                    usuarios.map(({id, firstName, lastName, email}) => (
                    <li key={id}>
                        <strong>{firstName} {lastName}</strong> - {email}
                    </li>
                ))
            }
            </ol>
        </>
    );
}

export default App;
