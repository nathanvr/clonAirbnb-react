import React from "react";
import InfoAnfitrionTitulo from "../components/InfoAnfitrionTitulo";
import anfitrion1 from '../images/anfitriones/anfitrion1.jpg'

const ReservaRoom =()=>{
    return (
    <div className="info">
        <InfoAnfitrionTitulo tiporeserva="Cabaña entera" anfitrion="Amy and Bryant" maxhuespedes="10" numrooms="3" numbeds="6" numbath="2" src={anfitrion1} > </InfoAnfitrionTitulo>
    </div>
    )
}

export default ReservaRoom;
