import React from 'react';
import Photo from '../components/Photo';
import cardmd1 from '../images/cards/cardmd1.png';
import Loader from '../components/Loader';
import Module5xx from '../components/Modelo5xx';
import Module3hv from '../components/Module3hv';

const Prueba = () => {
  const images = Loader();
  const img = new Image();
  img.src = cardmd1;
  const width = img.width;
  const height = img.height;

  const images1 = images.slice(0, 5);
  const images2 = images.slice(5, 9);
  console.log('images: ', images);
  return (
    <div>
      <p>{`${img} lol ${height}`}</p>
      <Photo src={img.src} />
      <Module5xx album={images1} />
      <Module3hv album={images2} />
    </div>
  );
};
export default Prueba;

/*
const album = Loader('cabañita');
  album.map((item => {
    return <Photo x="200px" y="200px" src={item} />
  }))
*/
