import { PasswordInput } from '@mantine/core';

const ProPass = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const userData = useSelector((state) => state.userReducer);
  console.log(userData.name);
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
      <p>Modifica tu contraseña de ingreso</p>
      <div style={{ margin: 10 }}>
        <PasswordInput
          label="Nombre"
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
        />
      </div>
      <div style={{ margin: 10 }}>
        <PasswordInput
          value={lastname}
          label="Apellido"
          onChange={(event) => setLastname(event.currentTarget.value)}
        />
      </div>
      <div style={{ margin: 10 }}>
        <PasswordInput
          value={lastname}
          label="Apellido"
          onChange={(event) => setLastname(event.currentTarget.value)}
        />
      </div>
      <button onClick={handleClick}>Guardar</button>
    </div>
  );
};

export default ProPass;
