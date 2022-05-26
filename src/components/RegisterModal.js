import { Modal, useMantineTheme, PasswordInput,TextInput, RadioGroup, Radio} from '@mantine/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker } from '@mantine/dates';

const RegisterModal = (props) => {
  const { sitio } = props;
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [value, onChange] = useState(new Date());
  const [values, setValue] = useState('guest');


  return (
    <div>
      <div>
      <Link to="#" onClick={() => setOpened(true)}>{sitio}</Link>
      <Modal opened={opened}
        onClose={() => setOpened(false)}
        title="Registrarse"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3} >
          <form>
          <TextInput placeholder="Tu nombre" label="Nombre" required value={name} onChange={(event) => setName(event.currentTarget.value)} />
          <TextInput placeholder="Tu apellido" label="Apellido" required value={lastName} onChange={(event) => setLastName(event.currentTarget.value)} />
          <TextInput placeholder="example@example.com" label="Correo Electrónico" required value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
          <DatePicker label="Fecha de nacimiento" value={value} onChange={onChange} />
          <PasswordInput label="Contraseña" required value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
          <RadioGroup
          color="red"
            value={values}
            onChange={setValue}
            required
          >
            <Radio value="guest" label="Querio ser huesped" />
            <Radio value="host" label="Quiero ser anfitrión" />
          </RadioGroup>
          <div className="form__button__continue">
              <button className="form__button--continue">Registrarse</button>
          </div>
          </form>
          
          </Modal>

    </div>
    </div>
  );
};
export default RegisterModal;
