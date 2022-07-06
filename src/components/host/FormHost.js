import React, { useState} from 'react';
import {
  Modal,
  useMantineTheme,
  Textarea,
  LoadingOverlay,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import {
  NumberInput,
  Select,
  CheckboxGroup,
  Checkbox,
  TextInput,
  ScrollArea,
  Text,
  Button
} from '@mantine/core';
import axios from 'axios';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import PlacesAutocomplete from '../Maps/PlacesAutocomplete';
import { toast } from 'react-toastify';
import { getUser } from '../../store/reducers/User.reducer';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import ImageUploading from "react-images-uploading";
import { CloudUpload, TrashX } from 'tabler-icons-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";

const options1 = [
  { value: 'apartment', label: 'Apartamentos' },
  { value: 'house', label: 'Casa' },
  { value: 'attachedhouse', label: 'Vivienda anexa' },
  { value: 'uniqueaccommodation', label: 'Alojamiento único' },
  { value: 'bedandbreakfasts', label: 'Bed and breakfasts' },
  { value: 'hotelboutique', label: 'Hotel boutique' },
];
const options2 = [
  {
    value: 'lodging',
    label: 'Alojamiento: Casa independiente o tiene paredes comunes con otras.',
  },
  {
    value: 'cottage',
    label:
      'Cabaña: Casa hecha de materiales naturales y construida en un entorno natural.',
  },
  { value: 'villa', label: 'Villa: Alojamiento de lujo.' },
  {
    value: 'terraced-house',
    label: 'Casa adosada: Casa de varios niveles que comparte paredes.',
  },
  {
    value: 'cabin',
    label:
      'Casa de campo: Casa construida en un área rural, cerca de un lago o playa.',
  },
  {
    value: 'bungalow',
    label: 'Bungalow: Casa de un piso con un porche amplio y tejado inclinado',
  },
  { value: 'hut', label: 'Choza: Casa de madera o barro con techo de paja' },
  {
    value: 'farm',
    label:
      'Estadía en granja: Alojamiento donde los huespedes pueden pasar tiempo en un entorno agrícola',
  },
  { value: 'dome', label: 'Domo: Alojamiento con techo de forma esférica' },
  { value: 'chalet', label: 'Chalé: Casa de madera con un techo inclinado.' },
  {
    value: 'tiny-house',
    label:
      'Minicasa: Casa independiente que generalmente mide menos de 35 metros cuadrados.',
  },
  { value: 'houseroom', label: 'Casa particular: Habitación Privada' },
  { value: 'holiday-accommodation', label: 'Alojamiento Vacacional' },
];
const options3 = [
  { value: 'entire', label: 'Un alojamiento entero' },
  { value: 'private', label: 'Una habitación privada' },
  { value: 'shared', label: 'Una habitación compartida' },
];
const containerStyle = {
  width: '350px',
  height: '250px',
};

const FormHost = (props) => {
  const { sitio } = props;
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.userReducer);
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [countGuest, setCountGuest] = useState(0);
  const [countBeds, setCountBeds] = useState(0);
  const [countRooms, setCountRooms] = useState(0);
  const [countBaths, setCountBaths] = useState(0);
  const [isChecked, setIsChecked] = useState([]);
  const [home_type, setHome_type] = useState(null);
  const [description_type, setDescription_type] = useState(null);
  const [room_type, setRoom_type] = useState(null);
  const [formStep, setformStep] = useState(0);
  const [address, setAddress] = useState(null);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipcode, setZipcode] = useState(undefined);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(45000);
  const [lati, setLat] = useState(0);
  const [lngi, setLng] = useState(0);
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [file, setFile] = useState([]);
  const [center, setCenter] = useState({ lat: 4.570868, lng: -74.297333 });
  const [position, setPosition] = useState({ lat: 4.570868, lng: -74.297333 });
  const [libraries] = useState(['places']);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const [error, setError] = useState(null);
  const [errorValidate, setErrorValidate] = useState({
    formstep0: null,
    formstep1: null,
    formstep2: null,
    formstep3: null,
    formstep4: null,
    formstep5: null,
  });
  const childToParent = (childdata) => {
    setAddress(childdata.value);
    setLat(childdata.lat);
    setLng(childdata.lng);
    setCity(childdata.city);
    setCountry(childdata.country);
    setZipcode(childdata.postal_code);
    setPosition({ lat: childdata.lat, lng: childdata.lng });
    setCenter({ lat: childdata.lat, lng: childdata.lng });
  };

  //Huespedes
  const addCountGuest = () => {
    if (countGuest === 16) {
      return;
    }
    setCountGuest(countGuest + 1);
  };
  const removeCountGuest = () => {
    if (countGuest === 0) {
      return;
    }
    setCountGuest(countGuest - 1);
  };
  //Camas
  const addCountBeds = () => {
    if (countBeds === 50) {
      return;
    }
    setCountBeds(countBeds + 1);
  };
  const removeCountBeds = () => {
    if (countBeds === 0) {
      return;
    }
    setCountBeds(countBeds - 1);
  };
  //Habitaciones
  const addCountRooms = () => {
    if (countRooms === 50) {
      return;
    }
    setCountRooms(countRooms + 1);
  };
  const removeCountRooms = () => {
    if (countRooms === 0) {
      return;
    }
    setCountRooms(countRooms - 1);
  };
  //Baños
  const addCountBaths = () => {
    if (countBaths === 50) {
      return;
    }
    setCountBaths(countBaths + 1);
  };
  const removeCountBaths = () => {
    if (countBaths === 0) {
      return;
    }
    setCountBaths(countBaths - 1);
  };
  const validateform0 = () => {
    if (home_type !== null && room_type !== null && description_type !== null) {
      setErrorValidate({ formstep0: null });
      return true;
    } else {
      setErrorValidate({ formstep0: 'Debes completar todos los campos' });
    }
  };
  const validateform1 = () => {
    if (
      countBaths > 0 &&
      countBeds > 0 &&
      countGuest > 0 &&
      countRooms > 0 &&
      isChecked.length > 0
    ) {
      setErrorValidate({ formstep1: null });
      return true;
    } else {
      setErrorValidate({ formstep1: 'Debes completar todos los campos' });
    }
  };
  const validateform2 = () => {
    if (address !== null) {
      setErrorValidate({ formstep2: null });
      return true;
    } else {
      setErrorValidate({ formstep2: 'Ingresa la dirección de tu sitio' });
    }
  };
  const validateform3 = () => {
    if (file.length >= 5) {
      setErrorValidate({ formstep3: null });
      return true;
    } else {
      setErrorValidate({ formstep3: 'Debes subir al menos 5 fotos' });
    }
  };
  const validateform4 = () => {
    if (title.length > 2 && description.length > 2 && price > 0) {
      setErrorValidate({ formstep4: null });
      return true;
    } else if (title.length <= 2) {
      setErrorValidate({ formstep4: 'Titulo muy corto' });
    } else if (description.length <= 2) {
      setErrorValidate({ formstep4: 'Descripción muy corta' });
    } else if (price === 0) {
      setErrorValidate({ formstep4: 'Descripción muy corta' });
    }
  };

  const completeFormStep = () => {
    if (validateform0() && formStep === 0) {
      setformStep((cur) => cur + 1);
    } else if (formStep === 1 && validateform1()) {
      setformStep((cur) => cur + 1);
    } else if (formStep === 2 && validateform2()) {
      setformStep((cur) => cur + 1);
    } else if (formStep === 3 && validateform3()) {
      setformStep((cur) => cur + 1);
    } else if (formStep === 4 && validateform4()) {
      setformStep((cur) => cur + 1);
    }
  };
  const backFormStep = () => {
    setformStep((cur) => cur - 1);
  };
  const renderButtonPrev = () => {
    if (formStep === 0) {
      return undefined;
    } else {
      return (
        <button type="button" id="button" onClick={backFormStep}>
          Anterior
        </button>
      );
    }
  };
  const renderButtonNext = () => {
    if (formStep === 5) {
      return undefined;
    } else {
      return (
        <button type="button" id="button" onClick={completeFormStep}>
          Siguiente
        </button>
      );
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setVisible(true);
    const data = new FormData();
    data.append('home_type', home_type);
    data.append('description_type', description_type);
    data.append('room_type', room_type);
    data.append('total_occupancy', countGuest);
    data.append('total_rooms', countRooms);
    data.append('total_beds', countBeds);
    data.append('total_bathrooms', countBaths);
    data.append('services', isChecked);
    data.append('title', title);
    data.append('description', description);
    data.append('price', price);
    data.append('address', address);
    data.append('city', city);
    data.append('country', country);
    data.append('zipcode', zipcode);
    data.append('lat', lati);
    data.append('lng', lngi);
    if (file) {
      for (let i = 0; i < file.length; i++) {
        data.append(`file_${i}`, file[i], file[i].name);
      }
    }
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'https://clonairbnb-backend.herokuapp.com/bookingsites/post',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (response.status === 201) {
        dispatch(getUser());
        setLoading(false);
        setVisible(false);
        toast.success('Se creó tu sitio', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setOpened(false);
        setCountGuest(0);
        setCountBeds(0);
        setCountRooms(0);
        setCountBaths(0);
        setIsChecked([]);
        setHome_type(null);
        setDescription_type(null);
        setRoom_type(null);
        setformStep(0);
        setAddress(null);
        setCity('');
        setCountry('');
        setZipcode(undefined);
        setTitle('');
        setDescription('');
        setPrice(45000);
        setLat(0);
        setLng(0);
        setImage(null);
        setFile(null);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
      setVisible(false);
      toast.error('No se pudo crear tu sitio', {
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
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
    imageList.map((item)=>{
      file.push(item.file)
    })
  };

  console.log(file)


  function readFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(file);
  }
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCsW9trmjliEY9-Qz_uuAK8C2DRCUFzDqs',
    libraries,
  });

  if (!isLoaded) return;

  const listItems = isChecked.map((element, index) => {
    switch (element) {
      case 'pool':
        return (
          <p key={element}>
            <Icon icon="cil:pool" />
            Piscina
          </p>
        );
      case 'jacuzzi':
        return (
          <p key={element}>
            <Icon icon="emojione-monotone:bathtub" />
            Jacuzzi
          </p>
        );
      case 'bbq':
        return (
          <p key={element}>
            {' '}
            <Icon icon="iconoir:bbq" />
            Parrila
          </p>
        );
      case 'woodfire':
        return (
          <p key={element}>
            <Icon icon="icon-park-outline:fire-two" />
            Fogata
          </p>
        );
      case 'essentialservices':
        return (
          <p key={element}>
            <Icon icon="ep:toilet-paper" />
            Servicios esenciales
          </p>
        );
      case 'hotwater':
        return (
          <p key={element}>
            <Icon icon="ph:thermometer-hot" />
            Agua caliente
          </p>
        );
      case 'wifi':
        return (
          <p key={element}>
            <Icon icon="clarity:wifi-line" />
            Wifi
          </p>
        );
      case 'tv':
        return (
          <p key={element}>
            <Icon icon="arcticons:hanju-tv" />
            Tv
          </p>
        );
      case 'kitchen':
        return (
          <p key={element}>
            <Icon icon="tabler:tools-kitchen-2" />
            Cocina
          </p>
        );
      case 'washer':
        return (
          <p key={element}>
            <Icon icon="bxs:washer" />
            Lavadora
          </p>
        );
      case 'airconditioner':
        return (
          <p key={element}>
            <Icon icon="iconoir:air-conditioner" />
            Aire acondicionado
          </p>
        );
      case 'firstaidkit':
        return (
          <p key={element}>
            <Icon icon="clarity:first-aid-kit-line" />
            Botiquín
          </p>
        );
    }
  });

  const onLoad = (marker) => {
    console.log('marker: ', marker);
  };

  return (
    <div>
      <Link to="#" onClick={() => setOpened(true)}>
        {sitio}
      </Link>
      <Modal
        size="85%"
        className='modal-formHost'
        opened={opened}
        onClose={() => setOpened(false)}
        overlayColor={
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}>
      
        <div className="container-form">
        
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
            {formStep === 0 && (
              <section>
                <div className="typebooking">
                  <h1>Paso 1: Empieza con lo básico</h1>
                  <h2>Cuentanos acerca de tu espacio</h2>
                  <div className="select">
                    <Select
                      placeholder="Selecciona una opción"
                      value={home_type}
                      onChange={setHome_type}
                      data={options1}
                      label="¿En qué tipo de espacio brindarás servicios de anfitrión?"
                      required
                    />
                  </div>
                  <div className="select">
                    <Select
                      label="¿Cuál de estas opciones describe mejor tu espacio?"
                      required
                      placeholder="Selecciona una opción"
                      value={description_type}
                      onChange={setDescription_type}
                      data={options2}
                    />
                  </div>
                  <div className="select">
                    <Select
                      label="¿De qué tipo de espacio dispondrán los huéspedes?"
                      required
                      placeholder="Selecciona una opción"
                      value={room_type}
                      onChange={setRoom_type}
                      data={options3}
                    />
                  </div>
                  {errorValidate.formstep0 !== null && (
                    <Text color="red">{errorValidate.formstep0}</Text>
                  )}
                </div>
              </section>
            )}
            {formStep === 1 && (
              <section>
                <div className="typebooking2">
                  <h1>Paso 2: Describe tu espacio</h1>

                  <h2>
                    ¿A cuántos huéspedes te gustaría recibir?
                    <span className="red"> *</span>
                  </h2>
                  <section className="counter">
                    <div className="section-guest">
                      <p>Huéspedes</p>
                      <div
                        className="button-counter"
                        onClick={removeCountGuest}>
                        -
                      </div>
                      <NumberInput
                        hideControls
                        value={countGuest}
                        onChange={(val) => setCountGuest(val)}
                        max={16}
                        min={0}
                        step={1}
                        styles={{ input: { width: 44, textAlign: 'center' } }}
                      />
                      <div
                        className="button-counter"
                        onClick={() => addCountGuest()}>
                        +
                      </div>
                    </div>
                    <div className="section-guest">
                      <div>Camas </div>
                      <div className="button-counter" onClick={removeCountBeds}>
                        -
                      </div>
                      <NumberInput
                        hideControls
                        value={countBeds}
                        onChange={(val) => setCountBeds(val)}
                        max={50}
                        min={0}
                        step={1}
                        styles={{ input: { width: 44, textAlign: 'center' } }}
                      />
                      <div className="button-counter" onClick={addCountBeds}>
                        +
                      </div>
                    </div>
                    <div className="section-guest">
                      Habitaciones
                      <div
                        className="button-counter"
                        onClick={removeCountRooms}>
                        -
                      </div>
                      <NumberInput
                        hideControls
                        value={countRooms}
                        onChange={(val) => setCountRooms(val)}
                        max={50}
                        min={0}
                        step={1}
                        styles={{ input: { width: 44, textAlign: 'center' } }}
                      />
                      <div className="button-counter" onClick={addCountRooms}>
                        +
                      </div>
                    </div>
                    <div className="section-guest">
                      Baños
                      <div
                        className="button-counter"
                        onClick={removeCountBaths}>
                        -
                      </div>
                      <NumberInput
                        hideControls
                        value={countBaths}
                        onChange={(val) => setCountBaths(val)}
                        max={50}
                        min={0}
                        step={1}
                        styles={{ input: { width: 44, textAlign: 'center' } }}
                      />
                      <div className="button-counter" onClick={addCountBaths}>
                        +
                      </div>
                    </div>
                  </section>
                  <div className="info-1">
                    <CheckboxGroup
                      value={isChecked}
                      onChange={setIsChecked}
                      color="violet"
                      label="¿Tienes alguna comodidad destacada?"
                      required
                      spacing="xl"
                      size="md">
                      <Checkbox value="pool" label="Piscina" />
                      <Checkbox value="jacuzzi" label="Jacuzzi" />
                      <Checkbox value="bbq" label="Parrilla" />
                      <Checkbox value="woodfire" label="Fogata" />
                      <Checkbox
                        value="essentialservices"
                        label="Servicios imprescindibles"
                      />
                      <Checkbox value="hotwater" label="Agua caliente" />
                      <Checkbox value="wifi" label="Wifi" />
                      <Checkbox value="tv" label="TV" />
                      <Checkbox value="kitchen" label="Cocina" />
                      <Checkbox value="washer" label="Lavadora" />
                      <Checkbox
                        value="airconditioner"
                        label="Aire acondicionado"
                      />
                      <Checkbox value="firstaidkit" label="Botiquín" />
                    </CheckboxGroup>
                  </div>
                  {errorValidate.formstep1 !== null && (
                    <Text color="red">{errorValidate.formstep1}</Text>
                  )}
                </div>
              </section>
            )}
            {formStep === 2 && (
              <section>
                <div className="typebooking2">
                  <h1>Paso 3: Selecciona tu ubicación</h1>

                  <section className="section-maps">
                    <div className="adress_content">
                      <PlacesAutocomplete childToParent={childToParent} />

                      <TextInput
                        label="Pais"
                        required
                        value={country}
                        onChange={(event) =>
                          setCountry(event.currentTarget.value)
                        }></TextInput>
                      <TextInput
                        label="Ciudad"
                        required
                        value={city}
                        onChange={(event) =>
                          setCity(event.currentTarget.value)
                        }></TextInput>
                      <TextInput
                        label="Zipcode"
                        value={zipcode}
                        onChange={(event) =>
                          setZipcode(event.currentTarget.value)
                        }></TextInput>
                    </div>
                    <div className="coordinates">
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}>
                        <Marker
                          visible={true}
                          onLoad={onLoad}
                          position={position}
                        />
                      </GoogleMap>
                    </div>
                  </section>
                </div>
                {errorValidate.formstep2 !== null && (
                  <Text color="red">{errorValidate.formstep2}</Text>
                )}
              </section>
            )}
            {formStep === 3 && (
              <section>
                <div className="typebooking2">
                  <h1>Paso 4: Sube tus fotos</h1>
                  <section>
                    <h2>Ahora, agreguemos algunas fotos de tu espacio</h2>
                    <div className="uploader">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={7}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <div className='buttons-uploads'>
              <Button variant="outline" color="pink" leftIcon={<CloudUpload/>}
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >Sube tus imágenes
            </Button>
            &nbsp;
            <Button variant="outline" color="pink" leftIcon={<TrashX/>} onClick={onImageRemoveAll}>Borra todas las imágenes</Button>
            </div>
            <div className='display-images'>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                <Button style={{marginRight:10}} variant="outline" size="xs" compact color="green" onClick={() => onImageUpdate(index)}>Cambiar</Button>
                <Button variant="outline" size="xs"   compact color="red" onClick={() => onImageRemove(index)}>Borrar</Button>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
                  </section>
                  <div className="addphotos">
                    {!!image && <img src={image} alt="upload preview" />}
                  </div>
                  {errorValidate.formstep3 !== null && (
                    <Text color="red">{errorValidate.formstep3}</Text>
                  )}
                </div>
              </section>
            )}
            {formStep === 4 && (
              <section>
                <div className="typebooking4">
                  <section>
                    <h1>Paso 4: Agrega los últimos detalles</h1>
                    <section>
                      <TextInput
                        label="Ponle un nombre a tu espacio"
                        min="2"
                        placeholder="Añade un titulo"
                        required
                        value={title}
                        onChange={(event) =>
                          setTitle(event.currentTarget.value)
                        }></TextInput>
                      <Textarea
                        label="Ahora vamos a describir tu espacio"
                        placeholder="Añade una descripción"
                        required
                        value={description}
                        onChange={(event) =>
                          setDescription(event.currentTarget.value)
                        }
                      />
                      <NumberInput
                        label="Ahora viene la mejor parte: define el precio por noche"
                        required
                        hideControls
                        value={price}
                        onChange={(val) => setPrice(val)}
                        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                        formatter={(value) =>
                          !Number.isNaN(parseFloat(value))
                            ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                            : '$ '
                        }
                        min={0}
                        step={1}
                        styles={{ input: { width: "100%" } }}
                      />
                    </section>
                  </section>
                </div>
                {errorValidate.formstep4 !== null && (
                  <Text color="red">{errorValidate.formstep4}</Text>
                )}
              </section>
            )}
            {formStep === 5 && (
              <section>
                <div className="typebooking5">
                  <ScrollArea style={{ height: 350 }}>
                    <h2>Revisa tu anuncio</h2>
                    <div className='display-images'>
                    <Swiper
                      pagination={{
                        dynamicBullets: true,
                      }}
                      modules={[Pagination]}
                      className="swiper1"
                      >
            {images.map((image, index) => (
                <SwiperSlide key={index} virtualIndex={index} className="swiper-slide1">
                <img src={image.data_url} alt=""/>
                </SwiperSlide>
            ))}
             </Swiper>
            </div>
                    <div>
                      <h3>
                        {title} - Anfitrión: {name}. {price}
                      </h3>
                    </div>
                    <div>
                      <h5>
                        {countGuest} huespedes - {countRooms} habitaciones -{' '}
                        {countBeds} camas- {countBaths} baños
                      </h5>
                    </div>
                    <div>
                      <h2>Descripcion del lugar</h2>
                      <p>{description}</p>
                    </div>
                    <div>
                      <h2>Lo que este lugar ofrece</h2>
                      {listItems}
                    </div>
                    <button className="send-form">Enviar</button>
                  </ScrollArea>
                </div>
              </section>
            )}
          </form>
          <section className="buttons-form-host">
            {renderButtonPrev()}
            {renderButtonNext()}
          </section>
         
        </div> 
      </Modal>
    </div>
  );
};

export default FormHost;
