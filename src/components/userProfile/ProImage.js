import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from '../../store/reducers/User.reducer';
import { LoadingOverlay } from '@mantine/core';
import { toast } from 'react-toastify';
function ProImage() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    if (file) {
      data.append('file', file);
    }
    setLoading(true);
    setVisible(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        'https://clonairbnb-backend.herokuapp.com/users/updateImage',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (response.status === 200) {
        setLoading(false);
        setVisible(false);
        toast.success('Imagen actualizada', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(getUser());
      }
    } catch (error) {
      setLoading(false);
      setVisible(false);
      toast.error('No se pudo actualizar tu sitio', {
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

  function readFile(file) {
    const reader = new FileReader();

    reader.onload = (e) => setImage(e.target.result);
    console.log('image ', image);
    reader.readAsDataURL(file);
  }

  function handleChange(e) {
    console.log('e ', e);
    if (e.target.files.length > 0 && e.target.files[0].size < 1024 * 1024 * 5) {
      readFile(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {loading === true && (
          <div className="loading" style={{ width: 400 }}>
            <LoadingOverlay
              loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }}
              visible={visible}
            />
            {/* ...other content */}
          </div>
        )}
        <label htmlFor="file">Imagen</label>
        <input
          type="file"
          accept="image/*"
          name="file"
          id="file"
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
      {!!image && <img src={image} alt="upload preview" />}
    </div>
  );
}

export default ProImage;
