import React from "react";
import aircover from "../images/aircover.jpg"


const Aircoversection = () =>{
    return(
        <div className="info_general_aircover">
            <img loading="lazy" src={aircover} alt=""></img>
            <p>Todas las reservaciones incluyen protección gratuita en caso de que el anfitrión cancele, de que haya imprecisiones en el anuncio o de que surjan otros inconvenientes, como problemas al momento de hacer el check-in.</p>
            <button>Más información</button>
        </div>
    )
}

export default Aircoversection;
