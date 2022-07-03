import { PasswordInput, Button, Header,LoadingOverlay, Text} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getUser } from '../../store/reducers/User.reducer';
import { toast } from 'react-toastify';

const ProPass = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);
  const [submit, setSubmit] = useState(false);
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
    invalidpass: '',
  });

  useEffect(() => {
    setDisabled(pass.password && pass.newPassword);
  }, [pass.password, pass.newPassword]);

  useEffect(() => {
    console.log('Inpuuuuut', submit);
    setError((prev) => ({
      ...prev,
      invalidpass: invalidPass
        ? 'Su contraseña antigua es invalida'
        : submit
        ? 'Contraseña modificada exitosamente'
        : '',
    }));
    console.log('InPass: ', invalidPass, 'ObjinPass: ', error.invalidpass);
  }, [submit, invalidPass]);

  const onInputChange = (event) => {
    setError((prev) => ({
      ...prev,
      invalidpass: '',
    }));
    setInvalidPass(null);
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
    setLoading(true);
    setVisible(true);
    try{
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
    setInvalidPass(!response.data.data);
    console.log("error", error.invalidpass)
    if(response.status===201 && response.data.data === true){
      toast.success('Contraseña actualizada', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          setLoading(false)
          setVisible(false);
        
        }
    if(response.status===201 && response.data.data === false){
      toast.error('No se pudo cambiar tu contraseña', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          setLoading(false)
          setVisible(false);
        }
    setLoading(false);
    setVisible(false);
    console.log('Response: ', response);
    setInput((prev) => ({
      password: '',
      newPassword: '',
      confirmPassword: '',
    }));
    console.log('Response:', response.data.data);
    setInvalidPass(!response.data.data);
    setPass((prev) => ({
      password: false,
      newpassword: false,
    }));
    setSubmit(true);
  }catch(error){
    setLoading(false);
    setVisible(false);
    toast.error('No se pudo cambiar tu contraseña', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }};

  return (
    <div>
      {loading ===true && 
        <div className='loading' style={{ width: 400}}>
        <LoadingOverlay loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }} visible={visible} />
        {/* ...other content */}
    </div>}
      <p>Modifica tu contraseña de ingreso</p>
      <div style={{ margin: 10 }}>
        <PasswordInput
          name="password"
          value={input.password}
          label="Contraseña actual"
          onChange={onInputChange}
        />
        {error.password && <Text color="red">{error.password}</Text>}
      </div>
      <div style={{ margin: 10 }}>
        <PasswordInput
          name="newPassword"
          value={input.newPassword}
          label="Nueva contraseña"
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {error.newPassword &&  <Text color="red">{error.newPassword}</Text>}
      </div>
      <div style={{ margin: 10 }}>
        <PasswordInput
          name="confirmPassword"
          value={input.confirmPassword}
          label="Confirma la contraseña"
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {error.confirmPassword && (
           <Text color="red">{error.confirmPassword}</Text>
        )} 
        {error.invalidpass &&  <Text>{error.invalidpass}</Text>}
      </div>
      <Button disabled={!disabled} onClick={handleSubmit} style={{ margin: 10 }} variant="light" color="pink">
        Guardar
      </Button>
     
    </div>
  );
};

export default ProPass;
