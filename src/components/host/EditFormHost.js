import React, { useState } from 'react';
import {
  Modal,
  useMantineTheme,
  Textarea,
  LoadingOverlay,
} from '@mantine/core';
import {
  NumberInput,
  Select,
  CheckboxGroup,
  Checkbox,
  TextInput,
  Button,
  ScrollArea,
} from '@mantine/core';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import PlacesAutocomplete from '../Maps/PlacesAutocomplete';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
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

const EditFormHost = ({ booking }) => {
  const { name } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const theme = useMantineTheme();
  const string = booking.services.toString();
  const services = string.split(',');
  const arrayImages = booking.images.toString().split(',');
  const [opened, setOpened] = useState(false);
  const [countGuest, setCountGuest] = useState(booking.total_occupancy);
  const [countBeds, setCountBeds] = useState(booking.total_beds);
  const [countRooms, setCountRooms] = useState(booking.total_rooms);
  const [countBaths, setCountBaths] = useState(booking.total_bathrooms);
  const [isChecked, setIsChecked] = useState(services);
  const [home_type, setHome_type] = useState(booking.home_type);
  const [description_type, setDescription_type] = useState(
    booking.description_type
  );
  const [room_type, setRoom_type] = useState(booking.room_type);
  const [formStep, setformStep] = useState(0);
  const [address, setAddress] = useState(booking.address);
  const [city, setCity] = useState(booking.city);
  const [country, setCountry] = useState(booking.country);
  const [zipcode, setZipcode] = useState(booking.zipcode);
  const [title, setTitle] = useState(booking.title);
  const [description, setDescription] = useState(booking.description);
  const [price, setPrice] = useState(booking.price);
  const [lati, setLat] = useState(booking.lat);
  const [lngi, setLng] = useState(booking.lng);
  const [image, setImage] = useState(null);
  const [images1, setImages1] = useState([]);
  const [file, setFile] = useState([]);
  const [center, setCenter] = useState({
    lat: Number(booking.lat),
    lng: Number(booking.lng),
  });
  const [position, setPosition] = useState({
    lat: Number(booking.lat),
    lng: Number(booking.lng),
  });
  const [images, setImages] = useState(arrayImages);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(null);
  const [libraries] = useState(['places']);

  const onLoad = (marker) => {
    console.log('marker: ', marker);
  };

  //Current date
  const now = dayjs(new Date());

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
  const completeFormStep = () => {
    setformStep((cur) => cur + 1);
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
    if (images) {
      data.append('images', images);
    }
    if (file) {
      for (let i = 0; i < file.length; i++) {
        //nombre de la propiedad, archivo y nombre del archivo
        data.append(`file_${i}`, file[i], file[i].name);
      }
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `https://clonairbnb-backend.herokuapp.com/bookingsites/update/${booking._id}`,
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
        toast.success('Se actualizó tu sitio', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(getUser());
        setOpened(false);
        setImages1([])
        setFile(null)
      }
    } catch (error) {
      setError(error);
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

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages1(imageList);
    const array = [];
    imageList.map((item)=>{
      array.push(item.file)
    })
    setFile(array)
  };

  function readFile(file) {
    const reader = new FileReader();
    //Result tiene el resultado de la imagen
    reader.onload = (e) => setImage(e.target.result);
    // reader.onload = e => console.log(e.target.result)
    //Como no hemos seleccionado imagen aùn
    reader.readAsDataURL(file);
  }
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

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCsW9trmjliEY9-Qz_uuAK8C2DRCUFzDqs',
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

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
  return (
    <div>
      <Button color="violet" onClick={() => setOpened(true)}>
        Editar
      </Button>
      <Modal
        size="85%"
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
        value={images1}
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
            >
              Da click o arrastra tus imagenes aquí
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
                    <h2>Imagenes guardadas</h2>
                    <div className="currentphoto">
                      {booking.images
                        .toString()
                        .split(',')
                        .map((image, index) => {
                          return (
                            <div className="currentphotomap" key={index}>
                              <img
                                src={image}
                                alt="upload preview"
                                key={index}
                              />
                              <CheckboxGroup
                                value={images}
                                onChange={setImages}
                                color="violet"
                                required
                                spacing="xl"
                                size="md">
                                <Checkbox
                                  value={image}
                                  label={`Foto ${index + 1}`}
                                />
                              </CheckboxGroup>
                            </div>
                          );
                        })}
                    </div>
                  </div>
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
                        label="Ahora viene la mejor parte: define el precio"
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
                <img src={image} alt=""/>
                </SwiperSlide>
            ))}
            {images1.map((image, index) => (
                <SwiperSlide key={index} virtualIndex={index} className="swiper-slide1">
                <img src={image.data_url} alt=""/>
                </SwiperSlide>
            ))}
             </Swiper>
            </div><div>
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

export default EditFormHost;
