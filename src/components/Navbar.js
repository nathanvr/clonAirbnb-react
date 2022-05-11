import React from "react";
import {Link} from "react-router-dom";
import Logocut from '../images/Vector.png';


const Navbar = () =>{
    return (
    <div className="navbar">
        <div className="logo">
        <Link to="/"><img src={Logocut} alt="logo"></img></Link>
        </div>
        <ul className="nav-menu">
            <li className="nav-item"><Link to="#">Français (FR)</Link></li>
            <li className="nav-item"><Link to="#">EUR </Link></li>
            <li className="nav-item"><Link to="/anfitrion">Conviértete en un anfitrión</Link></li>
            <li className="nav-item"><Link to="/experiencia">Crea tu experiencia</Link></li>
            <li className="nav-item"><Link to="#">Ayuda</Link></li>
            <li className="nav-item"><Link to="#">Registro</Link></li>
            <li className="nav-item"><Link to="#">Acceso</Link></li>
        </ul>
    </div>
    )
}

export default Navbar;
