import '../styles/components/Form.scss';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DateRangePicker} from '@mantine/dates';
import { NumberInput, TextInput,Popper } from '@mantine/core';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { getBookingSitesFilter } from '../store/reducers/Filter.reducer';
import PlacesAutocomplete from './Maps/PlacesAutocomplete';



const FormSearchDates = () => {
  const location = useLocation();
  const navigate=useNavigate();
  const [place, setPlace] = useState("");
  const dispatch = useDispatch();
  const [value, setValue] = useState([
    new Date(),
    dayjs(new Date()).add(5, 'days').toDate(),
  ]);
  const [numGuest, setNumGuest] = useState(undefined);
  const filterdata ={
    city:place,
    total_occupancy:numGuest,

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getBookingSitesFilter(filterdata));
    navigate("/filter-bookings")
  };
  const childToParent = (childdata) => {
    setPlace(childdata.city);
}
  return (
    <div className={location.pathname === '/' ? "searchContainerForm"
                    : "searchContainerFormFilter"}>
      <h2 className={location.pathname === '/' ? "searchContainerForm__title"
                    : "searchContainerFormFilter__title"}>
        Reserva alojamientos y actividades únicas.
      </h2>
      <form className={location.pathname === '/' ? "searchContainerForm__form" : "searchContainerForm__formFilter"}  onSubmit={handleSubmit}>
        <div className="search_place">
        <PlacesAutocomplete childToParent={childToParent}/>
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
        <NumberInput required placeholder="¿Cuántos viajan? "label="Viajeros" value={numGuest} onChange={(val) => setNumGuest(val)}  min={1} />
        </div>
        <div className={location.pathname === '/' ? "searchContainerForm__button" : "searchContainerFormFilter__button" }>
          <button>Buscar</button>
        </div>
      </form>
    </div>
  );
};
export default FormSearchDates;
