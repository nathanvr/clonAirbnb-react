import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import Button from '../components/Button';
import Title from '../components/Title';
import Form from '../components/Form';
import CardSm from '../components/CardSm';
import CardMd from '../components/CardMd';
import rec1 from '../images/cards/rectangle4.0.png';
import rec2 from '../images/cards/rectangle4.1.png';
import rec3 from '../images/cards/rectangle4.2.png';
import cardmd1 from '../images/cards/cardmd1.png';
import cardmd2 from '../images/cards/cardmd2.png';
import cardmd3 from '../images/cards/cardmd3.png';
import cardmd4 from '../images/cards/cardmd4.png';
import cardmd5 from '../images/cards/cardmd5.png';
import cardmd6 from '../images/cards/cardmd6.png';
import cardmd7 from '../images/cards/cardmd7.png';
import cardmd8 from '../images/cards/cardmd8.png';
import cardmd9 from '../images/cards/cardmd9.png';
import cardmd10 from '../images/cards/cardmd10.png';
import cardmd11 from '../images/cards/cardmd11.png';
import cardmd12 from '../images/cards/cardmd12.png';
import cardlg1 from '../images/cards/cardlg1.png';
import CardLg from '../components/CardLg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from "swiper";


const Home = () => {
    return (
    <div className="container-home">
        <div className="header">
        <Form></Form>
        </div>
        <div className="main">
        <Title title="Explorar Airbnb"></Title>
        <section className='explorar-airbnb'>
            <CardSm text="Logements" src={rec1} link="/"></CardSm>
            <CardSm text="Expériences" src={rec2} link="/experiencia"></CardSm>
            <CardSm text="Aventures" src={rec3} link="/"></CardSm>
        </section>
        <Title
            title="Alojamientos Airbnb Plus"
            info="Una selección de alojamientos contrastados según criterios de calidad y diseño"></Title>
        <section>

        </section>
        <Title
            title="Descubre las aventuras de Airbnb"
            info="Viajes de varios días organizados por expertos locales con actividades, comidas y alojamiento incluidos"></Title>
        
        <section className='alojamientos-plus'>
        <Swiper pagination={{dynamicBullets: true, clickable: true}} modules={[Pagination]}  className="mySwiper" speed={500}  breakpoints={{300:{slidesPerView:1},560: { slidesPerView: 2, }, 760: { slidesPerView: 3, }, 960: { slidesPerView: 4}, 1160:{slidesPerView: 5},1333:{slidesPerView:6, spaceBetween:5}}}> 
            <SwiperSlide><CardMd
            src={cardmd1}
            country="cayman island"
            texth3="2 Nights PACKAGE All Inclusive"
            textp="À partir de 577€/personne - 3 jours"
            score="5.0"
        /> </SwiperSlide>
        <SwiperSlide><CardMd
            src={cardmd2}
            country="cayman island"
            texth3="2 Nights PACKAGE All Inclusive"
            textp="À partir de 577€/personne - 3 jours"
            score="5.0★"
        /></SwiperSlide>
        <SwiperSlide><CardMd
            src={cardmd3}
            country="cayman island"
            texth3="2 Nights PACKAGE All Inclusive"
            textp="À partir de 577€/personne - 3 jours"
            score="5.0★"
        /></SwiperSlide>
        <SwiperSlide><CardMd
            src={cardmd4}
            country="cayman island"
            texth3="2 Nights PACKAGE All Inclusive"
            textp="À partir de 577€/personne - 3 jours"
            score="5.0★"
        /></SwiperSlide>
        <SwiperSlide><CardMd
            src={cardmd5}
            country="cayman island"
            texth3="2 Nights PACKAGE All Inclusive"
            textp="À partir de 577€/personne - 3 jours"
            score="5.0★"
        /></SwiperSlide>
        <SwiperSlide><CardMd
            src={cardmd6}
            country="cayman island"
            texth3="2 Nights PACKAGE All Inclusive"
            textp="À partir de 577€/personne - 3 jours"
            score="5.0★"
        /></SwiperSlide>
        </Swiper>
        </section>
        <Title title="Alojamientos en todo el mundo"></Title>
        <section className='alojamientos-plus1'>
        <CardLg
            src={cardlg1}
            textbtn="superhost"
            city="City name"
            score="4.9"
            text="À partir de 577€/personne - 3 jours"
        />
        </section>
        <Title
            title="Experiencias altamente calificadas"
            info="Viajes de varios días organizados por expertos locales con actividades, comidas y alojamiento incluidos"></Title>
        <section className='experiencias-calificadas'>
        <Swiper pagination={{dynamicBullets: true, clickable: true}} modules={[Pagination]}  className="mySwiper" speed={500}  breakpoints={{300:{slidesPerView:1},560: { slidesPerView: 2, }, 760: { slidesPerView: 3, }, 960: { slidesPerView: 4}, 1160:{slidesPerView: 5},1333:{slidesPerView:6, spaceBetween:5}}}> 
            <SwiperSlide><CardMd
            src={cardmd7}
            country="cayman island"
            texth3="2 Nights PACKAGE All Inclusive"
            textp="À partir de 577€/personne - 3 jours"
            score="5.0"
        /> </SwiperSlide>
        <SwiperSlide><CardMd
            src={cardmd8}
            country="cayman island"
            texth3="2 Nights PACKAGE All Inclusive"
            textp="À partir de 577€/personne - 3 jours"
            score="5.0★"
        /></SwiperSlide>
        <SwiperSlide><CardMd
            src={cardmd9}
            country="cayman island"
            texth3="2 Nights PACKAGE All Inclusive"
            textp="À partir de 577€/personne - 3 jours"
            score="5.0★"
        /></SwiperSlide>
        <SwiperSlide><CardMd
            src={cardmd10}
            country="cayman island"
            texth3="2 Nights PACKAGE All Inclusive"
            textp="À partir de 577€/personne - 3 jours"
            score="5.0★"
        /></SwiperSlide>
        <SwiperSlide><CardMd
            src={cardmd11}
            country="cayman island"
            texth3="2 Nights PACKAGE All Inclusive"
            textp="À partir de 577€/personne - 3 jours"
            score="5.0★"
        /></SwiperSlide>
        <SwiperSlide><CardMd
            src={cardmd12}
            country="cayman island"
            texth3="2 Nights PACKAGE All Inclusive"
            textp="À partir de 577€/personne - 3 jours"
            score="5.0★"
        /></SwiperSlide>
        </Swiper>
        </section>
        <section>
        <Title
            title="Destinos destacados de Airbnb Más"
            info="Viajes de varios días organizados por expertos locales con actividades, comidas y alojamiento incluidos"></Title>
        </section>
    </div>
    </div>
);
};

export default Home;
