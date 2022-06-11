import React,{ useEffect, useState, useMemo, useRef} from "react";
import { Burger, Modal, useMantineTheme, Textarea, Popover} from '@mantine/core';
import { Link } from "react-router-dom";
import { NumberInput,Select, CheckboxGroup, Checkbox, TextInput } from '@mantine/core';
import axios from "axios";
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
    useLoadScript,
    
  } from '@react-google-maps/api'
  import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import useOnclickOutside from "react-cool-onclickoutside";
  
  const PlacesAutocomplete = ({setSelected}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        try {
          const { lat, lng } = getLatLng(results[0]);
          console.log("📍 Coordinates: ", { lat, lng });
        } catch (error) {
          console.log("😱 Error: ", error);
        }
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref}>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where are you going?"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};

const options1 = [
    {value:"apartment", label:"Apartamentos"},
    {value:"house", label:"Casa"},
    {value:"attachedhouse", label:"Vivienda anexa"},
    {value:"uniqueaccommodation", label:"Alojamiento único"},
    {value:"bedandbreakfasts", label:"Bed and breakfasts"},
    {value:"hotelboutique", label:"Hotel boutique"}
]
const options2 = [
    {value:"lodging", label:"Alojamiento: Casa independiente o tiene paredes comunes con otras."},
    {value:"cottage", label:"Cabaña: Casa hecha de materiales naturales y construida en un entorno natural."},
    {value:"villa", label:"Villa: Alojamiento de lujo."},
    {value:"terraced-house", label:"Casa adosada: Casa de varios niveles que comparte paredes."},
    {value:"cabin", label:"Casa de campo: Casa construida en un área rural, cerca de un lago o playa."},
    {value:"bungalow", label:"Bungalow: Casa de un piso con un porche amplio y tejado inclinado"},
    {value:"hut", label:"Choza: Casa de madera o barro con techo de paja"},
    {value:"farm", label:"Estadía en granja: Alojamiento donde los huespedes pueden pasar tiempo en un entorno agrícola"},
    {value:"dome", label:"Domo: Alojamiento con techo de forma esférica"},
    {value:"chalet", label:"Chalé: Casa de madera con un techo inclinado."},
    {value:"tiny-house", label:"Minicasa: Casa independiente que generalmente mide menos de 35 metros cuadrados."},
    {value:"houseroom", label:"Casa particular: Habitación Privada"},
    {value:"holiday-accommodation", label:"Alojamiento Vacacional"},
]
const options3 = [
    {value:"entire", label:"Un alojamiento entero"},
    {value:"private", label:"Una habitación privada"},
    {value:"shared", label:"Una habitación compartida"},
]
const containerStyle = {
    width: '500px',
    height: '400px'
  };
  const center = { lat: 4.570868, lng:  -74.297333 }
  const position = {lat:3.43722, lng:-76.5225}
const FormHost =(props)=>{
    const { sitio } = props;
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
    const [address, setAddress]=useState("");
    const [city, setCity]=useState("");
    const [country, setCountry]=useState("");
    const [zipcode, setZipcode]=useState("");
    const [title, setTitle]=useState("");
    const [description, setDescription]= useState("");
    const [price,setPrice]=useState(0);
    const [lati, setLat]=useState( 0);
    const [lngi, setLng]=useState(0);
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [selected, setSelected] = useState(null)
    const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
     /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()
  const [ libraries ] = useState(['places']);

  
    //Huespedes
    const addCountGuest = () => { 
        if(countGuest === 16){
            return;  
            }
            setCountGuest(countGuest + 1);
    };
    const removeCountGuest = () => {
        if(countGuest === 0){
        return;  
        }
        setCountGuest(countGuest - 1);
    };
    //Camas
    const addCountBeds = () => {
        if(countBeds === 50){
            return;  
            }
            setCountBeds(countBeds + 1);
    };
    const removeCountBeds = () => {
        if(countBeds === 0){
        return;  
        }
        setCountBeds(countBeds - 1);
    };
    //Habitaciones
    const addCountRooms = () => {
        if(countRooms === 50){
            return;  
            }
            setCountRooms(countRooms + 1);
    };
    const removeCountRooms = () => {
        if(countRooms === 0){
        return;  
        }
        setCountRooms(countRooms - 1);
    };
    //Baños
    const addCountBaths = () => {
        if(countBaths=== 50){
            return;  
            }
            setCountBaths(countBaths + 1);
    };
    const removeCountBaths = () => {
        if(countBaths === 0){
        return;  
        }
        setCountBaths(countBaths - 1);
    };
    const completeFormStep =() =>{
        setformStep(cur=>cur+1);
    }
    const backFormStep =() =>{
        setformStep(cur=>cur-1);
    }
    const renderButtonPrev =()=>{
        if(formStep===0){
            return undefined;
        } 
        else{
            return(
                <button type="button"  id="button" onClick={backFormStep}>Anterior</button>
            )
        }
    }
    const renderButtonNext =()=>{
        if(formStep===5){
            return undefined;
        } else{
            return(
                <button type="button" id ="button" onClick={completeFormStep}>Siguiente</button>
            )
        }
    }
    const renderButtonSubmit =()=>{
        if(formStep===5){
        return( <button type="button" id ="button" onClick={handleSubmit}>Enviar</button>)
        } else{
            return undefined;
            
        }
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append("home_type", home_type)
        data.append("description_type", description_type)
        data.append("room_type", room_type)
        data.append("total_occupancy", countGuest)
        data.append("total_rooms", countRooms)
        data.append("total_beds", countBeds)
        data.append("total_bathrooms", countBaths)
        data.append("services", isChecked)
        data.append("title", title)
        data.append("description", description)
        data.append("price", price)
        data.append("address", address)
        data.append("city", city)
        data.append("country", country)
        data.append("zipcode", zipcode)
        data.append("lat", lati)
        data.append("lng", lngi)
        data.append("file",file)

        const token = localStorage.getItem('token');
        const response = await axios.post("http://localhost:8080/bookingsites/post", data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
        
        
    });
    console.log(response)
    
    }
    function handleChange(e) {
    setFile(e.target.files[0])
    }

