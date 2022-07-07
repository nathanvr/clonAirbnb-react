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
  TextInput,
  Textarea,
  Text,
} from '@mantine/core';
import dayjsLocal from 'dayjs/locale/es';
import dayjs from 'dayjs';
import ReactStars from 'react-rating-stars-component';
import star from 'react-rating-stars-component/dist/star';

const containerStyle = {
  width: '350px',
  height: '250px',
};

const EditFormBooking = (booking) => {
  const dispatch = useDispatch();
  const theme = useMantineTheme();
  const [stars, setStars] = useState(4);
  const rating = [];
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(null);
  const [date, setDate] = useState([
    new Date(booking.booking.date[0]),
    new Date(booking.booking.date[1]),
  ]);
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
          Enviar
        </button>
      );
    }
  };
  console.log('DateZzZZ3: ', booking.booking);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setVisible(true);
    rating.push(stars);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'https://clonairbnb-backend.herokuapp.com/reviews/',
        {
          bookingSiteId: booking.booking.bookingSiteId,
          userId: booking.booking.userId,
          title: title,
          message: message,
          rating: rating,
        }
      );
      console.log('Response: ', response);
      if (response.status === 201) {
        setLoading(false);
        setVisible(false);
        toast.success('Se envio la reseña', {
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
      toast.error('No se pudo enviar la reseña', {
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
  var example1 = {
    size: 24,
    value: stars,
    onChange: (newValue) => {
      setStars(newValue);
    },
  };
  console.log(stars);

  return (
    <div>
      <Button color="violet" onClick={() => setOpened(true)}>
        Reseña
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
            <section>
              <div>
                <h1>Reseña</h1>
                <div className="App">
                  <Text>Califica tu experiencia</Text>
                  <ReactStars
                    {...example1}
                    count={5}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
                <TextInput
                  label="Añade un titulo a tu reseña"
                  placeholder="Añade un titulo"
                  required
                  value={title}
                  onChange={(event) =>
                    setTitle(event.currentTarget.value)
                  }></TextInput>
                <Textarea
                  label="Ahora dejanos tu opiniòn"
                  placeholder="Añade una reseña"
                  required
                  value={message}
                  onChange={(event) => setMessage(event.currentTarget.value)}
                />
              </div>
              <button className="send-form">Enviar</button>
            </section>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditFormBooking;
