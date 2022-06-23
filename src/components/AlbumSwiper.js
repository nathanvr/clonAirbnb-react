import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import { Pagination } from 'swiper';
import Photo from './Photo';

const AlbumSwiper = (props) => {
  const { album } = props;

  const slices = album.map((item, index) => {
    console.log('photo', index, ': ', item);
    return (
      <SwiperSlide
        tag="li"
        //wrapperTag="ul"
        key={index}
        //virtualIndex={index}
        className="swiper-slide">
        <Photo
          style={{ maxHeight: '495px', alignSelf: 'center' }}
          src={item}
          x="100vw"
          y="calc(100vw * 0.66)"
          index={index}
        />
      </SwiperSlide>
    );
  });

  return (
    <div className="swiper-container albumSwiper">
      <div className="swiper-wrapper">
        <Swiper
          tag="div"
          wrapperTag="ul"
          spaceBetween={0}
          slidesPerView={1}
          //naviggation
          onSlideChange={() => console.log('slide change')}
          pagination={{
            el: '.swiper-pagination1',
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          onClick={(e) => console.log('EventALbum: ', e)}
          onSwiper={(swiper) => console.log(swiper, 'album: ', album)}>
          {slices}
        </Swiper>
      </div>
    </div>
  );
};
export default AlbumSwiper;
