import { DatePicker } from '@mantine/dates';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { userUpdate } from '../../store/reducers/User.reducer';
import { getUser } from '../../store/reducers/User.reducer';
import dayjs from 'dayjs/locale/es';

const ProDate = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  
  const userData = useSelector((state) => state.userReducer);
  console.log("cumple", userData.birthday)

  const [birthday, setBirthday] = useState(userData.birthday);

  useEffect(() => {
    setBirthday(userData.birthday);
  }, [userData]);

  const handleClick = () => {
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
      <div style={{ margin: 10 }}>
        
        <DatePicker
          label="Fecha de nacimiento"
          placeholder={userData.birthday}
          value={birthday}
          onChange={setBirthday}
        />
      </div>
      <button onClick={handleClick}>Guardar</button>
    </div>
  );
};

export default ProDate;
