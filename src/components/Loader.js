import { useSelector, useDispatch } from 'react-redux';
import { changeAlbum } from '../store/reducers/Album.reducer';

const Loader = () => {
  const dispatch = useDispatch();
  const album = useSelector((state) => state.albumReducer);

  const album1 = changeAlbum([
    importAll(
      require.context('../images/cabañita', false, /\.(png|jpe?g|svg|webp)$/)
    ),
  ]);

  function importAll(r) {
    let images = [];
    r.keys().map((item, index) => {
      images[index] = r(item);
      console.log('!!!switch');
    });
    return images;
  }

  switch (album.albumId) {
    case '1':
      dispatch(changeAlbum([album1]));
    default:
      dispatch(changeAlbum([album1]));
  }
};

export default Loader;
