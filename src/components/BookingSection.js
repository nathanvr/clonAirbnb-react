import { useState } from 'react';
import { DateRangePicker } from '@mantine/dates';
import { NumberInput } from '@mantine/core';
import Payment from './Payment';
import { useSelector } from 'react-redux';
import LoginModal from './LoginModal';
import dayjs from 'dayjs';
import 'dayjs/locale/es';


const BookingSection = (props) => {
  const now = dayjs(new Date());
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const { priceNigth, maxguest, dates } = props;
  const [date, setDate] = useState([new Date(), new Date()]);
  const [numGuest, setNumGuest] = useState(0);
  const totalDays = (date[1] - date[0]) / (1000 * 60 * 60 * 24);
  const totalNigths = totalDays * priceNigth;
  const taxService = totalNigths * 0.203;
  const taxClean = totalNigths * 0.042;
  const Total = totalNigths + taxService + taxClean;
<<<<<<< Updated upstream
  const example = [
    {date:[ "2022-06-29T05:00:00.000Z", "2022-07-06T05:00:00.000Z"]},
    {date:["2022-07-20T05:00:00.000Z", "2022-07-25T05:00:00.000Z"]}
  ]
  function getDates (startDate, endDate) {
    const dates = []
    let currentDate = startDate
    const addDays = function (days) {
      const date = new Date(this.valueOf())
      date.setDate(date.getDate() + days)
      return date
    }
    while (currentDate <= endDate) {
      dates.push(currentDate)
      currentDate = addDays.call(currentDate, 1)
    }
    return dates
  }

  let BookingDates=[]
  const datesf= example.forEach((index)=>{
    BookingDates.push(getDates(new Date(index.date[0]),new Date(index.date[1])))
  })

  console.log("hola",BookingDates.toString().split(","))  
  
=======
  const datesArr = (dates) => {
    return dates.map((item) => {
      const diff =
        (new Date(item[1]).getTime() - new Date(item[0]).getTime()) /
        (1000 * 60 * 60 * 24);
      for (let i = 0; i < diff; i++) {
        item[0] = new Date(item[0]);
      }
    });
  };
  datesArr(dates);
>>>>>>> Stashed changes
  return (
    <div className="bookingContainerForm">
      <h2 className="bookingContainerForm__title">${priceNigth} COP / noche</h2>
      <form className="bookingContainerForm__form">
        <div className="bookingContainerForm__form__schedule">
          <DateRangePicker
            locale="es"
            label="Selecciona las fechas"
            placeholder="Pick dates range"
            minDate={dayjs(new Date())
              .startOf('month')
              .add(now.date(), 'days')
              .toDate()}
            value={date}
            onChange={setDate}
<<<<<<< Updated upstream
            amountOfMonths={2}
            excludeDate={(date) => BookingDates.toString().split(",").some((dates)=> date.getTime() === new Date(dates).getTime()) } 
=======
            excludeDate={(date) => {
              console.log('Dates: ', date.toISOString());
              console.log('Dates2: ', dates);
              return [
                new Date(2022, 7, 24).toISOString(),
                new Date(2022, 7, 25),
                dates,
              ].includes(date.toISOString());
            }}
>>>>>>> Stashed changes
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
