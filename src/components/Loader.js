<<<<<<< HEAD
const Loader = () => {
=======
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

>>>>>>> 2422d41b137ca47cebcc1df4601361de39a1c643
  function importAll(r) {
    let images = [];
    r.keys().map((item, index) => {
      images[index] = r(item);
<<<<<<< HEAD
=======
      console.log('!!!switch');
>>>>>>> 2422d41b137ca47cebcc1df4601361de39a1c643
    });
    return images;
  }

<<<<<<< HEAD
  return importAll(
    require.context('../images/cabañita', false, /\.(png|jpe?g|svg|webp)$/)
  );
=======
  switch (album.albumId) {
    case '1':
      dispatch(changeAlbum([album1]));
    default:
      dispatch(changeAlbum([album1]));
  }
>>>>>>> 2422d41b137ca47cebcc1df4601361de39a1c643
};

export default Loader;
