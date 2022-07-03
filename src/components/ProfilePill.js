import { Group, Text, Accordion, Input } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageFrame from './userProfile/ImageFrame';
import ProImage from './userProfile/ProImage';
import ProName from './userProfile/ProName';
import ProEmail from './userProfile/ProEmail';
import ProDate from './userProfile/ProDate';
import ProDescription from './userProfile/ProDescription';
import ProPass from './userProfile/ProPass';
import { getUser } from '../store/reducers/User.reducer';
import dayjs from 'dayjs/locale/es';

const ProfilePill = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const userData = useSelector((state) => state.userReducer);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState(new Date(userData.birthday));
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(userData.name);
    setImage(userData.image);
    setLastName(userData.lastname);
    setEmail(userData.email);
    setBirthday(new Date(userData.birthday));
    setDescription(userData.description);
  }, [userData]);
  if (description=== undefined){
    setDescription("No tienes ninguna descripción")
  }
  const list = [
    {
      label: 'Imagen',
      description: 'Agrega o edita tu imagen de perfil.',
      content: <ProImage />,
    },
    {
      label: 'Nombre legal',
      description: `${name} ${lastName}`,
      content: <ProName />,
    },
    /*{
      label: 'Dirección de correo electrónico',
      description: `${email}`,
      content: <ProEmail />,
    },*/
    {
      label: 'Fecha de nacimiento',
      description: `${birthday.getDate()} de ${
        dayjs.months[birthday.getMonth()]
      } de ${birthday.getFullYear()}`,
      content: <ProDate />,
    },
    {
      label: 'Descripcion',
      description: `${description}`,
      content: <ProDescription />,
    },
    {
      label: 'Contraseña',
      description: 'Modifica tu contraseña',
      content: <ProPass />,
    },
  ];

  function AccordionLabel({ label, description }) {
    return (
      <Group noWrap>
        <div>
          <Text>{label}</Text>
          <Text size="sm" color="dimmed" weight={400}>
            {description}
          </Text>
        </div>
      </Group>
    );
  }

  const items = list.map((item) => {
    console.log(item.label);
    return (
      <Accordion.Item label={<AccordionLabel {...item} />} key={item.label}>
        <Text size="sm">{item.content}</Text>
      </Accordion.Item>
    );
  });

  return (
    <Accordion icon="Edita" iconPosition="right" disableIconRotation>
      {items}
    </Accordion>
  );
};

export default ProfilePill;
