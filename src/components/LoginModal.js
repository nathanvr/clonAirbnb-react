import {
  Modal,
  useMantineTheme,
  PasswordInput,
  TextInput,
  Alert,
  LoadingOverlay,
} from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  faFacebook,
  faGoogle,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import BrandIcon from './BrandIcon';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { useSelector, useDispatch } from 'react-redux';
import { postLogin } from '../store/reducers/User.reducer';
import { useNavigate } from "react-router-dom";
import { getUser } from '../store/reducers/User.reducer';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
});

const LoginModal = (props) => {
  const { login, sitio } = props;
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [visible, setVisible] = useState(false);
  const {error, loading}=useSelector((state)=>state.userReducer)
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(postLogin(user));
  };



  
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      email: '',
      password:''
    },
  });

  return (
    <div>
      <Link to="#" onClick={() => setOpened(true)}>
        {sitio}
      </Link>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Iniciar sesión"
        overlayColor={
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}>
        <form onSubmit={handleSubmit}>
          {loading ===true && 
          <div className='loading' style={{ width: 400, zIndex:1000 }}>
        <LoadingOverlay visible={visible} />
        {/* ...other content */}
      </div>}
          <TextInput
            placeholder="example@example.com"
            label="Correo Electrónico"
            required
            name='email'
            value={user.email}
            onChange={handleChange}
          
          />

          <PasswordInput
            placeholder="Contraseña"
            label="Contraseña"
            required
            name='password'
            onChange={handleChange}
            value={user.password}
          />
          {error !== null && <Alert title="Error!" color="red">Usuario o contraseña incorrectos</Alert>}
          <div className="form__button__continue">
            <button className="form__button--continue" onClick={() => setVisible((v) => !v)}>Continua</button>
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

        <Link onClick={() => setOpened(false)} to="forgotpassword">
          <p id="forgot-password">Olvidaste la contraseña</p>
        </Link>
      </Modal>
    </div>
  );
};
export default LoginModal;
