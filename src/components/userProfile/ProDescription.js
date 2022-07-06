import { Textarea, Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userUpdate } from '../../store/reducers/User.reducer';
import { getUser } from '../../store/reducers/User.reducer';
const ProDescription = () => {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUser());
}, [dispatch]);
  const userData = useSelector((state) => state.userReducer);
  const { role: userRole } = useSelector((state) => state.userReducer);
  const [parraf, setParraf] = useState('');
  const [description, setDescription] = useState('');
  useEffect(() => {
    setDescription(userData.description)
  }, [userData]);
  useEffect(() => {
    userRole === 'guest'
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
      <div style={{ margin: 10 }}>
        <Textarea
        label="Añade o edita una descripción"
          value={description}
          onChange={(event) => setDescription(event.currentTarget.value)}
        />
      </div>
      <Button style={{ margin: 10 }} variant="light" color="pink" onClick={handleClick}>
      Guardar
    </Button>
    </div>
  );
};

export default ProDescription;
