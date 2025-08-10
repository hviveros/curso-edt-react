import { NavLink, useNavigate } from "react-router-dom";
import "./menu.css"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Menu = () => {

    const navigation = useNavigate();
    const usuario = useContext(UserContext);

    return(
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/articulos">Lista de artículos</NavLink></li>
                <li><NavLink to="/perfil">Perfil de { usuario.name } </NavLink></li>
                <li><a onClick={() => {
                    localStorage.removeItem("tokenMiBlog")
                    navigation("/login")
                }} href="#" >Cerrar sesión </a></li>
            </ul>
        </nav>
    )
}
export default Menu;