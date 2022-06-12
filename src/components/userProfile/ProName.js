import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userUpdate } from '../../store/reducers/User.reducer';
import { Input } from '@mantine/core';

const ProName = () => {
  const dispatch = useDispatch();
  /*const { name: sName, lastname: sLastname } = useSelector(
    (state) => state.userReducer
  );*/
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  /*useEffect(() => {
    setName(sName);
    setLastname(sLastname);
  }, [sName, sLastname]);*/

  const handleClick = () => {
    dispatch(
      userUpdate({
        name: name,
        lastname: lastname,
      })
    );
  };

  return (
    <div>
      <p>
        Este es el nombre que aparece en tu documento de viaje, que puede ser
        una licencia de conducir o un pasaporte.
      </p>
      <div style={{ border: '1px solid black' }}>
        <p>Nombre</p>
        <Input
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          variant="unstyled"
        />
      </div>
      <div style={{ border: '1px solid black' }}>
        <p>Apellido</p>
        <Input
          value={lastname}
          onChange={(event) => setLastname(event.currentTarget.value)}
          variant="unstyled"
        />
      </div>
      <button onClick={handleClick}>Guardar</button>
    </div>
  );
};

export default ProName;
