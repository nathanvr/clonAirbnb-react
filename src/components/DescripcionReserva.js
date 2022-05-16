import React from "react";


const DescripcionReserva = (props) =>{
    const {descripciongeneral, elespacio,accesohuespedesm, numpermiso}=props;
    return(
        <div className="info_general_descripcionreserva">
            <p>{descripciongeneral}</p>
            <button>Más información</button>
        </div>
    )
}

export default DescripcionReserva;
