import { DatePicker } from '@mantine/dates';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userUpdate } from '../../store/reducers/User.reducer';
import { getUser } from '../../store/reducers/User.reducer';
import dayjs from 'dayjs/locale/es';

const ProDate = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const userData = useSelector((state) => state.userReducer);

  const [birthday, setBirthday] = useState(new Date(userData.birthday));
  const [birthdayFormat, setBirthdayFormat] = useState('');

  useEffect(() => {
    setBirthday(new Date(userData.birthday));
  }, [userData]);

  useEffect(() => {
    setBirthdayFormat();
  }, [birthday]);
  const handleClick = () => {
    dispatch(
      userUpdate({
        birthday: birthday.toISOString(),
      })
    );
  };
  return (
    <div>
      <div style={{ margin: 10 }}>
        <DatePicker
          locale="es"
          label="Fecha de nacimiento"
          placeholder={birthdayFormat}
          value={birthday}
          onChange={setBirthday}
        />
      </div>
      <button onClick={handleClick}>Guardar</button>
    </div>
  );
};

export default ProDate;
