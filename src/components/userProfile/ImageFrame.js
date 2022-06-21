import { useSelector } from 'react-redux';
import '../../styles/components/ImageFrame.scss';

const ImageFrame = () => {
  const user = useSelector((state) => state.userReducer);
  console.log('UserImage', user);

  return (
    <div className="image-center">
      <img className="image-frame" src={user.image} alt={user.name}></img>
    </div>
  );
};

export default ImageFrame;
