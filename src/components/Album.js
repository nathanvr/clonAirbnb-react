import { useMediaQuery } from 'react-responsive';
import AlbumSwiper from './AlbumSwiper';
import Module5xx from './Modele5xx';
import { useSelector } from 'react-redux';

const Album = () => {
  const lol = useMediaQuery({ query: '(min-width: 740px)' });

  return <>{lol ? <Module5xx /> : <AlbumSwiper />}</>;
};

export default Album;
