import { Input } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userUpdate } from '../../store/reducers/User.reducer';

const ProDescription = () => {
  const dispatch = useDispatch();
  const { role: userRole } = useSelector((state) => state.userReducer);
  const [parraf, setParraf] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    userRole == 'guest'
      ? setParraf('Parrafo de Guest')
      : setParraf('Parrafo de Host');
  }, [userRole]);

  const handleClick = () => {
    console.log('handleclick_update');
    dispatch(
      userUpdate({
        description: description,
      })
    );
  };
  return (
    <div>
      <p>{parraf}</p>
      <div style={{ border: '1px solid black' }}>
        <p>Descripción</p>
        <Input
          value={description}
          onChange={(event) => setDescription(event.currentTarget.value)}
          variant="unstyled"
        />
      </div>
      <button onClick={handleClick}>Guardar</button>
    </div>
  );
};

export default ProDescription;
