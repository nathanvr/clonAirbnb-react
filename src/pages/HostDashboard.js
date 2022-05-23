import React from "react";
import SubNavbar from "../components/host/SubNavbar";
import Tabs from "../components/host/Tabs";
import { Link } from "react-router-dom";


const HostDashboard =()=>{
    return(
        <div className="dashboard-container">
            <SubNavbar></SubNavbar>
            <section className="hero">
                <div>
                    <h2>Hoy</h2>
                    <p>¡Pronto vas a ser anfitrión! Solo tienes que agregar tu anuncio.</p>
                </div>
                <div><button><Link to="/host/create-listing">Haz tu anuncio</Link></button></div>
            </section>
            <div className="container-bookings">
            <h2>Tus reservaciones</h2>
                <Tabs></Tabs>
            </div>
            <div className="container-steps">
            <h2>Próximos pasos para ti</h2>
            <p>¡Muy bien! Por ahora, está todo listo.</p>
            </div>
        </div>

    )
}

export default HostDashboard;
