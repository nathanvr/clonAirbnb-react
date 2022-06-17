import React from 'react';
import InfoHostTitulo from '../components/InfoHostTitulo';
import Host1 from '../images/Hostes/Host1.jpg';
import Aircoversection from '../components/Aircoversection';
import DescripcionReserva from '../components/DescripcionReserva';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReseñaReserva from '../components/ReseñaReserva';
import persona1 from '../images/clientes/persona1.jpg';
import Album from '../components/Album';
import { useDispatch, useSelector } from 'react-redux';
import BookingSection from '../components/BookingSection';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getBookingSite } from '../store/reducers/BookingSite.reducer';
import PhotoAlbum from 'react-photo-album';

const BookingRoom = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { error, loading, bookingSiteData } = useSelector(
    (state) => state.bookingSiteReducer
  );

  useEffect(() => {
    dispatch(getBookingSite(id));
  }, []);

  if (loading === true) {
    return <p>loading...</p>;
  } else if (error === true) {
    return <p>Lo sentimos, ha ocurrido un error. {error}</p>;
  } else {
    const photos = [...bookingSiteData.data.images];
    console.log(photos);
    const listPhothos = [];

    photos.forEach((element) => {
      listPhothos.push({
        src: element,
        width: 25,
        height: 25,
      });
    });

    console.log(listPhothos);

    return (
      <div className="container-total">
        <div className="titulo-anfitrion"></div>
        <div className="albumreser">
          {/* {photos.map((photo, index) => (
            <div key={index}>
              <img src={photo} alt={index} />
            </div>
          ))} */}
          <PhotoAlbum layout="rows" photos={listPhothos} />

          {/* <Album /> */}
        </div>
        <div className="info-reserva">
          <div id="left">
            <section className="titulo-Host">
              <InfoHostTitulo
                // tiporeserva={booking.bookingType}
                // Host={booking.host}
                maxhuespedes={bookingSiteData.data.total_occupancy}
                numbeds={bookingSiteData.data.total_beds}
                numbath={bookingSiteData.data.total_bathrooms}
                numrooms={bookingSiteData.data.total_rooms}
                src={Host1}>
                {' '}
              </InfoHostTitulo>
            </section>
            <section className="aircover">
              <Aircoversection></Aircoversection>
            </section>
            <section className="descripcion-reserva">
              <h2>Descripción del lugar</h2>
              <DescripcionReserva
                descripciongeneral={
                  bookingSiteData.data.description
                }></DescripcionReserva>
            </section>

            <section className="servicios-room">
              <h2>Lo que este lugar ofrece</h2>
              {bookingSiteData.data.services}
            </section>
            <section className="calendar">
              <h2>¿A dónde irás?</h2>
            </section>
          </div>
          <div id="right">
            <div className="form">
              <BookingSection priceNigth={bookingSiteData.data.price} />
            </div>
          </div>
        </div>

        <div className="footer">
          <h2>★ 4.9 - 60 reseñas</h2>
          <section className="Reseñas">
            <ReseñaReserva
              cliente="Stormy"
              fecha="abril de 2022"
              comentario="¡Este lugar era aún mejor que en las fotos! ¡Lo recomendaría encarecidamente!"
              src={persona1}
            />
            <ReseñaReserva
              cliente="Stormy"
              fecha="abril de 2022"
              comentario="¡Este lugar era aún mejor que en las fotos! ¡Lo recomendaría encarecidamente!"
              src={persona1}
            />
            <ReseñaReserva
              cliente="Stormy"
              fecha="abril de 2022"
              comentario="¡Este lugar era aún mejor que en las fotos! ¡Lo recomendaría encarecidamente!"
              src={persona1}
            />
            <ReseñaReserva
              cliente="Stormy"
              fecha="abril de 2022"
              comentario="¡Este lugar era aún mejor que en las fotos! ¡Lo recomendaría encarecidamente!"
              src={persona1}
            />
          </section>
        </div>
      </div>
    );
  }
};

export default BookingRoom;
