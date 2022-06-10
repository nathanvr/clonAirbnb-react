import React, { useState } from "react";
import Tabs from "../components/host/Tabs";

import FormHost from "../components/host/FormHost";


const HostDashboard =()=>{
    return(
        <div className="dashboard-container">
            <section className="hero">
                <div>
                    <h2>Hoy</h2>
                    <p>Empieza a agregar anuncios</p>
                </div>
                <div><button><FormHost sitio="Haz un anuncio"/></button></div>
            </section>
            <div className="container-bookings">
                <h2>Tus reservaciones</h2>
                    <Tabs></Tabs>
            </div>
            <div className="container-bookings">
                <h2>Tus sitios</h2>
                    <div className="content-tabs1">
                        <p>¡Muy bien! Por ahora, está todo listo.</p>
                    </div>
            </div>
        </div>

    )
}

export default HostDashboard;
