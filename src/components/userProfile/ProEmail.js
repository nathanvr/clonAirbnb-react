import { Input } from '@mantine/core';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userUpdate } from '../../store/reducers/User.reducer';

const ProName = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const handleClick = () => {
    console.log('handleclick_update');
    dispatch(
      userUpdate({
        email: email,
      })
    );
  };
  return (
    <div>
      <p>Utiliza una dirección a la que siempre tendrás acceso.</p>
      <div style={{ border: '1px solid black' }}>
        <p>Nombre</p>
        <Input
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          variant="unstyled"
        />
      </div>
      <button onClick={handleClick}>Guardar</button>
    </div>
  );
};

export default ProName;
