import { useSelector } from 'react-redux';
import '../../styles/components/ImageFrame.scss';

const ImageFrame = () => {
  const user = useSelector((state) => state.userReducer);
  console.log(user.image)
  return (
    <div className="image-center">
      {user.image === undefined ? (<img className="image-frame" src="https://res.cloudinary.com/dhacdmuvs/image/upload/v1656033094/user_z5tc8r.jpg" alt={user.name}></img>): ( <img className="image-frame" src={user.image} alt={user.name}></img>) }
    </div>
  );
};

export default ImageFrame;
