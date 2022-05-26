import '../styles/components/Form.scss';
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { NumberInput } from '@mantine/core';


const FormSearchDates = () => {
  const [arrival, setArrival] = useState(new Date());
  const [departure, setDeparture] = useState(new Date());
  const [numGuest, setNumGuest] = useState(0);
  return (
    <div className="searchContainerForm">
      <h2 className="searchContainerForm__title">
        Reserva alojamientos y actividades únicas.
      </h2>
      <form className="searchContainerForm__form">
        <label className="searchContainerForm__form__where">
          Donde?
          <input type="text" placeholder="En todo el mundo!"></input>
        </label>

        <div className="searchContainerForm__form__schedule">
        <DatePicker value={arrival}  inputFormat="MM/DD/YYYY" onChange={setArrival} label="LLegada"/>
        <DatePicker value={departure}  inputFormat="MM/DD/YYYY"  onChange={setDeparture} label="Salida" />
        </div>

        <NumberInput label="Viajeros" value={numGuest} onChange={(val) => setNumGuest(val)} />

        <div className="searchContainerForm__button">
          <button onClick={() => alert('UwU')}> Buscar</button>
        </div>
      </form>
    </div>
  );
};
export default FormSearchDates;
