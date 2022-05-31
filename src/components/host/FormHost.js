import { useState } from "react";
import { Modal, useMantineTheme} from '@mantine/core';
import { Icon } from '@iconify/react';
import Select from 'react-select';
import { Link } from "react-router-dom";
import { Services, ServicesSecond, ServicesThird } from "./Services";
import GoogleMapForm from "../GoogleMapForm"


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
    const [isChecked, setIsChecked] = useState(
            new Array(Services.length).fill(false));
        

    const [isChecked2, setIsChecked2] = useState(
            new Array (ServicesSecond.length).fill(false));

    const [isChecked3, setIsChecked3] = useState(
        new Array(ServicesThird.length).fill(false));

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
    const handleOnChange = (position) => {
        const updatedCheckedState = isChecked.map((item, index) =>
        index === position ? !item : item
      );
  
        setIsChecked(updatedCheckedState);
    };
    const handleOnChange2 = (position2) => {
        const updatedCheckedState2 = isChecked2.map((item2, index2) =>
        index2 === position2 ? !item2 : item2
      );
  
        setIsChecked2(updatedCheckedState2);
    };
    const handleOnChange3 = (position3) => {
        const updatedCheckedState3 = isChecked3.map((item3, index3) =>
        index3 === position3 ? !item3 : item3
      );
  
        setIsChecked3(updatedCheckedState3);
    };
    return (
        <div>
            <Link to="#" onClick={() => setOpened(true)}>{sitio}</Link>
        <Modal Modal size="90%" opened={opened}
        onClose={() => setOpened(false)}
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3} >
        <div className="container-form">
            
            {formStep===0 && <section>
                <div className="typebooking">
                    <h1>Paso 1: Empieza con lo básico</h1>
                        <div>
                            <h2>¿En qué tipo de espacio brindarás servicios de anfitrión?</h2>
                            <Select placeholder="Selecciona una opción" defaultValue={selectedOption1} onChange={setSelectedOption1} options={options1} /> 
                        </div>
                        <h2>¿Cuál de estas opciones describe mejor tu espacio?</h2>
                        <div>
                            <Select placeholder="Selecciona una opción" defaultValue={selectedOption2} onChange={setSelectedOption2} options={options2} /> 
                        </div>
                        <h2>¿De qué tipo de espacio dispondrán los huéspedes?</h2>
                        <div>
                            <Select placeholder="Selecciona una opción" defaultValue={selectedOption3} onChange={setSelectedOption3} options={options3} /> 
                        </div>
            
                            <h2>¿A cuántos huéspedes te gustaría recibir?</h2>
                                <section className="counter">
                                    <div>Huéspedes 
                                        <button onClick={removeCountGuest}>-</button>{countGuest} 
                                        <button onClick={()=>addCountGuest()}>+</button>
                                    </div>
                                    <div>Camas 
                                        <button onClick={removeCountBeds}>-</button>{countBeds} 
                                        <button onClick={addCountBeds}>+</button>   
                                    </div>
                                    <div>Habitaciones 
                                        <button onClick={removeCountRooms}>-</button>{countRooms} 
                                        <button onClick={addCountRooms}>+</button>   
                                    </div>
                                    <div>Baños
                                        <button onClick={removeCountBaths}>-</button>{countBaths} 
                                        <button onClick={addCountBaths}>+</button>   
                                    </div>
                                </section>
                    
            </div>
            </section> } 
            {formStep===1 &&<section>
                <div className="typebooking2">
                    <h1>Paso 2: Describe tu espacio</h1>
                    <h2>Cuéntale a los huéspedes todo lo que tu espacio tiene para ofrecer</h2>
                        <div className="info-1">
                            <h3>¿Tienes alguna comodidad destacada?</h3>
                                <ul>
                                {Services.map(({name, icon}, index)=>{
                                    return(
                                        <li key={index}>
                                            <input
                                                    type="checkbox"
                                                    id={index}
                                                    name={name}
                                                    value={name}
                                                    checked={isChecked[index]}
                                                    onChange={() => handleOnChange(index)}
                                                />
                                                <label><Icon icon={icon}></Icon>{name}</label>                                            
                                        </li>
                                    )
                                })}
                                </ul>
                                    <h3>¿Estos son los servicios preferidos por los huéspedes. ¿Los tienes?</h3>
                                    <ul>
                                {ServicesSecond.map(({name2, icon2}, index2)=>{
                                    return(
                                        <li key={index2}>
                                            <input
                                                    type="checkbox"
                                                    id={index2}
                                                    name={name2}
                                                    value={name2}
                                                    checked={isChecked2[index2]}
                                                    onChange={() => handleOnChange2(index2)}
                                                />
                                                <label><Icon icon={icon2}></Icon>{name2}</label>                                            
                                        </li>
                                    )
                                })}
                                </ul>
                                    <h3>¿Cuentas con alguno de estos elementos de seguridad?</h3>
                                <ul>
                                {ServicesThird.map(({name3, icon3}, index3)=>{
                                    return(
                                        <li key={index3}>
                                            <input
                                                    type="checkbox"
                                                    id={index3}
                                                    name={name3}
                                                    value={name3}
                                                    checked={isChecked3[index3]}
                                                    onChange={() => handleOnChange3(index3)}
                                                />
                                                <label><Icon icon={icon3}></Icon>{name3}</label>                                            
                                        </li>
                                    )
                                })}
                                </ul>
                        </div>         
            </div>
            </section>}
            {formStep===2 &&<section>
                <h2>¿Dónde se encuentra tu espacio?</h2>
                            <section>
                                <GoogleMapForm></GoogleMapForm>
                            </section>
                </section>}
            {formStep===3 &&    <section>
            <div className="typebooking2">
                
                    <h1>Paso 3: Sube tus fotos</h1>
                        <section>
                            <h2>Ahora, agreguemos algunas fotos de tu espacio</h2>
                            <button className="addphotos"><Icon icon="material-symbols:add-a-photo" /></button>
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
