import '../styles/components/Form.scss';
import { useState } from 'react';
import { DateRangePicker} from '@mantine/dates';
import { NumberInput, TextInput,Popper } from '@mantine/core';
import dayjs from 'dayjs';


const FormSearchDates = () => {
  const [place, setPlace] = useState("");
  const [value, setValue] = useState([
    new Date(),
    dayjs(new Date()).add(5, 'days').toDate(),
  ]);
  const [visible, setVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
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

        <div className="e">
        <DateRangePicker
          label="Check-in    →   Check-Out"
          placeholder="Selecciona tu fecha"
          value={value}
          onChange={setValue}
          minDate={new Date()}
    />

        </div>
        <div>
        <NumberInput placeholder="¿Cuántos viajan? "label="Viajeros" value={numGuest} onChange={(val) => setNumGuest(val)}  min={0} ref={setReferenceElement}  onClick={() => setVisible((m) => !m)}  />
        <Popper
        position='bottom'
        arrowSize={5}
        withArrow
        mounted={visible}
        referenceElement={referenceElement}
        transition="pop-top-left"
        transitionDuration={200}
    
      >
        HOLA
        </Popper>
        </div>
        <div className="searchContainerForm__button">
          <button onClick={() => alert('UwU')}> Buscar</button>
        </div>
      </form>
    </div>
  );
};
export default FormSearchDates;
