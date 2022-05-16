import React from "react";



const ReseñaReserva = (props) =>{
    const {cliente, fecha, comentario,src }= props;
    return(
        <div className="reseña-container">
            <div className="info-cliente">
                <img loading="lazy" src={src} alt=""></img>
                    <div className="nombre">
                        <h2>{cliente}</h2>
                        <p>{fecha}</p>
                    </div>
                </div>
            <p>{comentario}</p>
        </div>
    )
}
export default ReseñaReserva;
