import { Link } from "react-router-dom";

const SubNavbar =()=>{
    return (
        <div className="container-subnavbar">
            <ul>
                <Link to="/host/dashboard"><li>Hoy</li></Link>
                <Link to="/host/messages"><li>Mensajes</li></Link>
                <li>Calendario</li>
                <li>Info</li>
                <li>Menú</li>
            </ul>
        </div>
    )
}
export default SubNavbar;

