import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Modal, Button, useMantineTheme } from '@mantine/core';
import EditFormHost from "./EditFormHost";

const Bookingsitecard = ({booking}) => {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    return(
        <div key={booking._id} className="container-card">
            <div className="boxpicture">
                <div className="picture">
                <img src="https://res.cloudinary.com/dhacdmuvs/image/upload/v1655065456/booking-image/exous0drefak10mpoqn7.webp" loading="lazy" alt=""></img>
                </div>
                <div className="info">
                <h2>{booking.title}</h2>
                <p>{booking.description}</p>
                </div>
            </div>
            <div className="boxfooter2">

            <EditFormHost/>
            
            <Button color="red" onClick={() => setOpened(true)}>
            Eliminar
            </Button>   
        </div>
        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Eliminar sitio"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3} 
    >
        <p>Estas seguro de eliminar este sitio?</p>
        <div className="cancel-buttons">
            <div>
                <Button color="gray">Cancelar</Button>
            </div>
            <div>
                <Button color="red">Eliminar</Button>
            </div>  
        </div>
        </Modal>
    </div>
    )
}

export default Bookingsitecard;
