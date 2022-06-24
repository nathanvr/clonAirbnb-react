import React, { useEffect, useState } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
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
import { User, Folder, TransferOut } from 'tabler-icons-react';
const Navbar = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const [show, setShow] = useState(false);
  /*const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');*/
  //const userData = useSelector((state) => state.userReducer);
  const { isLoggedIn, name, role, image } = useSelector(
    (state) => state.userReducer
  );
  console.log(image)
  //console.log('userData_nav: ', userData);

  /*useEffect(() => {
    setIsLoggedIn(userData.isLoggedIn);
    setName(userData.name);
    setRole(userData.role);
  }, [userData]);*/

  const handleSignOut = () => {
    console.log('!!Se lanzo el sign Out!!');
    dispatch(signOutSuccess());
    <Navigate to="/" replace={true} />;
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
          <Link to="#">Ayuda</Link>
        </li>
        {isLoggedIn ? (
          <div className="navbar-user">
            <Menu
              placement="end"
              withArrow
              control={
                <div
                  className={
                    location.pathname === '/' ? 'info-user-home' : 'info-user'
                  }>
                    <div className='avatar1'>
                      <div>
                  <Avatar radius="xl" size={30} src={image === undefined ? null : image} /></div>
                  <div>
                  {name}
                  </div>
                  </div>
                  
                </div>
              }
              trigger="hover"
              delay={500}>
              {role === 'guest' ? (
                <div>
                  <Menu.Item>
                    <Link to="/profile">Ver tu perfil</Link>
                  </Menu.Item>
                  <Menu.Item>Ver tus reservas</Menu.Item>
                  <Menu.Item>Mensajes</Menu.Item>
                  <Divider />
                  <Menu.Item onClick={handleSignOut}>
                    <Link to="/">Cerrar Sesión</Link>
                  </Menu.Item>
                </div>
              ) : (
                <div>
                  <Menu.Item>
                    <Link to="/profile">
                      <User size={15} strokeWidth={2} color={'black'} /> Ver tu
                      perfil
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/host/dashboard">
                      <Folder size={15} strokeWidth={2} color={'black'} /> Ver
                      tus sitios
                    </Link>
                  </Menu.Item>
                  <Menu.Item>Mensajes</Menu.Item>
                  <Divider />
                  <Menu.Item onClick={handleSignOut}>
                    <Link to="/">
                      <span className="logut">
                        <TransferOut
                          size={15}
                          strokeWidth={2}
                          color={'#FF0000'}
                        />{' '}
                        Cerrar Sesión
                      </span>
                    </Link>
                  </Menu.Item>
                </div>
              )}
            </Menu>
          </div>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/host" onClick={() => setShow(!show)}>
                Conviértete en un anfitrión
              </Link>
            </li>
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
        )}
      </ul>
      <button className="open" onClick={() => setShow(!show)}>
        <BsThreeDotsVertical></BsThreeDotsVertical>
      </button>
    </div>
  );
};

export default Navbar;
