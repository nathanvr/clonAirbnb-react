import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Modal, Button, useMantineTheme,Group, Avatar, Text, Accordion, ThemeIcon} from '@mantine/core';
import EditFormHost from "./EditFormHost";
import "swiper/css";
import "swiper/css/pagination";
import nophoto from "../../images/notavailable.png"
import { Icon } from '@iconify/react';


const Bookingsitecard = ({booking}) => {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    console.log(booking.images)
    function AccordionLabel({ label, image, description }) {
        return (
        <Group noWrap>
            
                {booking.images.length === 0 && 
                    <div className="photo-notfound">
                        <img src={nophoto} alt="notphoto" loading="lazy"></img>
                    </div>}
                {booking.images.length > 0 && 
                    <div className="photo-notfound">
                    
                            <img src={booking.images[0]} alt="booking-photo" loading="lazy"></img>
                        
                    </div>
                   
                }

            <div>
                
            <Text size="xl">{booking.title}</Text>
            <Text size="sm" color="dimmed" weight={400}>
                {booking.description}
            </Text>
            </div>
        </Group>
        );
    }
    
    return(
        <>
         <Accordion initialItem={-1} iconPosition="left" icon={ <ThemeIcon  variant="light" radius="xl" size="sm" color="gray"><Icon icon="bi:house" /></ThemeIcon>}>
            <Accordion.Item label={<AccordionLabel {...booking} />} key={booking._id}>
                <div className="boxfooter2">
                    <EditFormHost/>
                    <Button color="red" onClick={() => setOpened(true)}>Eliminar</Button>   
                </div>
            </Accordion.Item>
      </Accordion>

        
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
    </>
    )
}

export default Bookingsitecard;
