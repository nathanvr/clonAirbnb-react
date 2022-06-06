import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import BrandIcon from './BrandIcon';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, userDefine } from '../store/reducers/User.reducer';
const Navbar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logOut());
  };
  useEffect(() => {
    user.signed;
  }, []);
  return (
    <div
      className={
        location.pathname === '/'
          ? 'navbar navbar-home'
          : 'navbar navbar-default'
      }>
      <div className="logo">
        <Link to="/" onClick={() => setShow(show)}>
          <BrandIcon
            className="nav--logo"
            iconType={faAirbnb}
            colorIcon={location.pathname === '/' ? 'white' : 'var(--red)'}
            sizeIcon="40px"
          />
        </Link>
      </div>
      <ul className="nav-menu" id={show ? 'hidden' : ''}>
        <li className="nav-item">
          <Link to="#">Français (FR)</Link>
        </li>
        <li className="nav-item">
          <Link to="#">EUR </Link>
        </li>
        <li className="nav-item">
          <Link to="/host" onClick={() => setShow(!show)}>
            Conviértete en un anfitrión
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#">Ayuda</Link>
        </li>
        {user.signed === false ? (
          <>
            <li className="nav-item">
              <RegisterModal sitio="Registro" />
            </li>
            <li className="nav-item">
              <LoginModal sitio="Acceso" />
            </li>
            <button className="close">
              <FaTimes></FaTimes>
            </button>
          </>
        ) : (
          <li onClick={handleSignOut}>
            <Link to="/">Sign out</Link>
          </li>
        )}
      </ul>
      <button className="open" onClick={() => setShow(!show)}>
        <BsThreeDotsVertical></BsThreeDotsVertical>
      </button>
    </div>
  );
};

export default Navbar;
