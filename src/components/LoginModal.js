import '../styles/components/LoginModal.scss';
import Modal from 'react-modal/lib/components/Modal';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  faFacebook,
  faGoogle,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import BrandIcon from './BrandIcon';

Modal.setAppElement('#root');

const LoginModal = (props) => {
  const { sitio } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const customStyles = {
    content: {
      position: 'absolute',
      margin: 'auto',
      width: '400px',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
    },
  };
  return (
    <div>
      <Link to="#" onClick={() => setModalOpen(true)}>
        {sitio}
      </Link>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}>
        <div className="loginFormContainer">
          <div className="loginForm__header">
            <button onClick={() => setModalOpen(false)}> X </button>
            <h2>Iniciar sesion</h2>
          </div>
          <div></div>
          <form>
            <div className="form-row">
              <div className="form__button__country">
                <label>
                  <div>
                    <div className="form__button__country--text">
                      Correo o numero de telefono
                    </div>
                  </div>
                </label>
                <div className="form-group">
                  <input type='text'>
                  </input>
                 
                </div>
              </div>

              <div className="form__group__label">
                <input
                  className="form__control--label"
                  placeholder="Contrasenia"
                  type='password'
                />
              </div>
            </div>

            <div className="form__button__continue">
              <button className="form__button--continue">Iniciar sesion</button>
            </div>
          </form>
          <div className="sectioner">
            <div className="section__divider" />
            <p>o</p>
            <div className="section__divider" />
          </div>

          <div className="form__buttons__sm">
            <button
              type="submit"
              className="form__buttons__sm__f btn btn-outline-dark">
              <div className="form__buttons__sm__f__content">
                <div className="form__buttons__sm__f__content--icon">
                  <BrandIcon
                    iconType={faFacebook}
                    colorIcon="black"
                    sizeIcon="12px"
                  />
                </div>
                <div className="form__buttons__sm__f__content--text">
                  <span>Continua con Facebook</span>
                </div>
              </div>
            </button>
            <button
              type="submit"
              className="form__buttons__sm__g btn btn-outline-dark">
              <div className="form__buttons__sm__g__content">
                <div className="form__buttons__sm__g__content--icon">
                  <BrandIcon
                    iconType={faGoogle}
                    colorIcon="black"
                    sizeIcon="12px"
                  />
                </div>
                <div className="form__buttons__sm__g__content--text">
                  <span>Continua con Google</span>
                </div>
              </div>
            </button>
            <button
              type="submit"
              className="form__buttons__sm__a btn btn-outline-dark">
              <div className="form__buttons__sm__a__content">
                <div className="form__buttons__sm__a__content--icon">
                  <BrandIcon
                    iconType={faApple}
                    colorIcon="black"
                    sizeIcon="12px"
                  />
                </div>
                <div className="form__buttons__sm__a__content--text">
                  <span>Continua con Apple</span>
                </div>
              </div>
            </button>
            <button
              type="submit"
              className="form__buttons__sm__em btn btn-outline-dark">
              <div className="form__buttons__sm__em__content">
                <div className="form__buttons__sm__em__content--icon">
                  <BrandIcon
                    iconType={faEnvelope}
                    colorIcon="black"
                    sizeIcon="12px"
                  />
                </div>
                <div className="form__buttons__sm__em__content--text">
                  <span>Continua con el correo electronico</span>
                </div>
              </div>
            </button>
          </div>
          <Link onClick={()=> setModalOpen(false)} to='forgotpassword'>
            <p>olvidaste la contrasenia?</p>
          </Link>
        </div>
      </Modal>
    </div>
  );
};
export default LoginModal;
