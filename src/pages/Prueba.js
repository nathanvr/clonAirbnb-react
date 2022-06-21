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
<<<<<<< HEAD
=======
import AlbumSwiper from '../components/AlbumSwiper';
import { useMediaQuery } from 'react-responsive';
import Album from '../components/Album';
import AlbumModal from '../components/AlbumModal';

// Import Swiper styles
import 'swiper/css';
>>>>>>> 2422d41b137ca47cebcc1df4601361de39a1c643

const Prueba = () => {
  const images = Loader();
  const img = new Image();
  img.src = cardmd1;
  const width = img.width;
  const height = img.height;

  const images1 = images.slice(0, 5);
  const images2 = images.slice(5, 9);

<<<<<<< HEAD
  console.log('images: ', images);
  return (
    <div>
      <p>{`${img} lol ${height}`}</p>
=======
  const lol = useMediaQuery({ query: '(min-width: 740px)' });
  return (
    <div>
      {lol && <p>You are a desktop or laptop</p>}
      <p>{`${lol} lol ${height}`}</p>
>>>>>>> 2422d41b137ca47cebcc1df4601361de39a1c643
      <Photo src={img.src} />
      <Module5xx album={images1} />
      <Module3hv album={images2} />
      <Module3vv album={images2} />
      <Module2vv album={images2} />
      <Module2hh album={images2} />
      <Module1xx album={images2} />
<<<<<<< HEAD
=======
      <AlbumSwiper album={images} />
      <Album />
      <AlbumModal />
>>>>>>> 2422d41b137ca47cebcc1df4601361de39a1c643
    </div>
  );
};
export default Prueba;
<<<<<<< HEAD

/*
const album = Loader('cabañita');
  album.map((item => {
    return <Photo x="200px" y="200px" src={item} />
  }))
*/
=======
>>>>>>> 2422d41b137ca47cebcc1df4601361de39a1c643
