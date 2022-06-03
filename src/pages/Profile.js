import { useEffect } from 'react';
import { userChange } from '../store/reducers/User.reducer';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePill from '../components/ProfilePill';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);

  return (
    <div>
      <div>
        <h1>Informacion personal</h1>
        <ProfilePill></ProfilePill>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
