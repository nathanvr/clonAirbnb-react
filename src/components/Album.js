import { useMediaQuery } from 'react-responsive';
import AlbumSwiper from './AlbumSwiper';
import Module5xx from './Modele5xx';
import { useSelector } from 'react-redux';

const Album = (props) => {
  const { album } = props;
  //const { album } = useSelector((state) => state.albumReducer);
  const lol = useMediaQuery({ query: '(min-width: 740px)' });

  return (
    <>{lol ? <Module5xx album={album} /> : <AlbumSwiper album={album} />}</>
  );
};

export default Album;
