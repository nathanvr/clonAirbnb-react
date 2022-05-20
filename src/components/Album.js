import { useMediaQuery } from 'react-responsive';
import AlbumSwiper from './AlbumSwiper';
import Module5xx from './Modele5xx';
import Loader from './Loader';

const Album = () => {
  const images = Loader();
  const lol = useMediaQuery({ query: '(min-width: 740px)' });

  console.log(lol, images);
  return lol ? <Module5xx album={images} /> : <AlbumSwiper album={images} />;
};

export default Album;
