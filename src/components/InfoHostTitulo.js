import React from "react";

const InfoHostTitulo = (props) =>{
    const {tiporeserva, Host, maxhuespedes, numrooms, numbeds, numbath,src }= props;
    return(
        <div className="info_Host_container">
            <div className="info">
            <h2>{tiporeserva} - Anfitrión: {Host}</h2>
            <p>{maxhuespedes} huéspedes - {numrooms} habitaciones - {numbeds} camas - {numbath} baños </p>
            </div>
            <div className="imagen">
            <img loading="lazy" src={src} alt=""></img>
            </div>
        </div>
    )
}

export default InfoHostTitulo;
