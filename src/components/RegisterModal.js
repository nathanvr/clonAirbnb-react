import { Modal, useMantineTheme, PasswordInput,TextInput, RadioGroup, Radio} from '@mantine/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker } from '@mantine/dates';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';

const schema = z.object({
  name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
  lastName: z.string().min(2, { message: 'Name should have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().regex(new RegExp("^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$"), 'La contraseña debe tener al menos 1 número, 1 caracter especial y una mayuscula')
});

const RegisterModal = (props) => {
  const { sitio } = props;
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [role, setRole] = useState('guest');
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
    name:'',
    lastName:'',
    email: '',
    password:'',
    },
  });


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
          <form className='form-register' onSubmit={form.onSubmit((values) => console.log(values))}>
            <div className='box-register'>
              <TextInput placeholder="Tu nombre" label="Nombre" required value={name} onChange={(event) => setName(event.currentTarget.value)}{...form.getInputProps('name')} />
            </div>
            <div className='box-register'>
              <TextInput placeholder="Tu apellido" label="Apellido" required value={lastName} onChange={(event) => setLastName(event.currentTarget.value)} {...form.getInputProps('lastName')} />
            </div>
            <div className='box-register'>
              <TextInput placeholder="example@example.com" label="Correo Electrónico" required value={email} onChange={(event) => setEmail(event.currentTarget.value)} {...form.getInputProps('email')}/>
            </div>
            <div className='box-register'> 
              <DatePicker label="Fecha de nacimiento" value={birthday} onChange={setBirthday} />
            </div>
            <div className='box-register'>
              <PasswordInput placeholder='Contraseña' label="Contraseña" required value={password} onChange={(event) => setPassword(event.currentTarget.value)}{...form.getInputProps('password')} />
            </div>
            <div className='box-register'>
              <RadioGroup
              color="red"
                value={role}
                onChange={setRole}
                required
              >
                <Radio value="guest" label="Querio ser huesped" />
                <Radio value="host" label="Quiero ser anfitrión" />
              </RadioGroup>
            </div>
              <div className="form__button__continue">
                  <button className="form__button--continue" type='submit'>Registrarse</button>
              </div>
          </form>
          
          </Modal>

    </div>
    </div>
  );
};
export default RegisterModal;
