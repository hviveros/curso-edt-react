import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
            <h1>Hola, bienvenido a UsersBusiness</h1>
            <p>Conoce los 30 usuarios más destacados de la empresa</p>
            <Link to="usuarios">Ver usuarios</Link>
        </>
    )
}

export default Home;