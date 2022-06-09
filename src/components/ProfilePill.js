import { Group, Text, Accordion, Input } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProName from './userProfile/ProName';
import ProEmail from './userProfile/ProEmail';
import ProDate from './userProfile/ProDate';

const ProfilePill = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDay, setBirthDay] = useState(new Date());
  const userData = useSelector((state) => state.userReducer);
  console.log('userDat: ', userData);
  console.log('birthday: ', birthDay, typeof birthDay);
  useEffect(() => {
    setName(userData.name);
    setLastName(userData.lastname);
    setEmail(userData.email);
    setBirthDay(userData.birthday);
  }, [userData]);
  const list = [
    {
      label: 'Nombre legal',
      description: `${name} ${lastName}`,
      content: <ProName />,
    },
    {
      label: 'Dirección de correo electrónico',
      description: `${email}`,
      content: <ProEmail />,
    },
    {
      label: 'Fecha de nacimiento',
      description: `${birthDay}`,
      content: <ProDate />,
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
      {console.log(items)}
      {items}
    </Accordion>
  );
};

export default ProfilePill;
