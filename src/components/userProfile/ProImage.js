import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from '../../store/reducers/User.reducer';
import { LoadingOverlay } from '@mantine/core';
import { toast } from 'react-toastify';
import { Button } from '@mantine/core';
import { Icon } from '@iconify/react';
import "../../styles/components/ProImage.scss"
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
        setImage(null);
        setFile(null);
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
          <div className="loading" style={{ width: 600, height:600, position:'absolute'}} zIndex="1000">
            <LoadingOverlay
              loaderProps={{ size: 'sm', color: 'pink'}}
              visible={visible}
            />
          </div>
        )}
        <div class="custom-input-file">
        <label htmlFor="file" class="custom-input-file-label"><Icon icon="akar-icons:cloud-upload" style={{ marginRight: 10 , fontSize:18 }}/> Selecciona una imagen</label>
        <input
          type="file"
          accept="image/*"
          name="file"
          id="file"
          onChange={handleChange}
          class="input-file"
        />
        </div>
        
        <div className='buttonimage'>
      {!!image && <img src={image} alt="upload preview" />}
      <div className='buttons'>
      {!!image && <Button style={{width:100}}variant="light" color="red" onClick={()=>{
        return(
        setImage(null) ,
        setFile(null))}}>Eliminar</Button>}
      {!!image && <button className='save-image'>Guardar</button>}
      </div>
      </div>
      </form>
    </div>
  );
}

export default ProImage;
