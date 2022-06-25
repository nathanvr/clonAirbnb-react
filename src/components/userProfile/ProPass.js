import { PasswordInput, Button, Header } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getUser } from '../../store/reducers/User.reducer';

const ProPass = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const [disabled, setDisabled] = useState(false);
  const [pass, setPass] = useState({
    password: false,
    newPassword: false,
  });
  const [input, setInput] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    setDisabled(pass.password && pass.newPassword);
  }, [pass.password, pass.newPassword]);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    console.log('Event: ', event.target);
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(event);
  };

  const validateInput = (event) => {
    let { name, value } = event.target;

    console.log('Disabled: ', disabled);
    setError((prev) => {
      console.log('Prev: ', prev);
      const stateObj = { ...prev, [name]: '' };

      switch (name) {
        case 'password':
          if (!value) {
            stateObj[name] = 'Por favor ingrese su antigua contraseña';
            setPass((prev) => ({
              ...prev,
              [name]: false,
            }));
          } else {
            setPass((prev) => ({
              ...prev,
              [name]: true,
            }));
          }
          break;
        case 'newPassword':
          if (!value) {
            stateObj[name] = 'Por favor ingrese una nueva contraseña';
            setPass((prev) => ({
              ...prev,
              [name]: false,
            }));
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj['confirmPassword'] = 'Las contraseñas no coinciden';
            setPass((prev) => ({
              ...prev,
              [name]: false,
            }));
          } else if (input.confirmPassword && value === input.confirmPassword) {
            if (input.password === input.newPassword) {
              stateObj.confirmPassword =
                'La nueva contraseña no puede ser igual a la antigua.';
            } else {
              stateObj['confirmPassword'] = '';
              setPass((prev) => ({
                ...prev,
                [name]: true,
              }));
            }
          } else {
            stateObj['confirmPassword'] = input.confirmPassword
              ? ''
              : error.confirmPassword;
          }
          break;
        case 'confirmPassword':
          if (!value) {
            stateObj[name] = 'Por favor confirme la nueva contraseña.';
            setPass((prev) => ({
              ...prev,
              newPassword: false,
            }));
          } else if (input.newPassword && value !== input.newPassword) {
            stateObj[name] = 'Las contraseñas no coinciden.';
            setPass((prev) => ({
              ...prev,
              newPassword: false,
            }));
          } else if (input.newPassword && value === input.newPassword) {
            if (input.password === input.newPassword) {
              stateObj.confirmPassword =
                'La nueva contraseña no puede ser igual a la antigua.';
            } else {
              stateObj[name] = '';
              setPass((prev) => ({
                ...prev,
                newPassword: true,
              }));
            }
          }
          break;
        default:
          break;
      }

      console.log('stateObj: ', stateObj);
      return stateObj;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const response = await axios.put(
      'http://localhost:8080/users/changepassword',
      {
        password: input.password,
        newpassword: input.newPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('Response: ', response);
  };

  return (
    <div>
      <p>Modifica tu contraseña de ingreso</p>
      <div style={{ margin: 10 }}>
        <PasswordInput
          type="password"
          name="password"
          value={input.password}
          placeholder="Password"
          label="Contraseña actual"
          onChange={onInputChange}
        />
        {error.password && <span className="err">{error.password}</span>}
      </div>
      <div style={{ margin: 10 }}>
        <PasswordInput
          type="password"
          name="newPassword"
          value={input.newPassword}
          label="Nueva contraseña"
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {error.newPassword && <span className="err">{error.newPassword}</span>}
      </div>
      <div style={{ margin: 10 }}>
        <PasswordInput
          type="password"
          name="confirmPassword"
          value={input.confirmPassword}
          label="Confirma la contraseña"
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {error.confirmPassword && (
          <span className="err">{error.confirmPassword}</span>
        )}
      </div>
      <Button disabled={!disabled} onClick={handleSubmit}>
        Guardar
      </Button>
    </div>
  );
};

export default ProPass;
