import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Modal, Button, useMantineTheme,Group,LoadingOverlay, Avatar, Text, Accordion, ThemeIcon} from '@mantine/core';
import EditFormHost from "./EditFormHost";
import "swiper/css";
import "swiper/css/pagination";
import nophoto from "../../images/notavailable.png"
import { Icon } from '@iconify/react';
import axios from "axios";
import { toast } from "react-toastify";
import { getUser } from "../../store/reducers/User.reducer";
import { useDispatch } from "react-redux";

const Bookingsitecard = ({booking}) => {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState(null);
    const dispatch=useDispatch();
    function AccordionLabel({ label, image, description }) {
        return (
        <Group noWrap>
            
                {booking.images.toString().split(",").length === 0 && 
                    <div className="photo-notfound">
                        <img src={nophoto} alt="notphoto" loading="lazy"></img>
                    </div>}
                {booking.images.toString().split(",").length > 0 && 
                    <div className="photo-notfound">
                    
                            <img src={booking.images.toString().split(",")[0]} alt="booking-photo" loading="lazy"></img>
                        
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
    async function handleOnclick(e){
        e.preventDefault();
        setLoading(true);
        setVisible(true);
        try{
        const token = localStorage.getItem('token');
        const response = await axios.delete(`http://localhost:8080/bookingsites/${booking._id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
        
        
    });
    if(response.status===200){
        dispatch(getUser())
        toast.success('Se eliminó tu sitio', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            setLoading(false);
            setVisible(false);
            setOpened(false)
     }}catch(error){
        setVisible(false);
        toast.error('No se pudo eliminar tu sitio', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    }
    
    
    return(
        <>
        <Accordion initialItem={-1} iconPosition="left" icon={ <ThemeIcon  variant="light" radius="xl" size="sm" color="gray"><Icon icon="bi:house" /></ThemeIcon>}>
            <Accordion.Item label={<AccordionLabel {...booking} />} key={booking._id}>
                <div className="boxfooter2">
                    <EditFormHost booking={booking}/>
                    <Button color="red" onClick={() => setOpened(true)}>Eliminar</Button>
                    <Link to ={`/room/${booking._id}`}><Button>Ir al sitio</Button></Link>  
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
    >    {loading ===true && 
        <div className='loading' style={{ width: 400}}>
        <LoadingOverlay loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }} visible={visible} />
        {/* ...other content */}
        </div>}
        <p>Estas seguro de eliminar este sitio?</p>
        <div className="cancel-buttons">
            <div>
                <Button color="gray">Cancelar</Button>
            </div>
            <div>
                <Button color="red" onClick={handleOnclick}>Eliminar</Button>
            </div>  
        </div>
        </Modal>
    </>
    )
}

export default Bookingsitecard;
