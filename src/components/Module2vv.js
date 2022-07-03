import Photo from './Photo';
import '../styles/components/Module2vv.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Module2vv = (props) => {
  //const { album } = props;
  const [albumLoc, setAlbumLoc] = useState([]);
  const { album } = useSelector((state) => state.albumReducer);
  useEffect(() => {
    setAlbumLoc(album);
  }, [album]);
  console.log('Album2vv', album);
  return (
    <div className="module2vv">
      <Photo src={album[0]} x="50%" y="100%" />
      <Photo src={album[1]} x="50%" y="100%" />
    </div>
  );
};

export default Module2vv;
