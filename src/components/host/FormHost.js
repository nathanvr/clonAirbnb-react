import { useState } from "react";
import { Modal, useMantineTheme} from '@mantine/core';
import { Link } from "react-router-dom";
import { NumberInput,Select, CheckboxGroup, Checkbox, TextInput } from '@mantine/core';


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

const FormHost =(props)=>{
    const { sitio } = props;
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [countGuest, setCountGuest] = useState(0);
    const [countBeds, setCountBeds] = useState(0);
    const [countRooms, setCountRooms] = useState(0);
    const [countBaths, setCountBaths] = useState(0);
    const [isChecked, setIsChecked] = useState([]);
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
    const [formStep, setformStep] = useState(0);
    const [title, setTitle]=useState("");
    const [description, setDescription]= useState("");
    const [price,setPrice]=useState(0);

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
        return( <button type="button" id ="button">Enviar</button>)
        } else{
            return undefined;
            
        }
    }
    

    
    return (
        <div>
            <Link to="#" onClick={() => setOpened(true)}>{sitio}</Link>
                <Modal size="90%" opened={opened}
                onClose={() => setOpened(false)}
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3} >
            
                <div className="container-form">
                
                {formStep===0 && <section>
                    <div className="typebooking">
                        <h1>Paso 1: Empieza con lo básico</h1>
                        <h2>Cuentanos acerca de tu espacio</h2>
                            <div className="select">
                                <Select placeholder="Selecciona una opción" value={selectedOption1} onChange={setSelectedOption1} data={options1} label="¿En qué tipo de espacio brindarás servicios de anfitrión?" required/> 
                            </div>
                            <div className="select">
                                <Select label="¿Cuál de estas opciones describe mejor tu espacio?" required placeholder="Selecciona una opción" value={selectedOption2} onChange={setSelectedOption2} data={options2} /> 
                            </div>
                            <div className="select">
                                <Select label="¿De qué tipo de espacio dispondrán los huéspedes?" required placeholder="Selecciona una opción" value={selectedOption3} onChange={setSelectedOption3} data={options3} /> 
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
                                            <button onClick={removeCountGuest}>-</button>
                                            <NumberInput
                                                hideControls
                                                value={countGuest}
                                                onChange={(val) => setCountGuest(val)}
                                                max={16}
                                                min={0}
                                                step={1}
                                                styles={{ input: { width: 44, textAlign: 'center' } }}
                                            /> 
                                            <button onClick={()=>addCountGuest()}>+</button>
                                        </div>
                                        <div className="section-guest">
                                            <div>Camas </div>
                                            <button onClick={removeCountBeds}>-</button>
                                            <NumberInput
                                                hideControls
                                                value={countBeds}
                                                onChange={(val) => setCountBeds(val)}
                                                max={50}
                                                min={0}
                                                step={1}
                                                styles={{ input: { width: 44, textAlign: 'center' } }}
                                            /> 
                                            <button onClick={addCountBeds}>+</button>   
                                        </div>
                                        <div className="section-guest">Habitaciones 
                                            <button onClick={removeCountRooms}>-</button>
                                            <NumberInput
                                                hideControls
                                                value={countRooms}
                                                onChange={(val) => setCountRooms(val)}
                                                max={50}
                                                min={0}
                                                step={1}
                                                styles={{ input: { width: 44, textAlign: 'center' } }}
                                            /> 
                                            <button onClick={addCountRooms}>+</button>   
                                        </div>
                                        <div className="section-guest">Baños
                                            <button onClick={removeCountBaths}>-</button>
                                            <NumberInput
                                                hideControls
                                                value={countBaths}
                                                onChange={(val) => setCountBaths(val)}
                                                max={50}
                                                min={0}
                                                step={1}
                                                styles={{ input: { width: 44, textAlign: 'center' } }}
                                            /> 
                                            <button onClick={addCountBaths}>+</button>   
                                        </div>
                                    </section>
                            <div className="info-1">
                                <CheckboxGroup value={isChecked} onChange={setIsChecked}  color="cyan"
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
                                <section>
                                    <div>
                                        <TextInput label="Ingresa la dirección del sitio" required></TextInput>
                                        <TextInput label="Ciudad" required></TextInput>
                                        <TextInput label="Pais" required></TextInput>
                                        <TextInput label="Zipcode" required></TextInput>
                                    </div>
                                </section>
                                </div>
                    </section>}
                {formStep===3 &&    <section>
                <div className="typebooking2">
                    
                        <h1>Paso 4: Sube tus fotos</h1>
                            <section>
                                <h2>Ahora, agreguemos algunas fotos de tu espacio</h2>
                                <button className="addphotos"></button>
                            </section>
                    
                </div>
                </section>}
                {formStep===4 &&    <section>
                <div className="typebooking4">
                    <section>
                        <h1>Paso 4: Agrega los últimos detalles</h1>
                            <section>
                                <h2>Ponle un nombre a tu espacio</h2>
                                <input type="text" placeholder="Añade un titulo" value={title} onInput={e => setTitle(e.target.value)} className="title"></input>
                                <h2>Ahora vamos a describir tu espacio</h2>
                                <textarea className="description" value={description} onInput={e => setDescription(e.target.value)}></textarea>
                                <h2>Ahora viene la mejor parte: define el precio</h2>
                                <label>$
                                    <input type="text" className="price" value={price} onInput={e => setPrice(e.target.value)}></input>/por noche
                                </label>
                            </section>
                    </section>
                </div>
                </section>}
                {formStep===5 &&    <section>
                <div className="typebooking4">
                                <h2>Revisa tu anuncio</h2>
                </div>
                </section>}
                <section className="buttons">
                {renderButtonPrev()}
                {renderButtonNext()}
                {renderButtonSubmit()}
                </section>
            </div>
            </Modal>
            </div>

    )
}

export default FormHost;
