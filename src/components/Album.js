import { useMediaQuery } from 'react-responsive';
import AlbumSwiper from './AlbumSwiper';
import Module5xx from './Modele5xx';
import { useSelector } from 'react-redux';

const Album = (props) => {
  const { album } = props;
  //const album = useSelector((state) => state.bookingSiteReducer);

  console.log('Booking album!!: ', album);
  const lol = useMediaQuery({ query: '(min-width: 740px)' });

  console.log(lol, album);
  return (
    <div>
      {lol ? <Module5xx album={album} /> : <AlbumSwiper album={album} />}
    </div>
  );
};

export default Album;
