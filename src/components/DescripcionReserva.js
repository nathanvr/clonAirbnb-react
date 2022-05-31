import React from "react";


const DescripcionReserva = (props) =>{
    const {descripciongeneral}=props;
    return(
        <div className="info_general_descripcionreserva">
            <p>{descripciongeneral}</p>
        </div>
    )
}

export default DescripcionReserva;
