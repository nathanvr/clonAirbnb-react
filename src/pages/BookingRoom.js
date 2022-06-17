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
import { useEffect, useState } from 'react';
import { getBookingSite } from '../store/reducers/BookingSite.reducer';
import PhotoAlbum from 'react-photo-album';
import { Icon } from '@iconify/react';
import {
  GoogleMap,
  Marker,
  useLoadScript,
} from '@react-google-maps/api'

const containerStyle = {
  width: '500px',
  height: '400px'
};

const BookingRoom = () => {
  const dispatch = useDispatch();
  const [ libraries ] = useState(['places']);
  const { id } = useParams();
  const { error, loading, bookingSiteData } = useSelector(
    (state) => state.bookingSiteReducer
  );

  useEffect(() => {
    dispatch(getBookingSite(id));
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCsW9trmjliEY9-Qz_uuAK8C2DRCUFzDqs",
    libraries,
})

  if(!isLoaded) return <div>Loading...</div>;


  if (loading === true) {
    return <p>loading...</p>;
  } else if (error === true) {
    return <p>Lo sentimos, ha ocurrido un error. {error}</p>;
  } 

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
                 tiporeserva={bookingSiteData.data.title}
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
              {bookingSiteData.data.services[0].split(",").map((element, index)=>{

if(element==="pool"){
  return <p key={index}><Icon icon="cil:pool"/>Piscina</p>}else if (element==="jacuzzi")
  {
      return <p key={index}><Icon icon="emojione-monotone:bathtub"/>Jacuzzi</p>}else if (element==="bbq")
      {
          return <p key={index}> <Icon icon="iconoir:bbq"/>Parrila</p>}else if (element==="woodfire")
          {
              return <p key={index}><Icon icon="icon-park-outline:fire-two"/>Fogata</p>}else if (element==="essentialservices")
              {
                  return <p key={index}><Icon icon="ep:toilet-paper"/>Servicios esenciales</p>}else if (element==="hotwater")
                  {
                      return <p key={index}><Icon icon="ph:thermometer-hot"/>Agua caliente</p>}else if (element==="wifi")
                      {
                          return <p key={index}><Icon icon="clarity:wifi-line"/>Wifi</p>}else if (element==="tv")
                          {
                              return <p key={index}><Icon icon="arcticons:hanju-tv"/>Tv</p>}else if (element==="kitchen")
                              {
                                  return <p key={index}><Icon icon="tabler:tools-kitchen-2"/>Cocina</p>}else if (element==="washer")
                                  {
                                      return <p key={index}><Icon icon="bxs:washer"/>Lavadora</p>}else if (element==="airconditioner")
                                      {
                                          return <p key={index}><Icon icon="iconoir:air-conditioner"/>Aire acondicionado</p>}else if (element==="firstaidkit")
                                          {
                                              return <p key={index}><Icon icon="clarity:first-aid-kit-line"/>Botiquín</p>}
            

                                          })}
            </section>
            <section className="calendar">
              <h2>¿A dónde irás?</h2>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={{lat:Number(bookingSiteData.data.lat), lng: Number(bookingSiteData.data.lng)}}
                  zoom={9}>
                      <Marker  visible={true} position={{lat:Number(bookingSiteData.data.lat), lng: Number(bookingSiteData.data.lng)}} />
                  
              </GoogleMap>
                <p>{bookingSiteData.data.address}, {bookingSiteData.data.city},{bookingSiteData.data.country} </p>
            </section>
          </div>
          <div id="right">
            <div className="form">
              <BookingSection priceNigth={bookingSiteData.data.price} maxguest={bookingSiteData.data.total_occupancy} />
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
  
};

export default BookingRoom;
