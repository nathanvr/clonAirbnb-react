import Photo from './Photo';
import '../styles/components/Module5xx.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Module5xx = (props) => {
  const { album } = props;
  //const { album } = useSelector((state) => state.albumReducer);

  return (
    <div className="module5xx">
      <Photo src={album[0]} x="50%" y="100%" />
      <div className="module5_x">
        <Photo src={album[1]} x="50%" y="50%" />
        <Photo src={album[2]} x="50%" y="50%" />
        <Photo src={album[3]} x="50%" y="50%" />
        <Photo src={album[4]} x="50%" y="50%" />
      </div>
    </div>
  );
};

export default Module5xx;