console.log(file)

    function readFile(file) {
        const reader = new FileReader();
        //Result tiene el resultado de la imagen
        reader.onload = (e) => setImage(e.target.result);
        // reader.onload = e => console.log(e.target.result)
        //Como no hemos seleccionado imagen aùn
        reader.readAsDataURL(file);
    }
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_API_KEY,
        libraries,
    })

    if(!isLoaded) return <div>Loading...</div>;
    console.log(address)
    return (
        <div>
            <Link to="#" onClick={() => setOpened(true)}>{sitio}</Link>
                <Modal size="90%" opened={opened}
                onClose={() => setOpened(false)}
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3} >
            
                <div className="container-form">
                <form onSubmit={handleSubmit}>
                {formStep===0 && 
                <section>
                    <div className="typebooking">
                        <h1>Paso 1: Empieza con lo básico</h1>
                        <h2>Cuentanos acerca de tu espacio</h2>
                            <div className="select">
                                <Select placeholder="Selecciona una opción" value={home_type} onChange={setHome_type} data={options1} label="¿En qué tipo de espacio brindarás servicios de anfitrión?" required/> 
                            </div>
                            <div className="select">
                                <Select label="¿Cuál de estas opciones describe mejor tu espacio?" required placeholder="Selecciona una opción" value={description_type} onChange={setDescription_type} data={options2} /> 
                            </div>
                            <div className="select">
                                <Select label="¿De qué tipo de espacio dispondrán los huéspedes?" required placeholder="Selecciona una opción" value={room_type} onChange={setRoom_type} data={options3} /> 
                            </div>
                
                                
                        
                </div>
                </section> } 
                {formStep===1 &&<section>
                    <div className="typebooking2">
                        <h1>Paso 2: Describe tu espacio</h1>
                        
                        <h2>¿A cuántos huéspedes te gustaría recibir?<span className="red"> *</span></h2>
                                    <section className="counter">
                                        <div className="section-guest">
                                            <p>Huéspedes</p>
                                            <div className="button-counter" onClick={removeCountGuest}>-</div>
                                            <NumberInput
                                                hideControls
                                                value={countGuest}
                                                onChange={(val) => setCountGuest(val)}
                                                max={16}
                                                min={0}
                                                step={1}
                                                styles={{ input: { width: 44, textAlign: 'center' } }}
                                            /> 
                                            <div  className="button-counter" onClick={()=>addCountGuest()}>+</div>
                                        </div>
                                        <div className="section-guest">
                                            <div>Camas </div>
                                            <div className="button-counter" onClick={removeCountBeds}>-</div>
                                            <NumberInput
                                                hideControls
                                                value={countBeds}
                                                onChange={(val) => setCountBeds(val)}
                                                max={50}
                                                min={0}
                                                step={1}
                                                styles={{ input: { width: 44, textAlign: 'center' } }}
                                            /> 
                                            <div className="button-counter" onClick={addCountBeds}>+</div>   
                                        </div>
                                        <div className="section-guest">Habitaciones 
                                            <div className="button-counter"  onClick={removeCountRooms}>-</div>
                                            <NumberInput
                                                hideControls
                                                value={countRooms}
                                                onChange={(val) => setCountRooms(val)}
                                                max={50}
                                                min={0}
                                                step={1}
                                                styles={{ input: { width: 44, textAlign: 'center' } }}
                                            /> 
                                            <div className="button-counter" onClick={addCountRooms}>+</div>   
                                        </div>
                                        <div className="section-guest">Baños
                                            <div className="button-counter" onClick={removeCountBaths}>-</div>
                                            <NumberInput
                                                hideControls
                                                value={countBaths}
                                                onChange={(val) => setCountBaths(val)}
                                                max={50}
                                                min={0}
                                                step={1}
                                                styles={{ input: { width: 44, textAlign: 'center' } }}
                                            /> 
                                            <div className="button-counter" onClick={addCountBaths}>+</div>   
                                        </div>
                                    </section>
                            <div className="info-1">
                                <CheckboxGroup value={isChecked} onChange={setIsChecked}   color="violet"
                                                label="¿Tienes alguna comodidad destacada?"
                                                required
                                                spacing="xl"
                                                size="md">
                                    <Checkbox value="pool" label="Piscina"/>
                                    <Checkbox value="jacuzzi" label="Jacuzzi" />
                                    <Checkbox value="bbq" label="Parrilla" />
                                    <Checkbox value="woodfire" label="Fogata" />
                                    <Checkbox value="essentialservices" label="Servicios imprescindibles" />
                                    <Checkbox value="hotwater" label="Agua caliente" />
                                    <Checkbox value="wifi" label="Wifi" />
                                    <Checkbox value="tv" label="TV" />
                                    <Checkbox value="kitchen" label="Cocina" />
                                    <Checkbox value="washer" label="Lavadora" />
                                    <Checkbox value="airconditioner" label="Aire acondicionado" />
                                    <Checkbox value="firstaidkit" label="Botiquín" />
                                </CheckboxGroup>
                            </div>         
                </div>
                </section>}
                {formStep===2 &&<section>
                    <div className="typebooking2">
                    <h1>Paso 3: Selecciona tu ubicación</h1>
                        
                        <h2>Ingresa la ubicación del espacio</h2>
                                <section className="section-map">
                                    <div className="adress_content">
                                    <TextInput label="Ingresa la dirección del sitio" required value={address} onChange={(event) => setAddress(event.currentTarget.value)}></TextInput>
                                        <TextInput label="Ciudad" required value={city} onChange={(event) => setCity(event.currentTarget.value)}></TextInput>
                                        <TextInput label="Pais" required value={country} onChange={(event) => setCountry(event.currentTarget.value)}></TextInput>
                                        <TextInput label="Zipcode" value={zipcode} onChange={(event) => setZipcode(event.currentTarget.value)}></TextInput>

                                                <TextInput label="Ingresa la latitud" required value={lati} onChange={(event) => setLat(event.currentTarget.value)}></TextInput>
                                                <TextInput label="Ingresa la longitud" required value={lngi} onChange={(event) => setLng(event.currentTarget.value)}></TextInput>
                                    
                                        <div className="coordinates">
                                        <GoogleMap
                                                mapContainerStyle={containerStyle}
                                                center={center}
                                                zoom={9}>
                                                    <Marker  position={selected}/>
                                                
                                            </GoogleMap>
                                        </div>

                                    </div>
                                    <div>
                                        <div>

                                        </div>
                                        <div className="adress_content">
                                            <PlacesAutocomplete setSelected={setSelected}/>
                                        </div>
                                    </div>
                                </section>
                                </div>
                    </section>}
                {formStep===3 &&    <section>
                <div className="typebooking2">
                    
                        <h1>Paso 4: Sube tus fotos</h1>
                            <section>
                                <h2>Ahora, agreguemos algunas fotos de tu espacio</h2>
                                {/*<div className="addphotos"></div>*/}
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="file"
                                    id="file"
                                    onChange={handleChange}
                                    />
                            </section>
                            <div className="addphotos">
                            {!!image && <img src={image} alt="upload preview" />}
                            
                            </div>
                    
                </div>
                </section>}
                {formStep===4 &&    <section>
                <div className="typebooking4">
                    <section>
                        <h1>Paso 4: Agrega los últimos detalles</h1>
                            <section>
                                <TextInput label="Ponle un nombre a tu espacio" placeholder="Añade un titulo" required value={title} onChange={(event) => setTitle(event.currentTarget.value)}></TextInput>
                                <Textarea label="Ahora vamos a describir tu espacio" placeholder="Añade una descripción"  required  value={description} onChange={(event) => setDescription(event.currentTarget.value)}/>
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
                                                styles={{ input: { width: 400, } }}
                                            /> 
                            </section>
                    </section>
                </div>
                </section>}
                {formStep===5 &&    <section>
                <div className="typebooking4">
                                <h2>Revisa tu anuncio</h2>
                                <div className="addphotos">
                                    {!!image && <img src={image} alt="upload preview" />}
                                </div>
                                {home_type === "apartment" && <h3>Apartamento</h3>}
                                {countBeds}
                                {countBaths}
                                {price}
                                {isChecked}
                                {}
                                <section className="buttons">
                                <button>Enviar</button>
                                </section>
                </div>
                </section>}
                </form>
                <section className="buttons">
                {renderButtonPrev()}
                {renderButtonNext()}
                </section>
            </div>
            </Modal>
            </div>

    )
}

export default FormHost;
