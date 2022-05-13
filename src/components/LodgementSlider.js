import React from 'react';
import CardLg from '../components/CardLg';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper';

import img1 from '../images/cards/Rectangle 7.png';
import img2 from '../images/cards/Rectangle 7.2.png';
import img3 from '../images/cards/Rectangle 7.3.png';
import img4 from '../images/cards/Rectangle 7.4.png';
import img5 from '../images/cards/Rectangle 7.5.png';
import img6 from '../images/cards/Rectangle 7.6.png';
import img7 from '../images/cards/Rectangle 7.7.png';
import img8 from '../images/cards/Rectangle 7.8.png';

const LodgementSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <CardLg
            src={img1}
            textbtn="superhost"
            city="City name"
            score="4.9"
            text="À partir de 577€/personne - 3 jours"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardLg
            src={img2}
            textbtn="superhost"
            city="City name"
            score="4.9"
            text="À partir de 577€/personne - 3 jours"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardLg
            src={img3}
            textbtn="superhost"
            city="City name"
            score="4.9"
            text="À partir de 577€/personne - 3 jours"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardLg
            src={img4}
            textbtn="superhost"
            city="City name"
            score="4.9"
            text="À partir de 577€/personne - 3 jours"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardLg
            src={img5}
            textbtn="superhost"
            city="City name"
            score="4.9"
            text="À partir de 577€/personne - 3 jours"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardLg
            src={img6}
            textbtn="superhost"
            city="City name"
            score="4.9"
            text="À partir de 577€/personne - 3 jours"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardLg
            src={img7}
            textbtn="superhost"
            city="City name"
            score="4.9"
            text="À partir de 577€/personne - 3 jours"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardLg
            src={img8}
            textbtn="superhost"
            city="City name"
            score="4.9"
            text="À partir de 577€/personne - 3 jours"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LodgementSlider;
