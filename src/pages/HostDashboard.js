import React, { useEffect} from 'react';

import FormHost from '../components/host/FormHost';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../store/reducers/User.reducer';
import Bookingsitecard from '../components/host/Bookingsitecard';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs/locale/es';
import ReviewCard from '../components/host/ReviewCard';
import { ScrollArea } from '@mantine/core';

const HostDashboard = () => {
  const current = new Date();
  const date = `${current.getDate()} de ${
    dayjs.months[current.getMonth()]
  } de ${current.getFullYear()}`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const { bookingSites} = useSelector((state) => state.userReducer);

  return (
    <div className="dashboard-container">
      <section className="hero">
        <div>
          <h2>Hoy {date}</h2>
          <p>Empieza a agregar anuncios</p>
        </div>
        <div>
          <button>
            <FormHost sitio="Haz un anuncio" />
          </button>
        </div>
      </section>
      <div className="container-bookings">
        <h2>Tus reservaciones</h2>
        <div className="content-tabs1">
          <div className="container-cards">
            {bookingSites.length === 0 && (
              <div className="content active-content">
                <Icon
                  icon="fluent:text-bullet-list-square-search-20-regular"
                  className="icon"
                />
                <p>No tienes sitios en este momento.</p>
              </div>
            )}
            <ScrollArea style={{ width: "100%" }}>
            <div className='scroll-booking'>
            {bookingSites.map((item, i) => (
              <ReviewCard booking={item} key={i} />
            ))}
            </div>
            </ScrollArea>

          </div>
        </div>
      </div>
      <div className="container-bookings">
        <h2>Tus sitios</h2>
        <div className="content-tabs1">
          <div className="container-cards">
            {bookingSites.length === 0 && (
              <div className="content active-content">
                <Icon
                  icon="fluent:text-bullet-list-square-search-20-regular"
                  className="icon"
                />
                <p>No tienes sitios en este momento.</p>
              </div>
            )} 
            <ScrollArea style={{ width: "100%" }}>
            {bookingSites.map((item, i) => (

             
              <Bookingsitecard booking={item} key={i} />
              
            ))}
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostDashboard;
