import React from 'react';
import InfoHostTitulo from '../components/InfoHostTitulo';
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
import { useEffect, useState } from 'react';
import { getBookingSite } from '../store/reducers/BookingSite.reducer';
import { Icon } from '@iconify/react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import AlbumModal from '../components/AlbumModal';
import AlbumDetailModal from '../components/AlbumDetailModal';
import { albumReset, changeAlbum } from '../store/reducers/Album.reducer';
import { Button } from '@mantine/core';
import { Location } from 'tabler-icons-react';
import { LoadingOverlay } from '@mantine/core';

const containerStyle = {
  width: '95%',
  height: '300px'
  };


const BookingRoom = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);
  const [libraries] = useState(['places']);
  const { id } = useParams();
  const { error, loading, bookingSiteData } = useSelector(
    (state) => state.bookingSiteReducer
  );
  console.log(bookingSiteData)

  useEffect(() => {
    dispatch(getBookingSite(id));
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      dispatch(
        changeAlbum([...bookingSiteData.data.images.toString().split(',')])
      );
    }
  }, [bookingSiteData]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCsW9trmjliEY9-Qz_uuAK8C2DRCUFzDqs',
    libraries,
  });

  if (!isLoaded) return <div className="loading" style={{ width: 400 }}>
  <LoadingOverlay
    loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }}
    visible={visible}
  />
  {/* ...other content */}
</div>;

  if (loading === true) {
    return <div className="loading" style={{ width: 400 }}>
    <LoadingOverlay
      loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }}
      visible={visible}
    />
    {/* ...other content */}
  </div>;
  } else if (error === true) {
    return <p>Lo sentimos, ha ocurrido un error. {error}</p>;
  }
  const photos = [...bookingSiteData.data.images.toString().split(',')];
  const listPhothos = [];
  const reviews=[...bookingSiteData.data.reviews]
  const ratingTotal=[]
  const rating = reviews.forEach((review)=>{
        ratingTotal.push(review.rating[0])
  })
  console.log(ratingTotal)
  const initialValue = 0;
  const sumWithInitial = ratingTotal.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
