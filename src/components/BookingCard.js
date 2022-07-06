import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Modal,
  Button,
  useMantineTheme,
  Group,
  LoadingOverlay,
  Avatar,
  Text,
  Accordion,
  ThemeIcon,
} from '@mantine/core';
import EditFormBooking from './EditFormBooking';
import 'swiper/css';
import 'swiper/css/pagination';
//import nophoto from '../../images/notavailable.png';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getUser } from '../store/reducers/User.reducer';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs/locale/es';

const BookingCard = (props) => {
  const { booking, image } = props;
  const dispatch = useDispatch();
  const [date, setDate] = useState([
    new Date(booking.date[0]),
    new Date(booking.date[1]),
  ]);
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  console.log('Booking card: ', booking);
  function AccordionLabel() {
    return (
      <Group noWrap>
        <div className="photo-notfound">
          <img src={image} alt="booking-photo" loading="lazy"></img>
        </div>
        <div>
          <Text size="xl">{booking.title}</Text>
          <Text size="sm" color="dimmed" weight={400}>
            {booking.description}
          </Text>
          <Text size="md">
            {`Inicia el ${date[0].getDate()} de ${
              dayjs.months[date[0].getMonth()]
            } de ${date[0].getFullYear()} y finaliza el ${date[1].getDate()} de ${
              dayjs.months[date[1].getMonth()]
            } de ${date[1].getFullYear()}`}
          </Text>
        </div>
      </Group>
    );
  }

  async function handleOnclick(e) {
    e.preventDefault();
    setLoading(true);
    setVisible(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(
        `http://localhost:8080/bookings/${booking._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log('getUser2');
        dispatch(getUser());
        console.log('getUser2');
        toast.success('Se eliminó tu sitio', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
        setVisible(false);
        setOpened(false);
      }
    } catch (error) {
      setVisible(false);
      toast.error('No se pudo eliminar tu sitio', {
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

  return (
    <>
      <Accordion
        initialItem={-1}
        iconPosition="left"
        icon={
          <ThemeIcon variant="light" radius="xl" size="sm" color="gray">
            <Icon icon="bi:house" />
          </ThemeIcon>
        }>
        <Accordion.Item
          label={<AccordionLabel {...booking} />}
          key={booking._id}>
          <div className="boxfooter2">
            <EditFormBooking booking={booking} />
            <Button color="red" onClick={() => setOpened(true)}>
              Eliminar
            </Button>
            <Link to={`/room/${booking.bookingSiteId}`}>
              <Button>Ir al sitio</Button>
            </Link>
          </div>
        </Accordion.Item>
      </Accordion>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Cancelar reserva"
        overlayColor={
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}>
        {/*{' '}
        {loading === true && (
          <div className="loading" style={{ width: 400 }}>
            <LoadingOverlay
              loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }}
              visible={visible}
            />
            {/* ...other content 
          </div>
        )}
        */}
        <p>Estas seguro que desea canselar la reserva?</p>
        <div className="cancel-buttons">
          <div>
            <Button color="gray">Cancelar</Button>
          </div>
          <div>
            <Button color="red" onClick={handleOnclick}>
              Eliminar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookingCard;
