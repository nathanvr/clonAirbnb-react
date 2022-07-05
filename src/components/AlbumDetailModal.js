import { Modal } from '@mantine/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  faAngleLeft,
  faArrowUpFromBracket,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import BrandIcon from './BrandIcon';
import TextIcon from './TextIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination } from 'swiper';
import PhotoAlbumDetail from './PhotoAlbumDetail';
import '../styles/components/AlbumDetailModal.scss';

const AlbumDetailModal = (props) => {
  const { site } = props;
  const { album } = useSelector((state) => state.albumReducer);
  const [modalOpen, setModalOpen] = useState(false);

  const slices = album.map((item, index) => {
    console.log('photo', index, ': ', item);
    return (
      <SwiperSlide
        tag="li"
        //wrapperTag="ul"
        key={index}
        virtualIndex={index}
        className="swiper-slide">
        <PhotoAlbumDetail
          style={{ alignSelf: 'center' }}
          src={item}
          key={index}
        />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Link to="#" onClick={() => setModalOpen(true)}>
        {site}
      </Link>
      <Modal
        styles={{
          root: { padding: '0px' },
          inner: { padding: '0px', backgroundColor: 'black' },
          modal: { backgroundColor: 'black', padding: '0px' },
        }}
        size="full"
        withCloseButton={false}
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        overlayColor="black"
        overlayOpacity={0.55}
        overlayBlur={3}>
        <div className="album-modal-container">
          <div className="album-modal-header">
            <BrandIcon
              iconType={faAngleLeft}
              colorIcon="#FFFFFF"
              sizeIcon="14px"
              text="Cerrar"
            />
            <div>
              <TextIcon
                iconType={faArrowUpFromBracket}
                colorIcon="#FFFFFF"
                sizeIcon="14px"
              />
              <TextIcon
                iconType={faHeart}
                colorIcon="#FFFFFF"
                sizeIcon="14px"
              />
            </div>
          </div>
          <div>
            <Swiper
              tag="div"
              wrapperTag="ul"
              spaceBetween={0}
              slidesPerView={1}
              naviggation
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
      </Modal>
    </>
  );
};

export default AlbumDetailModal;
