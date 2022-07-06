import { useEffect, useState } from 'react';
import { TrashX ,UserCircle, PlaneArrival,PlaneDeparture, Edit, Calendar, CalendarOff, FileTime} from 'tabler-icons-react';
import {
  Modal,
  Button,
  useMantineTheme,
  Group,
  Text,
  Accordion,
  ThemeIcon,ScrollArea, Select, Textarea,
} from '@mantine/core';
import 'swiper/css';
import 'swiper/css/pagination';
import nophoto from '../../images/notavailable.png';
import { Icon } from '@iconify/react';
import axios from 'axios';
import '../../styles/components/ReviewCard.scss';
import BookingCard from './BookingsCard';

const ReviewCard = ({ booking }) => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const today= new Date().getTime()
  var OneDay = new Date().getTime() + (1 * 24 * 60 * 60 * 1000)
  console.log("is this",OneDay)
  
  function AccordionLabel({ label, image, description }) {
    return (
      <Group noWrap>
        {booking.images.toString().split(',').length === 0 && (
          <div className="photo-notfound">
            <img src={nophoto} alt="notphoto" loading="lazy"></img>
          </div>
        )}

        <div>
          <Text size="xl">{booking.title}</Text>
        </div>
      </Group>
    );
  }
  async function handleOnclick(e) {
    e.preventDefault();
    if(value !== '' && description!==''){
      
    }
    if(value === '' && description ===''){
      setError("Por favor completa los campos")
    }

    
  }
  const reservations = booking.bookings;
  const todayDate = new Date().getDate()

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
          <div className="bs__bookings">
            {reservations.length === 0 && (
              <div className="bs__bookings__dont">
                <Icon
                  icon="fluent:text-bullet-list-square-search-20-regular"
                  className="icon"
                />
                <p>No tienes reservas en este momento.</p>
              </div>
            )}
            {reservations.length>0 && 
            <ScrollArea style={{ height: 200 }} offsetScrollbars>
              <div className="bs__bookings__list">
              <div className="bs__bookings__list__header">
                <p><UserCircle/> Nombre</p>
                <p><PlaneArrival/> Llegada</p>
                <p><PlaneDeparture/> Salida</p>
                <p><FileTime/> Estado</p>
                <p><Edit/> Editar</p>
              </div>
              
              {reservations.map((item, index) => (
                <div className="bs__bookings__list__item1" key={index}>
                  <div className="bs__bookings">
                      <BookingCard booking={item}></BookingCard>
                </div>
                </div>
              ))
              }
              </div>
          </ScrollArea>
            }
            </div>
        </Accordion.Item>
      </Accordion>

    </>
  );
};

export default ReviewCard;
