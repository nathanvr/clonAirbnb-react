import React from 'react';
import Photo from '../components/Photo';
import cardmd1 from '../images/cards/cardmd1.png';
import Loader from '../components/Loader';
import Module5xx from '../components/Modele5xx';
import Module3hv from '../components/Module3hv';
import Module3vv from '../components/Module3vv';
import Module2vv from '../components/Module2vv';
import Module2hh from '../components/Module2hh';
import Module1xx from '../components/Module1xx';
import AlbumSwiper from '../components/AlbumSwiper';
import { useMediaQuery } from 'react-responsive';
import Album from '../components/Album';
import AlbumModal from '../components/AlbumModal';

// Import Swiper styles
import 'swiper/css';

const Prueba = () => {
  const images = Loader();
  const img = new Image();
  img.src = cardmd1;
  const width = img.width;
  const height = img.height;

  const images1 = images.slice(0, 5);
  const images2 = images.slice(5, 9);

  const lol = useMediaQuery({ query: '(min-width: 740px)' });
  return (
    <div>
      {lol && <p>You are a desktop or laptop</p>}
      <p>{`${lol} lol ${height}`}</p>
      <Photo src={img.src} />
      <Module5xx album={images1} />
      <Module3hv album={images2} />
      <Module3vv album={images2} />
      <Module2vv album={images2} />
      <Module2hh album={images2} />
      <Module1xx album={images2} />
      <AlbumSwiper album={images} />
      <Album />
      <AlbumModal />
    </div>
  );
};
export default Prueba;
