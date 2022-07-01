import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Modal,
  Button,
  useMantineTheme,
  Group,
  Avatar,
  Text,
  Accordion,
  ThemeIcon,
} from '@mantine/core';
import EditFormHost from './EditFormHost';
import 'swiper/css';
import 'swiper/css/pagination';
import nophoto from '../../images/notavailable.png';
import { Icon } from '@iconify/react';
import axios from 'axios';
//import '../../styles/components/ReviewCard.scss';

const ReviewCard = ({ booking }) => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  // console.log("aaaaaa",booking.bookings)
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

    const token = localStorage.getItem('token');
    const response = await axios.delete(
      `http://localhost:8080/bookingsites/${booking._id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log('respuesta', response);
    if (response.status === 200) {
      window.location.reload();
    }
  }
  const reservations = booking.bookings;
  console.log('reservaciones:', reservations);

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
          <div>
            {reservations.length === 0 && (
              <div>
                <Icon
                  icon="fluent:text-bullet-list-square-search-20-regular"
                  className="icon"
                />
                <p>No tienes reservas en este momento.</p>
              </div>
            )}
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Start date</th>
                  <th>End date</th>
                </tr>
              </thead>
              {reservations.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>
                      {item.userId.name} {item.userId.lastname}
                    </td>
                    <td>
                      {new Date(item.date[0]).getDate()}/
                      {new Date(item.date[0]).getMonth() + 1}/
                      {new Date(item.date[0]).getFullYear()}
                    </td>
                    <td>
                      {new Date(item.date[1]).getDate()}/
                      {new Date(item.date[1]).getMonth() + 1}/
                      {new Date(item.date[1]).getFullYear()}
                    </td>
                  </tr>
                </tbody>

                // <div key={index}>
                //   <p>{item.userId.name}</p>
                //   <p>{item.date[0]}</p>
                //   <p>{item.date[1]}</p>
                // </div>
              ))}
            </table>
          </div>
        </Accordion.Item>
      </Accordion>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Eliminar sitio"
        overlayColor={
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}>
        <p>Estas seguro de eliminar este sitio?</p>
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

export default ReviewCard;
