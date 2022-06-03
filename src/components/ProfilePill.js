import { Group, Text, Accordion, Input } from '@mantine/core';
import React from 'react';
import ProName from './userProfile/ProName';

const list = [
  {
    label: 'Nombre legal',
    description:
      'Este es el nombre que aparece en tu documento de viaje, que puede ser una licencia de conducir o un pasaporte.',
    content: <ProName />,
  },
  {
    label: 'Dirección de correo electrónico',
    description: 'Utiliza una dirección a la que siempre tendrás acceso.',
    content:
      "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },
  {
    label: 'Fecha de nacimiento',
    description:
      'Para notificaciones, recordatorios y ayuda para iniciar sesión',
    content:
      'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
  },
  {
    label: 'Número de teléfono',
    description:
      'Para notificaciones, recordatorios y ayuda para iniciar sesión',
    content:
      'SpongeBob is a childish and joyful sea sponge who lives in a pineapple with his pet snail Gary in the underwater city of Bikini Bottom. He works as a fry cook at the Krusty Krab, a job which he is exceptionally skilled at and enjoys thoroughly. ',
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

const ProfilePill = () => {
  const items = list.map((item) => {
    console.log(item.label);
    return (
      <Accordion.Item label={<AccordionLabel {...item} />} key={item.label}>
        <Text size="sm">{item.content}</Text>
      </Accordion.Item>
    );
  });

  return (
    <Accordion icon="Edita" iconPosition="right">
      {console.log(items)}
      {items}
    </Accordion>
  );
};

export default ProfilePill;
