import '../styles/components/Photo.scss';
import { useDispatch } from 'react-redux';

const Photo = (props) => {
  const { src, x, y, index } = props;
  return (
    <div
      style={{ width: x, height: y }}
      className="photo"
      onClick={(e) => console.log('EventePhoto: ', e)}>
      <img id={`${index}`} loading="lazy" src={src} alt=""></img>
    </div>
  );
};

export default Photo;
