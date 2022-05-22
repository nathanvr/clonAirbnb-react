import { useMediaQuery } from 'react-responsive';
import AlbumSwiper from './AlbumSwiper';
import Module5xx from './Modele5xx';
import { useSelector } from 'react-redux';

const Album = () => {
  const album = useSelector((state) => state.albumsReducer);
  const lol = useMediaQuery({ query: '(min-width: 740px)' });

  console.log(lol, album);
  return lol ? (
    <Module5xx album={album.album} />
  ) : (
    <AlbumSwiper album={album.album} />
  );
};

export default Album;
