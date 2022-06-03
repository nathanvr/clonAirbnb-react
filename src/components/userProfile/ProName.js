import { Input } from '@mantine/core';

const ProName = () => {
  const handleClick = () => {};
  return (
    <div>
      <div style={{ border: '1px solid black' }}>
        <p>Nombre</p>
        <Input variant="unstyled" />
      </div>
      <div style={{ border: '1px solid black' }}>
        <p>Apellido</p>
        <Input variant="unstyled" />
      </div>
      <button onClick={handleClick}>Guardar</button>
    </div>
  );
};

export default ProName;
