import {
  Modal,
  useMantineTheme,
  PasswordInput,
  TextInput,
  RadioGroup,
  Radio,
  LoadingOverlay,
  Text
} from '@mantine/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker } from '@mantine/dates';
import { useSelector, useDispatch } from 'react-redux';
import { postRegister } from '../store/reducers/User.reducer';
import dayjs from 'dayjs/locale/es';


const RegisterModal = (props) => {
  const { sitio } = props;
  let passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  let namelastnameregex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/g;
  let lastnameregex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/g;
  let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [role, setRole] = useState('guest');
  const [visible, setVisible] = useState(false);
  const {error, loading}=useSelector((state)=>state.userReducer)
  const [errorvalidate, setErrorValidate]=useState({
    name :null,
    lastname:null,
    email:null,
    birthday:null,
    password:null,
  })
  const nowDate =new Date().getFullYear();
  const registerData = {
    email: email,
    password: password,
    name: name,
    lastname: lastname,
    //birthday: birthday,
    birthday: `${birthday.getDate()} de ${
      dayjs.months[birthday.getMonth()]
    } de ${birthday.getFullYear()}`,
    role: role,
  };
  const validatePassword =()=>{
    if (passwordregex.test(password)){
      return true;
    }else{
      setErrorValidate({password:"La contraseña no cumple con los criterios de seguridad"})}
  }
  const validateEmail =()=>{
    if (emailregex.test(email)){
      return true;
    }else{
      setErrorValidate({email:"Correo inválido"})}
  }
  const validateName =()=>{
    if (namelastnameregex.test(name)){
      return true;
    }else{
      setErrorValidate({name:"El nombre debe tener más caracteres"})}
  }
  const validateLastname =()=>{
    if (lastnameregex.test(lastname)){
      return true;
    }else{
      setErrorValidate({lastname:"El apellido debe tener más caracteres"})}
  }
  const validateBirthday =()=>{
    if ((nowDate - birthday.getFullYear() >= 18)){
      setErrorValidate({birthday:null})
      return true;
    }else{
      setErrorValidate({birthday:"Debes ser mayor de 18 años"})}
  }

  const dispatch = useDispatch();
  console.log(birthday.getFullYear())
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validateName() && validateLastname() && validateEmail() && validatePassword() && validateBirthday()){
    dispatch(postRegister(registerData));
    } 
  };

  return (
    <div>
      <div>
        <Link to="#" onClick={() => setOpened(true)}>
          {sitio}
        </Link>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Registrarse"
          overlayColor={
            theme.colorScheme === 'dark'
              ? theme.colors.dark[9]
              : theme.colors.gray[2]
          }
          overlayOpacity={0.55}
          overlayBlur={3}>
          <form className="form-register" onSubmit={handleSubmit}> 
            {loading === true && (
              <div className="loading" style={{ width: 400, zIndex: 1000 }}>
                <LoadingOverlay visible={visible} />
                {/* ...other content */}
              </div>
            )}
            <div className="box-register">
              <TextInput
                placeholder="Tu nombre"
                label="Nombre"
                name="name"
                required
                value={name}
                onChange={(event) => (setName(event.currentTarget.value),
                  setErrorValidate({name:null}))}
              />
              {errorvalidate.name !== null && <Text color="red" >{errorvalidate.name}</Text> }
            </div>
            <div className="box-register">
              <TextInput
                placeholder="Tu apellido"
                label="Apellido"
                name="lastName"
                required
                value={lastname}
                onChange={(event) => (setLastName(event.currentTarget.value),
                  setErrorValidate({lastname:null}))}
              />
              {errorvalidate.lastname !== null && <Text color="red" >{errorvalidate.lastname}</Text> }
            </div>
            <div className="box-register">
              <TextInput
                placeholder="example@example.com"
                label="Correo Electrónico"
                name="email"
                required
                value={email}
                onChange={(event) => (setEmail(event.currentTarget.value),
                  setErrorValidate({email:null}))}
              />
              {errorvalidate.email !== null && <Text color="red" >{errorvalidate.email}</Text> }
              {error === "email already exist" &&  <Text color="red" >Ya existe una cuenta con el correo ingresado</Text> }
            </div>
            <div className="box-register">
              <DatePicker
                inputFormat="DD MMMM YYYY"
                locale="es"
                label="Fecha de nacimiento"
                name="name"
                value={birthday}
                onChange={setBirthday}
              />
              {errorvalidate.birthday !== null && <Text color="red" >{errorvalidate.birthday}</Text> }
            </div>
            <div className="box-register">
              <PasswordInput
                placeholder="Contraseña"
                description="La contraseña debe tener mínimo 8 caracteres, una miniscula, una mayuscula, un numero o un caracter especial"
                label="Contraseña"
                name="password"
                required
                value={password}
                onChange={(event) => (setPassword(event.currentTarget.value),
                  setErrorValidate({password:null}))}
              />
              {errorvalidate.password !== null && <Text color="red" >{errorvalidate.password}</Text> }
            </div>
            <div className="box-register">
              <RadioGroup
                color="red"
                value={role}
                onChange={setRole}
                required
                name="role">
                <Radio value="guest" label="Querio ser huesped" />
                <Radio value="host" label="Quiero ser anfitrión" />
              </RadioGroup>
            </div>
            <div className="form__button__continue">
              <button
                className="form__button--continue"
                type="submit"
                onClick={() => setVisible((v) => !v)}>
                Registrarse
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};
export default RegisterModal;
