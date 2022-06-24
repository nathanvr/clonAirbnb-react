import Photo from './Photo';
import '../styles/components/Module3hv.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Module3hv = (props) => {
  const [albumLoc, setAlbumLoc] = useState([]);
  const { album } = useSelector((state) => state.albumReducer);
  useEffect(() => {
    setAlbumLoc(album);
  }, []);
  //const { album } = props;
  console.log('Album3hv', album);
  return (
    <div className="module3hv">
      <div className="module3h_">
        <Photo src={album[0]} x="100%" y="50%" />
        <Photo src={album[1]} x="100%" y="50%" />
      </div>
      <Photo src={album[2]} x="50%" y="100%" />
    </div>
  );
};

export default Module3hv;
