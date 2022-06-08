import { DatePicker } from '@mantine/dates';

const ProDate = () => {
  const handleClick = () => {};
  return (
    <div>
      <div style={{ border: '1px solid black' }}>
        <p>Fecha de nacimineto</p>
        <DatePicker locale="es" variant="unstyled" inputFormat="DD MMM YYYY" />
      </div>
      <button onClick={handleClick}>Guardar</button>
    </div>
  );
};

export default ProDate;
