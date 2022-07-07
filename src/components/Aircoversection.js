import React from "react";
import { useState } from "react";
import aircover from "../images/aircover.jpg"
import { Button, Modal } from "@mantine/core";

const Aircoversection = () =>{
    const [opened, setOpened] = useState(false);
    return(
        <div className="info_general_aircover">
            <img loading="lazy" src={aircover} alt=""></img>
            <p>Todas las reservaciones incluyen protección gratuita en caso de que el anfitrión cancele, de que haya imprecisiones en el anuncio o de que surjan otros inconvenientes, como problemas al momento de hacer el check-in.</p>
            <Button variant="subtle" color="gray" onClick={() => setOpened(true)}>Más información</Button>
            <div className="modal-aircover">
            <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="AirCover es una protección amplia que se incluye gratis en cada reservación."
        >
        <img style={{width:"30%"}}loading="lazy" src={aircover} alt="aircovermodal"></img>
        <h2>Garantía de protección de la reservación</h2>
        <p>En el improbable caso de que un anfitrión tenga que 
            cancelar tu reservación en los 30 días previos al check-in, 
            te vamos a encontrar un alojamiento similar o mejor, o te vamos a enviar un reembolso.</p>
        <h2>Garantía de cumplimiento de lo reservado</h2>
        <p>Si durante tu estadía te das cuenta de que el alojamiento no coincide 
            con la descripción del anuncio (p. ej.: si se daña la nevera y el anfitrión no puede 
            arreglarla o si el espacio tiene menos habitaciones de las que aparecen en el anuncio), 
            tendrás tres días para avisarnos. Cuando lo hagas, buscaremos un alojamiento similar o mejor, 
            o te enviaremos un reembolso.</p>
        </Modal>
        </div>
        </div>
    )
}

export default Aircoversection;
