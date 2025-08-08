import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Perfil = () => {

    const usuario = useContext(UserContext);

    return(
        <>
            <h1>Perfil de { usuario.name }</h1>
            <p>Registrado desde: { usuario.registered }</p>
        </>
    )
}

export default Perfil;