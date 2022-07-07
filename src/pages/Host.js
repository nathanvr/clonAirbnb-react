import React from "react";
import image from "../images/super-host.jpg";
import RegisterModal from "../components/RegisterModal"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const Host = () =>{
    return (
        <div className="container-host">
        <div className="container-host1">
            <div className="info-box">
                <div className="buttons-host">
                <h1>Abre tus puertas como anfitrión</h1>
                <button><RegisterModal sitio="Empieza ahora" /></button>
                </div>
                <div className="image-host">
                <img src={image} alt="superhost" loading="lazy"></img>
                </div>
            </div>
        </div>
        <div className="swipper-host">
            <h2>Brinda servicios de anfitrión
donde quieras, cuando quieras.</h2>
        <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://res.cloudinary.com/dhacdmuvs/image/upload/v1657120781/Imagen1_qk00fn.png" alt="a" loading="lazy"></img></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dhacdmuvs/image/upload/v1657120782/Imagen2_ibmwdg.png" alt="a" loading="lazy"></img></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dhacdmuvs/image/upload/v1657120781/Imagen3_c7zpfl.png" alt="a" loading="lazy"></img></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dhacdmuvs/image/upload/v1657120781/Imagen4_mszx0a.png" alt="a" loading="lazy"></img></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dhacdmuvs/image/upload/v1657120781/Imagen5_t3rccx.png" alt="a" loading="lazy"></img></SwiperSlide>
        <SwiperSlide><img src="https://res.cloudinary.com/dhacdmuvs/image/upload/v1657120781/Imagen6_bkqra3.png" alt="a" loading="lazy"></img></SwiperSlide>
      </Swiper>
        </div>
        <div className="help-section">
            <h2>Ayuda a albergar a 100 000 refugiados que huyen de Ucrania</h2>
        </div>
        </div>
    )
}

export default Host;
