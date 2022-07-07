import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../../styles/components/ImageFrame.scss';
import {
  Button,
  Modal,
  useMantineTheme,
  Text,
  Accordion,
  LoadingOverlay,
} from '@mantine/core';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Trash } from 'tabler-icons-react';
import { signOutSuccess } from '../../store/reducers/User.reducer';

const DeleteFrame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const theme = useMantineTheme();

  async function handleOnclick(e) {
    e.preventDefault();
    setLoading(true);
    setVisible(true);
    try {
      const token = localStorage.getItem('token');

      const response = await axios({
        method: 'DELETE',
        baseURL: 'hhttps://clonairbnb-backend.herokuapp.com/users/deleteUser',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      if (response.status === 200) {
        dispatch(signOutSuccess());
        navigate('/');
        toast.success('Se eliminó tu cuenta', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
        setVisible(false);
        setOpened(false);
      }
    } catch (error) {
      setVisible(false);
      toast.error('No se pudo eliminar tu cuenta', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <div className="delete-center">
      <Accordion icon={<Trash size={16} color="red" />} disableIconRotation>
        <Accordion.Item label="Eliminar cuenta">
          <Text size="sm" lineClamp={5}>
            Si eliminas tu cuenta, ya no podrás acceder en un futuro y todos tus
            anuncios y reservas se eliminaran automaticamente
          </Text>
          <Button
            style={{ marginTop: 10 }}
            color="red"
            onClick={() => setOpened(true)}>
            Borrar
          </Button>
        </Accordion.Item>
      </Accordion>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Eliminar cuenta"
        overlayColor={
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}>
        {' '}
        {loading === true && (
          <div className="loading" style={{ width: 400 }}>
            <LoadingOverlay
              loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }}
              visible={visible}
            />
          </div>
        )}
        <Text>Estas seguro de eliminar tu cuenta permanentemente</Text>
        <div className="cancel-buttons">
          <div>
            <Button color="gray" onClick={() => setOpened(false)}>
              Cancelar
            </Button>
          </div>
          <div>
            <Button color="red" onClick={handleOnclick}>
              Eliminar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteFrame;
