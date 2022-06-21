import '../styles/components/CardMd.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";

const CardMd = ({ service }) => {
  const options2 = { style: 'currency', currency: 'COP' };
  const numberFormat2 = new Intl.NumberFormat('es-CO', options2);
  const price=numberFormat2.format(service.price)
  return (
      <div className="bg-cardmd" key={service._id}>
        <div className="rectangle-md">
          {service.images.toString().split(",").length===0 && <div>
            
            <img src='https://res.cloudinary.com/dhacdmuvs/image/upload/v1655420849/notavailable_d2k2w8.png' alt="nophoto" loading='lazy'></img>
            </div>}
          {service.images.toString().split(",").length >0 &&
          <div>
          <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="swiper"
        >
            {service.images.toString().split(",").map((slide, index)=>(
                <SwiperSlide key={index} virtualIndex={index} className="swiper-slide">
                          <img
                          loading="lazy"
                          src={slide}
                          alt={slide}></img>
                </SwiperSlide>
            ))}
        </Swiper>
            </div>}
        </div>
        <div className='head'>
      <h2 className="country">
        {service.city} / {service.country}
      </h2>
      {service.reviews.length === 0 &&
          <p className='reviews'>Nuevo ★</p>
      }
      
      </div>
      <h3 className="cmdtexth3">{service.title}</h3>
      <p className="cmdtextp"><span id='price'>{price}</span> /noche</p>
    </div>
  );
};

export default CardMd;
