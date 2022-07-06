import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs/locale/es';
import BookingCard from '../components/BookingCard';
import { getUser } from '../store/reducers/User.reducer';
import { useEffect, useState } from 'react';
import { getBookingSites } from '../store/reducers/BookingSites.reducer';

const Booking = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('getuserin');
    dispatch(getUser());
  }, [dispatch]);

  const { bookings } = useSelector((state) => state.userReducer);
  const { sites } = useSelector((state) => state.bookingSitesReducer);
  const [booking, setBooking] = useState([]);
  let ids = {};

  useEffect(() => {
    setBooking([...bookings]);
  }, [bookings]);

  useEffect(() => {
    dispatch(getBookingSites());
  }, []);

  console.log('Sites: ', sites);

  sites.forEach((item) => {
    console.log('Item: ', item);
    ids = { ...ids, [item._id]: item.images.toString().split(',')[0] };
  });

  console.log('Ids: ', ids, 'Bookingszzz: ', booking);

  const current = new Date();
  const date = `${current.getDate()} de ${
    dayjs.months[current.getMonth()]
  } de ${current.getFullYear()}`;
  console.log('BookingSiteReser: ', booking);

  return (
    <div className="dashboard-container">
      <section className="hero">
        <div>
          <h2>Hoy {date}</h2>
          <p>Estas son tus reservas activas</p>
        </div>
      </section>
      <div className="container-bookings">
        <h2>Tus reservaciones</h2>
        <div className="content-tabs1">
          <div className="container-cards">
            {bookings.length === 0 && (
              <div className="content active-content">
                <Icon
                  icon="fluent:text-bullet-list-square-search-20-regular"
                  className="icon"
                />
                <p>No tienes reservas en este momento.</p>
              </div>
            )}
            {booking.map((item, i) => (
              <BookingCard
                key={`bookingcard${i}`}
                booking={item}
                image={ids[item.bookingSiteId]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Booking;
