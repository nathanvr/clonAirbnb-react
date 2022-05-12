import React, { useState } from "react";
import {Link, useLocation} from "react-router-dom";
import {FaTimes} from 'react-icons/fa'
import {BsThreeDotsVertical} from 'react-icons/bs'
import Logocut from '../images/Vector.png';


const Navbar = () =>{
    const location= useLocation();
    console.log('Location', location);

    const [show, setShow] = useState(false);


    return (
    <div className={location.pathname === "/" ? 'navbar navbar-home': 'navbar navbar-default'}>
        <div className="logo">
        <Link to="/"><img src={Logocut} alt="logo"></img></Link>
        </div>
        <ul className="nav-menu" id={show ? "hidden" : ""}>
            <li className="nav-item"><Link to="#">Français (FR)</Link></li>
            <li className="nav-item"><Link to="#">EUR </Link></li>
            <li className="nav-item"><Link to="/anfitrion">Conviértete en un anfitrión</Link></li>
            <li className="nav-item"><Link to="/experiencia">Crea tu experiencia</Link></li>
            <li className="nav-item"><Link to="#">Ayuda</Link></li>
            <li className="nav-item"><Link to="#">Registro</Link></li>
            <li className="nav-item"><Link to="#">Acceso</Link></li>
        <button className="close"><FaTimes></FaTimes></button>
        </ul>
        <button className="open" onClick={()=> setShow(!show)}><BsThreeDotsVertical></BsThreeDotsVertical></button>
    </div>
    )
}

export default Navbar;
