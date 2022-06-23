import Photo from './Photo';
import '../styles/components/Module1xx.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Module1xx = () => {
  const [albumLoc, setAlbumLoc] = useState([]);
  const { album } = useSelector((state) => state.albumReducer);
  //setAlbumLoc(album);
  useEffect(() => {
    setAlbumLoc(album);
  }, [album]);
  
  console.log('Album1xx', album);

  //const { album } = props;
  return (
    <div className="module1xx">
      <Photo src={album[0]} x="100%" y="100%" />
    </div>
  );
};

export default Module1xx;
