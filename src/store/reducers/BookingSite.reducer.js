import axios from 'axios';

export const BOOKINGSITE_REQUEST = 'BOOKINGSITE_REQUEST';
export const BOOKINGSITE_SUCCESS = 'BOOKINGSITE_SUCCESS';
export const BOOKINGSITE_ERROR = 'BOOKINGSITE_ERROR';
export const BOOKINGSITE_LOADING = 'BOOKINGSITE_LOADING';

export const getBookingSite = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: 'GET',
        baseURL: `https://clonairbnb-backend.herokuapp.com/bookingsites/${id}`,
        // Authorization: `Bearer ${token}`,
      });
      dispatch({ type: BOOKINGSITE_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: BOOKINGSITE_ERROR, payload: error });
    } finally {
      dispatch({ type: BOOKINGSITE_LOADING, payload: false });
    }
  };
};

const initialState = {
  loading: true,
  error: null,
  bookingSiteData: {},
};

const bookingSiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKINGSITE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case BOOKINGSITE_SUCCESS:
      return {
        ...state,
        bookingSiteData: action.payload,
      };

    case BOOKINGSITE_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default bookingSiteReducer;
