import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getUser } from '../store/reducers/User.reducer';
import {
  Modal,
  useMantineTheme,
  LoadingOverlay,
  Button,
  ScrollArea,
} from '@mantine/core';
import { DateRangePicker } from '@mantine/dates';
import dayjsLocal from 'dayjs/locale/es';
import dayjs from 'dayjs';

const containerStyle = {
  width: '350px',
  height: '250px',
};

const EditFormBooking = (booking) => {
  const dispatch = useDispatch();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(null);
  const [date, setDate] = useState([]);
  const [formStep, setformStep] = useState(0);
  console.log('DateZzZZ: ', booking.booking.date[0]);
  const [dateOld, setDateOld] = useState([
    new Date(booking.booking.date[0]),
    new Date(booking.booking.date[1]),
  ]);
  const example = [
    { date: ['2022-06-29T05:00:00.000Z', '2022-07-06T05:00:00.000Z'] },
    { date: ['2022-07-20T05:00:00.000Z', '2022-07-25T05:00:00.000Z'] },
  ];

  function getDates(startDate, endDate) {
    const dates = [];
    let currentDate = startDate;
    const addDays = function (days) {
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  }

  let BookingDates = [];
  const datesf = example.forEach((index) => {
    BookingDates.push(
      getDates(new Date(index.date[0]), new Date(index.date[1]))
    );
  });
  console.log('DateZzZZ5: ', booking.booking.date[0]);
  const now = dayjs(new Date());

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
  console.log('DateZzZZ4: ', booking.booking.date[0]);
  const renderButtonNext = () => {
    if (formStep === 6) {
      return undefined;
    } else {
      return (
        <button type="button" id="button" onClick={completeFormStep}>
          Siguiente
        </button>
      );
    }
  };
  console.log('DateZzZZ3: ', booking.booking.date[0]);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setVisible(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:8080/bookingsites/update/${booking._id}`,
        date,
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
        toast.success('Se actualizó tu resserva', {
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
      }
    } catch (error) {
      setError(error);
      setLoading(false);
      setVisible(false);
      toast.error('No se pudo actualizar tu reserva', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    console.log('DateZzZZ2: ', booking.booking.date[0]);
  }
  return (
    <div>
      <Button color="violet" onClick={() => setOpened(true)}>
        Editar
      </Button>
      <Modal
        size="70%"
        opened={opened}
        onClose={() => setOpened(false)}
        overlayColor={
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}>
        <div>
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
                <div>
                  <h1>Cambia la fecha</h1>
                  <h2>Elige una nueva fecha de hospedaje.</h2>
                  <DateRangePicker
                    locale="es"
                    label="Selecciona las fechas"
                    placeholder="Inicio/Fin"
                    minDate={dayjs(new Date())
                      .startOf('month')
                      .add(now.date(), 'days')
                      .toDate()}
                    value={date}
                    onChange={setDate}
                    amountOfMonths={2}
                    excludeDate={(date) =>
                      BookingDates.toString()
                        .split(',')
                        .some(
                          (dates) =>
                            date.getTime() === new Date(dates).getTime()
                        )
                    }
                  />
                </div>
              </section>
            )}
            {formStep === 1 && (
              <section>
                <div className="typebooking5">
                  <ScrollArea style={{ height: 350 }}>
                    <h1>Hecho</h1>
                    <h2>Este fue tu cambio</h2>
                    <div>
                      <p>
                        {`Desde el 
                      ${dateOld[0].getDate()} de ${
                          dayjsLocal.months[dateOld[0].getMonth()]
                        } de ${dateOld[0].getFullYear()}
                      , hasta el
                      ${dateOld[1].getDate()} de ${
                          dayjsLocal.months[dateOld[1].getMonth()]
                        } de ${dateOld[1].getFullYear()}`}
                      </p>
                      <p>Cambia a</p>
                      <p>
                        {`Desde el 
                      ${dateOld[0].getDate()} de ${
                          dayjsLocal.months[dateOld[0].getMonth()]
                        } de ${dateOld[0].getFullYear()}
                      , hasta el
                      ${dateOld[1].getDate()} de ${
                          dayjsLocal.months[dateOld[1].getMonth()]
                        } de ${dateOld[1].getFullYear()}`}
                      </p>
                    </div>
                    <button className="send-form">Enviar</button>
                  </ScrollArea>
                </div>
              </section>
            )}
          </form>
          <section className="buttons">
            {renderButtonPrev()}
            {renderButtonNext()}
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default EditFormBooking;
