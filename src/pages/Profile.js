import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePill from '../components/ProfilePill';
import { getUser } from '../store/reducers/User.reducer';
import ImageFrame from '../components/userProfile/ImageFrame';
import { Text } from '@mantine/core';
import '../styles/components/Profile.scss';
import '../styles/components/ImageFrame.scss';
import DeleteFrame from '../components/userProfile/Deleteframe';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <div className="profile">
      <div className="item-flex">
        <h1 style={{textAlign:"center"}}>Información personal</h1>
        <div className='image-frames'>
          <ImageFrame />
        </div>
        <ProfilePill />
      </div>
      <div className="item-flex2">
        <div className="description">
          <h2>¿Qué datos se pueden editar?</h2>
          <Text>
            No se pueden modificar los datos que Airbnb utiliza para verificar
            tu identidad. Puedes modificar tus datos personales y de contacto,
            pero podríamos pedirte que verifiques tu identidad la próxima vez
            que hagas una reservación o crees un anuncio.
          </Text>
        </div>
        <div className="description">
          <h2>¿Qué información se comparte con los demás?</h2>
          <Text>
            Airbnb solo proporciona los datos de contacto de los anfitriones y
            los huéspedes una vez que la reservación se haya confirmado.
            </Text>
        </div>
        <div className='delete-frame'>
        <DeleteFrame/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
