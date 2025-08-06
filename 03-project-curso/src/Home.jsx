import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
            <h1>Hola, bienvenido/a a miBlog</h1>
            <p>Conoce los 100 artículos más destacados</p>
            <Link to="articulos">Ver artículos</Link>
        </>
    )
}

export default Home;