import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userUpdate } from '../../store/reducers/User.reducer';
import { TextInput, Button} from '@mantine/core';
import { getUser } from '../../store/reducers/User.reducer';

const ProName = () => {

const dispatch = useDispatch();
useEffect(() => {
  dispatch(getUser());
}, [dispatch]);

const userData = useSelector((state) => state.userReducer);
console.log(userData.name)
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  useEffect(() => {
    setName(userData.name);
    setLastname(userData.lastname);
  }, [userData]);

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
      <div style={{ margin: 10 }}>
        <TextInput
          label="Nombre"
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
        />
      </div>
      <div style={{ margin: 10 }}>
        <TextInput
          value={lastname}
          label="Apellido"
          onChange={(event) => setLastname(event.currentTarget.value)}
        />
      </div>
      <Button style={{ margin: 10 }} variant="light" color="pink" onClick={handleClick}>
      Guardar
    </Button>
    </div>
  );
};

export default ProName;
