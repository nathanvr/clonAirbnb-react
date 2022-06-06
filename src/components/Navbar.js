import React, { useEffect, useState } from 'react';

import { Link, useLocation} from 'react-router-dom';

import { FaTimes } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import BrandIcon from './BrandIcon';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { signOutSuccess } from '../store/reducers/User.reducer';
import { getUser } from '../store/reducers/User.reducer';
import { Menu, Divider, Avatar } from '@mantine/core';
const Navbar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const {token, isLoggedIn, userData}=useSelector((state)=>state.userReducer)
  const dispatch = useDispatch();
 
  const handleSignOut = () => {
    dispatch(logOut());
  };

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
        ): (
          <div className='navbar-user'>
            <Menu placement="end" withArrow control={
            <div className={location.pathname === '/' ? 'info-user-home' :
                                                        'info-user'}>
              <Avatar radius="xl" />
              <p>Nombre de usuario</p>
              </div>}  trigger="hover" delay={500}>
            <Menu.Item >Ver tu perfil</Menu.Item>
            <Menu.Item >Ver tus reservas</Menu.Item>
            <Divider />
            <Menu.Item onClick={handleSignOut}><Link to="/">Cerrar Sesión</Link></Menu.Item>
            </Menu>
          </div>
        )}
      </ul>
      <button className="open" onClick={() => setShow(!show)}>
        <BsThreeDotsVertical></BsThreeDotsVertical>
      </button>
    </div>
  );
};

export default Navbar;
