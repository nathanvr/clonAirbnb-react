import { Group, Text, Accordion, Input } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageFrame from './userProfile/ImageFrame';
import ProImage from './userProfile/ProImage';
import ProName from './userProfile/ProName';
import ProEmail from './userProfile/ProEmail';
import ProDate from './userProfile/ProDate';
import ProDescription from './userProfile/ProDescription';
import { getUser } from '../store/reducers/User.reducer';

const ProfilePill = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const userData = useSelector((state) => state.userReducer);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [description, setDescription] = useState('');

  console.log('userDat: ', userData);
  console.log('birthday: ', birthDay, typeof birthDay);

  useEffect(() => {
    setName(userData.name);
    setImage(userData.image);
    setLastName(userData.lastname);
    setEmail(userData.email);
    setBirthDay(userData.birthday);
    setDescription(userData.description);
  }, [userData]);

  const list = [
    {
      label: 'Imagen',
      description: 'Agreaga o edita tu imagen de perfil.',
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
      description: `${birthDay}`,
      content: <ProDate />,
    },
    {
      label: 'Descripcion',
      description: `${description}`,
      content: <ProDescription />,
    },
    {
      label: 'Contraseña',
      description: 'Modifica tu contreseña',
      content: <ProPassword />,
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
