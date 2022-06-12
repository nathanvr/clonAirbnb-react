import { useState } from 'react';
import axios from 'axios';

function ProImage() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    if (file) {
      console.log(typeof file);
      console.log('file: ', file);
      for (let i = 0; i < file.length; i++) {
        data.append(`file_${i}`, file[i], file[i].name);
      }
    }
    console.log('data: ', data);
    const response = await axios.post('http://localhost:8080/profile', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response);
  }

  function readFile(file) {
    const reader = new FileReader();

    reader.onload = (e) => setImage(e.target.result);

    reader.readAsDataURL(file);
  }

  function handleChange(e) {
    setFile(e.target.files);
    console.log('file: ', file);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="file">Imagen</label>
        <input
          type="file"
          accept="image/*"
          multiple
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
