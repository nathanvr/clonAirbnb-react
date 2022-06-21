import { useEffect } from 'react';
import { userChange } from '../store/reducers/User.reducer';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePill from '../components/ProfilePill';
import { getUser } from '../store/reducers/User.reducer';
import ImageFrame from '../components/userProfile/ImageFrame';
import '../styles/components/Profile.scss';
import '../styles/components/ImageFrame.scss';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <div className="profile">
      <div className="item-flex">
        <h1>Informacion personal</h1>
        <div>
          <ImageFrame />
        </div>
        <ProfilePill />
      </div>
      <div className="item-flex">
        <div className="description">
          <h2>¿Qué datos se pueden editar?</h2>
          <p>
            No se pueden modificar los datos que Airbnb utiliza para verificar
            tu identidad. Puedes modificar tus datos personales y de contacto,
            pero podríamos pedirte que verifiques tu identidad la próxima vez
            que hagas una reservación o crees un anuncio.
          </p>
        </div>
        <div className="description">
          <h2>¿Qué información se comparte con los demás?</h2>
          <p>
            Airbnb solo proporciona los datos de contacto de los anfitriones y
            los huéspedes una vez que la reservación se haya confirmado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