const PromTotal = (sumWithInitial/ratingTotal.length).toFixed(1)
console.log("promedio",PromTotal)
  bookingSiteData.data.images.forEach((element) => {
    listPhothos.push({
      src: element,
      width: 25,
      height: 25,
    });
  });
  const arr = [
    [new Date(2022, 7, 10).toISOString(), new Date(2022, 7, 18).toISOString()],
    [new Date(2022, 7, 10).toISOString(), new Date(2022, 8, 10).toISOString()],
  ];
  console.log("!!!!!!!!!!!!!!!!!!!!!",ratingTotal)

  return (
    <div className="container-total">
      <div className="titulo-anfitrion"></div>
      <div className="albumreser">
        <Album album={photos} />
      </div>
      <Button radius="md" className="btnAlbum">
        <AlbumModal style={{ color: 'white' }} site="Mostrar todas las fotos" />
      </Button>
      {/*
      <button>
        <AlbumDetailModal site="ALbum2" />
      </button>
      */}
      <div className="info-reserva">
        <div id="left">
          <section className="titulo-Host">
            {bookingSiteData.data.userId.image ? (
              <InfoHostTitulo
                tiporeserva={bookingSiteData.data.title}
                Host={bookingSiteData.data.userId.name}
                maxhuespedes={bookingSiteData.data.total_occupancy}
                numbeds={bookingSiteData.data.total_beds}
                numbath={bookingSiteData.data.total_bathrooms}
                numrooms={bookingSiteData.data.total_rooms}
                src={bookingSiteData.data.userId.image}>
                {' '}
              </InfoHostTitulo>
            ) : (
              <InfoHostTitulo
                tiporeserva={bookingSiteData.data.title}
                Host={bookingSiteData.data.userId.name}
                maxhuespedes={bookingSiteData.data.total_occupancy}
                numbeds={bookingSiteData.data.total_beds}
                numbath={bookingSiteData.data.total_bathrooms}
                numrooms={bookingSiteData.data.total_rooms}
                src={
                  'https://res.cloudinary.com/dhacdmuvs/image/upload/v1656033094/user_z5tc8r.jpg'
                }>
                {' '}
              </InfoHostTitulo>
            )}
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
            <div className='services-list'>
            {bookingSiteData.data.services[0]
              .split(',')
              .map((element, index) => {
                if (element === 'pool') {
                  return (
                    <div className="services-item" key={index}> 
                      <div>
                      <Icon icon="cil:pool" style={{color: "#FF5A5F", marginRight:10}}/></div>
                      <div>
                      Piscina</div>
                    </div>
                  );
                } else if (element === 'jacuzzi') {
                  return (
                    <div className="services-item" key={index}> <div>
                      <Icon icon="emojione-monotone:bathtub" style={{color: "#FF5A5F", marginRight:10}} /> </div>
                      <div>
                      Jacuzzi</div>
                    </div>
                  );
                } else if (element === 'bbq') {
                  return (
                    <div className="services-item" key={index}> <div>
                      {' '}
                      <Icon icon="iconoir:bbq"  style={{color: "#FF5A5F", marginRight:10}} /> </div>
                      <div>
                      Parrila</div>
                </div>
                  );
                } else if (element === 'woodfire') {
                  return (
                    <div className="services-item" key={index}> <div>
                      <Icon icon="icon-park-outline:fire-two" style={{color: "#FF5A5F", marginRight:10}}/> </div>
                      <div>
                      Fogata</div>
                  </div>
                  );
                } else if (element === 'essentialservices') {
                  return (
                    <div className="services-item" key={index}> <div>
                      <Icon icon="ep:toilet-paper" style={{color: "#FF5A5F", marginRight:10}} /> </div>
                      <div>
                      Servicios esenciales </div>
                    </div>
                  );
                } else if (element === 'hotwater') {
                  return (
                    <div className="services-item" key={index}> <div>
                      <Icon icon="ph:thermometer-hot"  style={{color: "#FF5A5F", marginRight:10}}/> </div>
                      <div>
                      Agua caliente</div>
         </div>
                  );
                } else if (element === 'wifi') {
                  return (
                    <div className="services-item" key={index}> <div>
                      <Icon icon="clarity:wifi-line" style={{color: "#FF5A5F", marginRight:10}} /> </div>
                      <div>
                      Wifi</div>
    </div>
                  );
                } else if (element === 'tv') {
                  return (
                    <div className="services-item" key={index}> <div>
                      <Icon icon="arcticons:hanju-tv"  style={{color: "#FF5A5F", marginRight:10}} /> </div>
                      <div>
                      Tv</div>
                 </div>
                  );
                } else if (element === 'kitchen') {
                  return (
                    <div className="services-item" key={index}> <div>
                      <Icon icon="tabler:tools-kitchen-2" style={{color: "#FF5A5F", marginRight:10}} /> </div>
                      <div>
                      Cocina</div>
                </div>
                  );
                } else if (element === 'washer') {
                  return (
                    <div className="services-item" key={index}> <div>
                      <Icon icon="bxs:washer" style={{color: "#FF5A5F", marginRight:10}} /> </div>
                      <div>
                      Lavadora</div>
                    </div>
                  );
                } else if (element === 'airconditioner') {
                  return (
                    <div className="services-item" key={index}> <div>
                      <Icon icon="iconoir:air-conditioner" style={{color: "#FF5A5F", marginRight:10}} /> </div>
                      <div>
                      Aire acondicionado</div>
                  </div>
                  );
                } else if (element === 'firstaidkit') {
                  return (
                    <div className="services-item" key={index}> <div>
                      <Icon icon="clarity:first-aid-kit-line" style={{color: "#FF5A5F", marginRight:10}} /> </div>
                      <div>

                      Botiquín</div>
                    </div>
                  );
                }
              })}
              </div>
          </section>
        </div>
        <div id="right">
          <div className="form">
            <BookingSection
              priceNigth={bookingSiteData.data.price}
              maxguest={bookingSiteData.data.total_occupancy}
              dates={bookingSiteData.data.bookings}
            />
          </div>
        </div>
      </div>
      <div className="section-map">
            <h2>¿A dónde irás?</h2>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{
                lat: Number(bookingSiteData.data.lat),
                lng: Number(bookingSiteData.data.lng),
              }}
              zoom={15}>
              <Marker
                visible={true}
                position={{
                  lat: Number(bookingSiteData.data.lat),
                  lng: Number(bookingSiteData.data.lng),
                }}
              />
            </GoogleMap>
            <p>
            <Location
              size={14}
              strokeWidth={2}
              color={'#FF5A5F'}
              />
              {bookingSiteData.data.city}, {bookingSiteData.data.country}{' '}
            </p>
          </div>


      <div className="footer">

        <h2> {bookingSiteData.data.reviews.length} reseñas - {bookingSiteData.data.reviews.length>0 && <span>{PromTotal}<span style={{color:"#ffd700"}}>★</span></span>}</h2>

        {bookingSiteData.data.reviews.map((review, index) => (
          <section className="Reseñas" key={index}>
            <ReseñaReserva
              cliente={review.userId.name}
              title={review.title}
              comentario={review.message}
              src={review.userId.image ? review.userId.image : "https://res.cloudinary.com/dhacdmuvs/image/upload/v1656033094/user_z5tc8r.jpg"}
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default BookingRoom;
