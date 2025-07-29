import { useParams } from "react-router-dom";

const UsuarioPage = () => {

    const params = useParams()

    return(
        <h1>Soy el usuario { params.id }</h1>
    )
}

export default UsuarioPage;