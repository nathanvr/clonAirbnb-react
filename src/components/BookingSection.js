import { useState } from 'react';
import { DateRangePicker } from '@mantine/dates';
import { NumberInput } from '@mantine/core';
import Payment from './Payment';
import { useSelector } from 'react-redux';
import LoginModal from './LoginModal';

const BookingSection = (props) => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const { priceNigth, maxguest } = props;
  const [date, setDate] = useState([new Date(), new Date()]);
  const [numGuest, setNumGuest] = useState(0);
  const totalDays = (date[1] - date[0]) / (1000 * 60 * 60 * 24);
  const totalNigths = totalDays * priceNigth;
  const taxService = totalNigths * 0.203;
  const taxClean = totalNigths * 0.042;
  const Total = totalNigths + taxService + taxClean;
  return (
    <div className="bookingContainerForm">
      <h2 className="bookingContainerForm__title">${priceNigth} COP / noche</h2>
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
          {/* <button onClick={() => {}}>
            <h3>Reserva</h3>
          </button> */}
          {isLoggedIn ? (
            <Payment totalPay={Total}></Payment>
          ) : (
            <LoginModal sitio="Inicia Sesion" />
          )}
        </div>
        <div className="footer-price">
          <p>No se hará ningún cargo por el momento</p>
          <div className="price-box">
            <p>
              {priceNigth} x {totalDays} noches
            </p>
            <p> ${totalNigths} COP</p>
          </div>
          <div className="price-box">
            <p>Tarifa por servicio</p>
            <p>${taxService} COP</p>
          </div>

          <div className="price-box">
            <p>Tarifa por aseo</p>
            <p>${taxClean} COP</p>
          </div>

          <div className="price-box-total">
            <p>Total sin impuestos</p>
            <strong>
              <p>${Total} COP</p>
            </strong>
          </div>
        </div>
      </form>
    </div>
  );
};
export default BookingSection;
