import { useState } from 'react';
import { DateRangePicker } from '@mantine/dates';
import { NumberInput } from '@mantine/core';

const BookingSection = (props) => {
  const { priceNigth, maxguest } = props;
  const [date, setDate] = useState([new Date(), new Date()]);
  const [numGuest, setNumGuest] = useState(0);
  return (
    <div className="bookingContainerForm">
      <h2 className="bookingContainerForm__title">${priceNigth} COP /noche</h2>
      <form className="bookingContainerForm__form">
        <div className="bookingContainerForm__form__schedule">
          <DateRangePicker
            label="Selecciona las fechas"
            placeholder="Pick dates range"
            value={date}
            onChange={setDate}
            amountOfMonths={2}
          />
        </div>
        <div>
          <NumberInput
            placeholder="¿Cuántos viajan? "
            label="Viajeros"
            value={numGuest}
            onChange={(val) => setNumGuest(val)}
            min={1}
            max={maxguest}
          />
        </div>
        <div className="bookingContainerForm__button">
          <button onClick={() => alert('UwU')}>
            <h3>Reserva</h3>
          </button>
        </div>
        <div className="footer-price">
          <p>No se hará ningún cargo por el momento</p>
          <div className="price-box">
            <p>$68,900 COP x 7 noches</p>
            <p> $482,300 COP</p>
          </div>
          <div className="price-box">
            <p>Tarifa por servicio</p>
            <p>$41,324 COP</p>
          </div>
          <div className="price-box-total">
            <p>Total sin incluir impuestos</p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default BookingSection;
