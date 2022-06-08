import { DatePicker } from '@mantine/dates';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userUpdate } from '../../store/reducers/User.reducer';
import dayjs from 'dayjs/locale/es';

const ProDate = () => {
  const dispatch = useDispatch();

  const [birthday, setBirthday] = useState('');

  const handleClick = () => {
    console.log('handleclick_update');
    dispatch(
      userUpdate({
        birthday: `${birthday.getDate()} de ${
          dayjs.months[birthday.getMonth()]
        } de ${birthday.getFullYear()}`,
      })
    );
  };
  return (
    <div>
      <div style={{ border: '1px solid black' }}>
        <p>Fecha de nacimineto</p>
        <DatePicker
          value={birthday}
          onChange={setBirthday}
          locale="es"
          variant="unstyled"
          inputFormat="DD MMM YYYY"
        />
      </div>
      <button onClick={handleClick}>Guardar</button>
    </div>
  );
};

export default ProDate;
