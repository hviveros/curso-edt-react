import "./menu.css"
import { NavLink } from "react-router-dom";

const Menu = () => {
    return(
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/articulos">Lista de artículos</NavLink></li>
            </ul>
        </nav>
    )
}
export default Menu;