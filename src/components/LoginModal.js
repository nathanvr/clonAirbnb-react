import { Modal, useMantineTheme, PasswordInput,TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faFacebook, faGoogle,  faApple, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import BrandIcon from './BrandIcon';


const LoginModal = (props) => {
  const { sitio } = props;
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <Link to="#" onClick={() => setOpened(true)}>{sitio}</Link>
      <Modal opened={opened}
        onClose={() => setOpened(false)}
        title="Iniciar sesión"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3} >
          <form>
          <TextInput placeholder="example@example.com" label="Correo Electrónico" required value={email} onChange={(event) => setEmail(event.currentTarget.value)} />

          <PasswordInput label="Contraseña" required value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
          <div className="form__button__continue">
              <button className="form__button--continue">Continua</button>
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
      
          <Link onClick={()=> setOpened(false)} to='forgotpassword'>
            <p id="forgot-password">Olvidaste la contraseña</p>
          </Link>
          </Modal>

    </div>
  );
};
export default LoginModal;
