import Photo from './Photo';
import '../styles/components/Module3vv.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Module3vv = () => {
  //const { album } = props;
  const [albumLoc, setAlbumLoc] = useState([]);
  const { album } = useSelector((state) => state.albumReducer);
  useEffect(() => {
    setAlbumLoc(album);
  }, []);
  console.log('Album3vv', album);
  return (
    <div className="module3vv">
      <Photo src={album[0]} x="66%" y="100%" />
      <div className="module3_v">
        <Photo src={album[1]} x="100%" y="50%" />
        <Photo src={album[2]} x="100%" y="50%" />
      </div>
    </div>
  );
};

export default Module3vv;
