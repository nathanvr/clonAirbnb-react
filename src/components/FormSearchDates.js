import '../styles/components/Form.scss';
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { NumberInput, TextInput } from '@mantine/core';


const FormSearchDates = () => {
  const [place, setPlace] = useState("");
  const [arrival, setArrival] = useState(new Date());
  const [departure, setDeparture] = useState(new Date());
  const [numGuest, setNumGuest] = useState(0);
  return (
    <div className="searchContainerForm">
      <h2 className="searchContainerForm__title">
        Reserva alojamientos y actividades únicas.
      </h2>
      <form className="searchContainerForm__form">
        <div className="search_place">
          <TextInput value={place} onChange={(event) => setPlace(event.currentTarget.value)} label="Destino" placeholder='Ingresa tu destino'/>
        </div>

        <div className="searchContainerForm__form__schedule">
        <DatePicker value={arrival} placeholder="Ingreso"  inputFormat="MM/DD/YYYY" onChange={setArrival} label="Llegada"/>
        <DatePicker value={departure}  placeholder="Salida" inputFormat="MM/DD/YYYY"  onChange={setDeparture} label="Salida" />
        </div>
        <div>
        <NumberInput placeholder="¿Cuántos viajan? "label="Viajeros" value={numGuest} onChange={(val) => setNumGuest(val)}  min={0} />
        </div>
        <div className="searchContainerForm__button">
          <button onClick={() => alert('UwU')}> Buscar</button>
        </div>
      </form>
    </div>
  );
};
export default FormSearchDates;
