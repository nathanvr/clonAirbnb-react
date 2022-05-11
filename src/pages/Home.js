import React from "react";
import Title from "../components/Title"
import Header from "../components/Header";

const Home = () =>{
    return(
        <div className="container-home">
            <div className="header">
                <Header></Header>
            </div>
            <div className="main">
                <section>
                <Title title="Explorar Airbnb"></Title>
                </section>
                <section>
                <Title title="Alojamientos Airbnb Plus" info="Una selección de alojamientos contrastados según criterios de calidad y diseño"></Title>
                </section>
                <section>
                <Title title="Descubre las aventuras de Airbnb" info="Viajes de varios días organizados por expertos locales con actividades, comidas y alojamiento incluidos"></Title>
                </section>
                <section>
                <Title title="Alojamientos en todo el mundo"></Title>
                </section>
                <section>
                <Title title="Experiencias altamente calificadas" info="Viajes de varios días organizados por expertos locales con actividades, comidas y alojamiento incluidos"></Title>
                </section>
                <section>
                <Title title="Destinos destacados de Airbnb Más" info="Viajes de varios días organizados por expertos locales con actividades, comidas y alojamiento incluidos"></Title>
                </section>            
            </div>
        </div>
    )
}
export default Home;
