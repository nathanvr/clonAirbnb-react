import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import Form from '../components/Form';
import CardSm from '../components/CardSm';
import CardMd from '../components/CardMd';
import rec1 from '../images/cards/rectangle4.0.png';
import rec2 from '../images/cards/rectangle4.1.png';
import rec3 from '../images/cards/rectangle4.2.png';
import cardmd1 from '../images/cards/cardmd1.png';
import cardlg1 from '../images/cards/cardlg1.png';
import CardLg from '../components/CardLg';

const Home = () => {
  return (
    <div className="container-home">
      <div className="header">
        <Form></Form>
      </div>
      <div className="main">
        <section>
          <Title title="Explorar Airbnb"></Title>
          <CardSm text="Logements" src={rec1}></CardSm>
          <CardSm text="Expériences" src={rec2}></CardSm>
          <CardSm text="Aventures" src={rec3}></CardSm>
        </section>
        <section>
          <Title
            title="Alojamientos Airbnb Plus"
            info="Una selección de alojamientos contrastados según criterios de calidad y diseño"></Title>
          <CardMd
            src={cardmd1}
            country="cayman island"
            texth3="2 Nights PACKAGE All Inclusive"
            textp="À partir de 577€/personne - 3 jours"
            score="5.0★"
          />
        </section>
        <section>
          <Title
            title="Descubre las aventuras de Airbnb"
            info="Viajes de varios días organizados por expertos locales con actividades, comidas y alojamiento incluidos"></Title>
          <Button text="prueba" cond="true" />
          <Button text="pruebo" />
        </section>
        <section>
          <Title title="Alojamientos en todo el mundo"></Title>
          <CardLg
            src={cardlg1}
            textbtn="superhost"
            city="City name"
            score="4.9"
            text="À partir de 577€/personne - 3 jours"
          />
        </section>
        <section>
          <Title
            title="Experiencias altamente calificadas"
            info="Viajes de varios días organizados por expertos locales con actividades, comidas y alojamiento incluidos"></Title>
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
