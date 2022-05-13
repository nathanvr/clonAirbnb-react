import React from "react";

const InfoGeneralReseva = (props) =>{
    const {tiporeserva, anfitrion, maxhuespedes, numrooms, numbeds, numbath,src }= props;
    return(
        <div className="info_anfitrion_container">
            <div className="info">
            <h2>{tiporeserva} - Anfitrión: {anfitrion}</h2>
            <p>{maxhuespedes} huéspedes - {numrooms} habitaciones - {numbeds} camas - {numbath} baños </p>
            </div>
            <div className="imagen">
            <img loading="lazy" src={src} alt=""></img>
            </div>
        </div>
    )
}

export default InfoGeneralReseva;
