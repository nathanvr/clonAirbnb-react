import React from "react";
import {MdOutlineBed} from "react-icons/md"


const InfoHabitaciones = (props) =>{
    const {titulohabitacion, descripcionhabitacion}=props;
    return(
        <div className="info_general_habitaciones">
            <MdOutlineBed></MdOutlineBed>
            <h3>{titulohabitacion}</h3>
            <p>{descripcionhabitacion}</p>
        </div>
    )
}

export default InfoHabitaciones;
