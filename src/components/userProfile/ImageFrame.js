import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/components/ImageFrame.scss';
import { Button, Modal, useMantineTheme, LoadingOverlay } from '@mantine/core';
import axios from 'axios';
import { getUser } from '../../store/reducers/User.reducer';
import { toast } from 'react-toastify';

const ImageFrame = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
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
      console.log(token);
      const response = await axios({
        method: 'PUT',
        baseURL: 'https://clonairbnb-backend.herokuapp.com/users/deleteImage',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      if (response.status === 200) {
        dispatch(getUser());
        toast.success('Se eliminó tu foto', {
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
      toast.error('No se pudo eliminar tu foto', {
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
    <div className="image-center">
      {user.image === null || user.image === undefined ? (
        <img
          className="image-frame"
          src="https://res.cloudinary.com/dhacdmuvs/image/upload/v1656033094/user_z5tc8r.jpg"
          alt={user.name}></img>
      ) : (
        <div className="image-button">
          <img className="image-frame" src={user.image} alt={user.name}></img>
          <Button
            className="button-image-delete"
            color="gray"
            radius="xl"
            compact
            uppercase
            onClick={() => setOpened(true)}>
            X
          </Button>
        </div>
      )}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Eliminar foto"
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
            {/* ...other content */}
          </div>
        )}
        <p>Estas seguro de eliminar tu foto de perfil?</p>
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

export default ImageFrame;
