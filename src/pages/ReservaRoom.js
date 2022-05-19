import React from "react";
import InfoHostTitulo from "../components/InfoHostTitulo";
import Host1 from '../images/Hostes/Host1.jpg';
import InfoGeneralReseva from "../components/InfoGeneralReseva";
import Aircoversection from "../components/Aircoversection";
import DescripcionReserva from "../components/DescripcionReserva";
import InfoHabitaciones from "../components/InfoHabitaciones";
import Form from "../components/Form";
import CalendarioReservas from "../components/CalendarioReservas";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ServiciosLugar from '../components/ServiciosLugar';
import ReseñaReserva from '../components/ReseñaReserva';
import persona1 from '../images/clientes/persona1.jpg';
import Album from '../components/Album';

const ReservaRoom = () => {
  return (
    <div className="container-total">
      <div className="titulo-anfitrion">
        <h1 className=".info_anfitrion_container"></h1>
      </div>
      <div className="albumreser">
        <Album />
      </div>
      <div className="info-reserva">
        <div id="left">
            <section className="titulo-Host">
                <InfoHostTitulo tiporeserva="Cabaña entera" Host="Amy and Bryant" maxhuespedes="10" numrooms="3" numbeds="6" numbath="2" src={Host1} > </InfoHostTitulo>
            </section>
            <section className="info-general-reserva">
                <InfoGeneralReseva diseñadores="Meredith Higgins y Bryant Gingerich" textacceso=" mediante la caja de seguridad para llaves" textcancelacion="durante 48 horas" ></InfoGeneralReseva>
            </section>
            <section className="aircover">
                <Aircoversection></Aircoversection>
            </section>
            <section className="descripcion-reserva">
                <DescripcionReserva
                descripciongeneral="El Dunlap Hollow A-Frame es una nueva construcción que se completará a mediados de marzo de 2021. Ofrecemos reservas anticipadas con fechas que comienzan el 1 de abril de 2021. El A-Frame tiene capacidad para 10 huéspedes con 3 dormitorios y un pintoresco loft lleno de ventanas con capacidad para 4 personas."
                ></DescripcionReserva>
            </section>
            <section className="info-habitaciones">
                <div className="titulo-seccion">
                    <h2>¿Dónde vas a dormir?</h2>
                </div>
                <Swiper pagination={{dynamicBullets: true, clickable: true}} modules={[Pagination]}  className="mySwiper" speed={500} slidesPerView={3} breakpoints={{300:{slidesPerView:1},700:{slidesPerView:2},942:{slidesPerView:2},1300:{slidesPerView:3}}}> 
                    <SwiperSlide><InfoHabitaciones 
                        titulohabitacion="Habitación 1" descripcionhabitacion="1 cama king"></InfoHabitaciones></SwiperSlide>
                    <SwiperSlide><InfoHabitaciones
                    titulohabitacion="Habitación 2" descripcionhabitacion="1 cama queen"></InfoHabitaciones></SwiperSlide> 
                    <SwiperSlide> <InfoHabitaciones
                    titulohabitacion="Habitación 3" descripcionhabitacion="1 cama queen"></InfoHabitaciones></SwiperSlide> 
                    <SwiperSlide> <InfoHabitaciones
                    titulohabitacion="Área de  la habitación" descripcionhabitacion="1 cama king, 2 camas individuales"></InfoHabitaciones></SwiperSlide> 
                </Swiper>
            </section>
            <section className="servicios-room">
            <h2>Lo que este lugar ofrece</h2>
            <ServiciosLugar></ServiciosLugar>
          </section>
          <section className="calendar">
            <h2>Selecciona las fechas</h2>
            <CalendarioReservas />
          </section>
        </div>
        <div id="right">
          <div className="form">
            <Form></Form>
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

export default ReservaRoom;
