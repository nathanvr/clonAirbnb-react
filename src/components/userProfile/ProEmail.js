import { Input } from '@mantine/core';
import { useSelector } from 'react-redux';

const ProName = () => {
  const { email: email } = useSelector((state) => state.userReducer);

  const handleClick = () => {};
  return (
    <div>
      <p>Utiliza una dirección a la que siempre tendrás acceso.</p>
      <div style={{ border: '1px solid black' }}>
        <p>Nombre</p>
        <Input placeholder={email} variant="unstyled" />
      </div>
      <button onClick={handleClick}>Guardar</button>
    </div>
  );
};

export default ProName;
