import axios from 'axios';

export const FILTEREDBOOKING_SUCCESS = 'FILTEREDBOOKING_SUCCESS';
export const FILTEREDBOOKING_ERROR = 'FILTEREDBOOKING_ERROR';
export const FILTEREDBOOKING_LOADING = 'FILTEREDBOOKING_LOADING';

//this endpoint could be used in the panel where is show all the bookings sites
export const getBookingSitesFilter = (filterdata) => {
    return async (dispatch) => { 
    dispatch({ type: FILTEREDBOOKING_LOADING, payload: true });
    try {
    const res = await axios.get("http://localhost:8080/bookingsites/filter", {params:filterdata});
    console.log("respuesta",res)
    dispatch({ type: FILTEREDBOOKING_SUCCESS, payload: res.data.data});

    } catch (err) {
    dispatch({ type: FILTEREDBOOKING_ERROR, payload: err });
    } finally {
    dispatch({ type: FILTEREDBOOKING_LOADING, payload: false });
    }
};
};

const initialState = {
  loading: false,
  error: null,
  bookingfiltered: [],
};

const FilterReducer = (state = initialState, action) => {
    switch (action.type) {
    case FILTEREDBOOKING_LOADING:
    return {
        ...state,
        loading: true,
        error: null,
    };
    case FILTEREDBOOKING_SUCCESS:
        return {
        ...state,
        loading: false,
        bookingfiltered: action.payload,
    };

    case FILTEREDBOOKING_ERROR:
    return {
        ...state,
        loading: false,
        error: action.payload,
    };

    default:
    return state;
  }
};

export default FilterReducer;
