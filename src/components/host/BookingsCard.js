import { useEffect, useState } from 'react';
import { TrashX ,UserCircle, PlaneArrival,PlaneDeparture, Edit, Calendar, CalendarOff, FileTime, Book} from 'tabler-icons-react';
import {
  Modal,
  Button,
  useMantineTheme,
  LoadingOverlay,
  Text, Select, Textarea,
} from '@mantine/core';
import { useDispatch } from 'react-redux';
import { getUser} from '../../store/reducers/User.reducer';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../../styles/components/ReviewCard.scss';

const BookingCard = ({ booking }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const today= new Date().getTime()
  var OneDay = new Date().getTime() + (1 * 24 * 60 * 60 * 1000)
    console.log("is this",  booking)
  

    async function handleOnclick(e) {
        e.preventDefault();
        
        if(value !== '' && description!==''){
            setLoading(true);
            setVisible(true)
            setError('')
            try {
                const token = localStorage.getItem('token');
                const body = {
                    bookingId: booking._id,
                    description: description
                };
                const response = await axios.put(
                    `http://localhost:8080/bookings/cancel`,body,
                    {
                        headers: {
                        Authorization: `Bearer ${token}`,
                        },
                    }
                    );
                    console.log(response)
                    if (response.status === 200) {
                    dispatch(getUser());
                    toast.success('Se canceló la reserva', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    setValue('');
                    setDescription('');
                    setLoading(false);
                    setVisible(false);
                    setOpened(false);
                }
                } catch (error) {
                setVisible(false);
                toast.error('No se pudo eliminar la reserva', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                }
        
        }
        if(value === '' && description ===''){
        setError("Por favor completa los campos")
        }
    }
    const reservations = booking.bookings;
    console.log('reservaciones:', reservations);
    const todayDate = new Date().getDate()
    console.log(todayDate)
    return (
    <>

                <div className="bs__bookings__list__item">
                <p>
                    {booking.userId.name} {booking.userId.lastname}
                </p>
                <p>
                    {new Date(booking.date[0]).getDate()}/
                    {new Date(booking.date[0]).getMonth() + 1}/
                    {new Date(booking.date[0]).getFullYear()}
                </p>
                <p>
                    {new Date(booking.date[1]).getDate()}/
                    {new Date(booking.date[1]).getMonth() + 1}/
                    {new Date(booking.date[1]).getFullYear()}
                </p>
                <p>
                    {booking.statusBooking === undefined && today <= new Date(booking.date[1]).getTime() && (<span style={{color:"green"}}>Activa</span>)}
                    {booking.statusBooking === "cancelled"  && (<span style={{color:"red"}}>Cancelada</span>)}
                </p>
                <p>
                    {OneDay > new Date(booking.date[0]).getTime() || booking.statusBooking === "cancelled" ? 
                    (<Button variant="light" color="red" size="xs" compact disabled><CalendarOff size={14}/> Cancelar</Button>) :
                    (<Button variant="light" color="red" size="xs" compact onClick={() => setOpened(true)}><CalendarOff size={14}/> Cancelar</Button>) }
                </p>
                </div>



    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        overlayColor={
        theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}>
        {loading === true && (
        <div className="loading" style={{ width: 400 }}>
            <LoadingOverlay
            loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }}
            visible={visible}
            />
            {/* ...other content */}
        </div>
        )}
        <div className='item-modal-cancelation'>
        <Text size="lg" weight={700}>Cancelar Reserva</Text>
        </div>
        <div className='item-modal-cancelation-list'>
        <Text size="sm">Cancelar la reservación de un huésped puede afectar sus planes considerablemente. Por esa razón, aplicaremos penalizaciones, a menos que el motivo de la cancelación se daba a causas extenuantes.</Text>
        </div>
        <div className='item-modal-cancelation-list'>
        <Select placeholder='Selecciona una opción' value={value} label="Selecciona el motivo de la cancelación:" onChange={setValue} required data={[{ value: 'unavailable', label: 'Mi sitio no está disponible' },
        { value: 'uncomfortable', label: 'Me siento incomodo con la reservación' },
        { value: 'cancel', label: 'Mi cliente necesita cancelar' },
        { value: 'other', label: 'Otro' }]} />
        <div className='item-modal-cancelation-list'>
        <Textarea required value={description} onChange={(event) => setDescription(event.currentTarget.value)} label={`Cuentale a tu cliente por qué necesitas cancelar la reserva `} />
        </div>
        {error !== '' && <Text color="red">{error}</Text>}
        </div>
        <div className="cancel-buttons">
        <div>
            <Button color="gray">Cancelar</Button>
        </div>
        <div>
            <Button color="red" onClick={handleOnclick}>
            Eliminar Reserva
            </Button>
        </div>
        </div>
    </Modal>
    </>
);
};

export default BookingCard;
