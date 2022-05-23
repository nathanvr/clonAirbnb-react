import { Swiper, SwiperSlide } from 'swiper/react';
import Loader from './Loader';
import Photo from './Photo';

const AlbumSwiper = (props) => {
  const { album } = props;
  return (
    <div className="albumSwiper">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {album.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Photo
                style={{ maxHeight: '495px' }}
                src={item}
                x="100vw"
                y="calc(100vw * 0.66)"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default AlbumSwiper;
