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
import {
  Menu,
  Divider,
  Avatar,
  UnstyledButton,
  Text,
  Group,
  createStyles,
} from '@mantine/core';
import { User, Folder, TransferOut } from 'tabler-icons-react';

const Navbar = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const [show, setShow] = useState(false);
  const { isLoggedIn, name, role, image } = useSelector(
    (state) => state.userReducer
  );


  const handleSignOut = () => {
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
                      <UnstyledButton
                      >
                      <Group>
                      <Avatar radius="xl" size={30} src={image === undefined ? null : image} />
                      <div>
                      <Text
                        component="span"
                        align="center"
                        color={location.pathname === '/' ? 'white' : 'gray'}
                        size="md"
                        weight={400}
                        style={{ fontFamily: 'Roboto, sans-serif' }}>{name} {}</Text>
                      </div>
                      </Group>
                      </UnstyledButton>
                  
                </div>
              }
              trigger="hover"
              delay={500}>
              {role === 'guest' ? (
                <div>
                <Link to="/profile">
                <Menu.Item>
                <Group>
                <User size={17} strokeWidth={2} color={'black'} /> 
                <div>
                  <Text size="sm">Ver tu perfil</Text>
                </div>
                </Group>
                </Menu.Item>
                </Link>
                <Link to="/host/dashboard">
                <Menu.Item>
                <Group>
                    <Folder size={17} strokeWidth={2} color={'black'} />  <div>
                  <Text size="sm">Ver tus reservas</Text>
                </div>
                </Group>
                </Menu.Item> 
                </Link>
                <Divider />
                <Link to="/">
                <Menu.Item onClick={handleSignOut}>
                <Group>

                      <TransferOut
                        size={15}
                        strokeWidth={2}
                        color={'#FF0000'}
                      />{' '}
                      <div>
                  <Text  color="red" size="sm">Cerrar sesión</Text>
                      </div>
                </Group>

                  
                </Menu.Item>
                </Link>
              </div>
              ) : (
                <div>
                  <Link to="/profile">
                  <Menu.Item>
                  <Group>
                  <User size={17} strokeWidth={2} color={'black'} /> 
                  <div>
                    <Text size="sm">Ver tu perfil</Text>
                  </div>
                  </Group>
                  </Menu.Item>
                  </Link>
                  <Link to="/host/dashboard">
                  <Menu.Item>
                  <Group>
                      <Folder size={17} strokeWidth={2} color={'black'} />  <div>
                    <Text size="sm">Ver tus sitios</Text>
                  </div>
                  </Group>
                  </Menu.Item> 
                  </Link>
                  <Divider />
                  <Link to="/">
                  <Menu.Item onClick={handleSignOut}>
                  <Group>

                        <TransferOut
                          size={15}
                          strokeWidth={2}
                          color={'#FF0000'}
                        />{' '}
                        <div>
                    <Text  color="red" size="sm">Cerrar sesión</Text>
                        </div>
                  </Group>

                    
                  </Menu.Item>
                  </Link>
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

