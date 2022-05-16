import React from "react";
import { Icon } from '@iconify/react';


const ServiciosLugar = () =>{
    return(
        <div>
            <div className="servicios-general">
                <div className="info-1">
                    <div className="servicio"><Icon icon="tabler:tools-kitchen-2" /> Cocina</div>
                    <div className="servicio"><Icon icon="clarity:wifi-line" /> Wifi</div>
                    <div className="servicio"><Icon icon="emojione-monotone:bathtub" /> Jacuzzi</div>
                    <div className="servicio"><Icon icon="arcticons:hanju-tv" /> Tv</div>
                    <div className="servicio"><Icon icon="ic:outline-local-laundry-service" />   Lavadora</div>
                    <div className="servicio"><Icon icon="bxs:dryer" /> Secadora</div>
                    <div className="servicio"><Icon icon="iconoir:air-conditioner" /> Aire acondicionado</div>
                    <div className="servicio"><Icon icon="ic:baseline-balcony" /> Patio o balcón</div>
                </div>
                <button className="mostrar-modal">Mostrar los 32 servicios</button>
            </div>
        </div>
    )
}
export default ServiciosLugar;
