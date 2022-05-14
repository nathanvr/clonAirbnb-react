import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import BrandIcon from './BrandIcon';
import LoginModal from './LoginModal';

const Navbar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);

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
          <Link to="/anfitrion" onClick={() => setShow(!show)}>
            Conviértete en un anfitrión
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/experiencia" onClick={() => setShow(!show)}>
            Crea tu experiencia
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#">Ayuda</Link>
        </li>
        <li className="nav-item">
          <LoginModal />
        </li>
        <li className="nav-item">
          <Link to="#">Acceso</Link>
        </li>
        <button className="close">
          <FaTimes></FaTimes>
        </button>
      </ul>
      <button className="open" onClick={() => setShow(!show)}>
        <BsThreeDotsVertical></BsThreeDotsVertical>
      </button>
    </div>
  );
};

export default Navbar;
