import { useDispatch } from 'react-redux';
import axios from 'axios';
export const CLIENT_LOADING = 'CLIENT_LOADING';
export const ROLE_DEFINE = 'ROLE_DEFINE';
export const NAME_CHANGE = 'NAME_CHANGE';
export const LASTNAME_CHANGE = 'LASTNAME_CHANGE';
export const EMAIL_CHANGE = 'EMAIL_CHANGE';
export const BIRTHDAY_CHANGE = 'BIRTHDAY_CHANGE';
export const PASSWORD_CHANGE = 'PASSWORD_CHANGE';
export const PHONE_CHANGE = 'PHONE_CHANGE';
export const DESCRIPTION_CHANGE = 'DESCRIPTION_CHANGE';
export const BOOKINGSITES_CHANGE = 'BOOKINGSITES_CHANGE';
export const BOOKING_CHANGE = 'BOOKING_CHANGE';
export const REVIEWS_CHANGE = 'REVIEWS_CHANGE';
export const LOG_OUT = 'LOG_OUT';
export const SIGNED = 'SIGNED';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export function userDefine() {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    try {
      const { data: data } = await axios({
        method: 'GET',
        baseURL: 'http://localhost:8080/users',
        url: '/show',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = data.data;
      console.log('user_reducer:', user);
      dispatch({ type: ROLE_DEFINE, payload: user.role });
      dispatch({ type: NAME_CHANGE, payload: user.name });
      dispatch({ type: LASTNAME_CHANGE, payload: user.lastname });
      dispatch({ type: EMAIL_CHANGE, payload: user.email });
      dispatch({ type: BIRTHDAY_CHANGE, payload: user.birthday });
      dispatch({ type: PASSWORD_CHANGE, payload: user.password });
      dispatch({ type: PHONE_CHANGE, payload: user.phone });
      dispatch({ type: DESCRIPTION_CHANGE, payload: user.description });
      dispatch({ type: BOOKINGSITES_CHANGE, payload: user.bookingSites });
      dispatch({ type: BOOKING_CHANGE, payload: user.booking });
      dispatch({ type: REVIEWS_CHANGE, payload: user.reviews });
      dispatch({ type: SIGNED, payload: true });
    } catch (err) {
      //localStorage.setItem('token');
      dispatch({ type: SIGNIN_FAILURE, payload: err });
    }
  };
}

export function roleDefine(value) {
  return {
    type: ROLE_DEFINE,
    payload: value,
  };
}
export function nameChange(value) {
  return {
    type: NAME_CHANGE,
    payload: value,
  };
}
export function lastnameChange(value) {
  return {
    type: LASTNAME_CHANGE,
    payload: value,
  };
}
export function emailChange(value) {
  return {
    type: EMAIL_CHANGE,
    payload: value,
  };
}
export function birthdayChange(value) {
  return {
    type: BIRTHDAY_CHANGE,
    payload: value,
  };
}
export function passwordChange(value) {
  return {
    type: PASSWORD_CHANGE,
    payload: value,
  };
}
export function phoneChange(value) {
  return {
    type: PHONE_CHANGE,
    payload: value,
  };
}
export function descriptionChange(value) {
  return {
    type: DESCRIPTION_CHANGE,
    payload: value,
  };
}
export function bookingSitesChange(value) {
  return {
    type: BOOKINGSITES_CHANGE,
    payload: value,
  };
}
export function bookingChange(value) {
  return {
    type: BOOKING_CHANGE,
    payload: value,
  };
}
export function reviewsChange(value) {
  return {
    type: REVIEWS_CHANGE,
    payload: value,
  };
}
export function logOut() {
  return (dispatch) => {
    dispatch({ type: ROLE_DEFINE, payload: '' });
    dispatch({ type: NAME_CHANGE, payload: '' });
    dispatch({ type: LASTNAME_CHANGE, payload: '' });
    dispatch({ type: EMAIL_CHANGE, payload: '' });
    dispatch({ type: BIRTHDAY_CHANGE, payload: '' });
    dispatch({ type: PASSWORD_CHANGE, payload: '' });
    dispatch({ type: PHONE_CHANGE, payload: 0 });
    dispatch({ type: DESCRIPTION_CHANGE, payload: '' });
    dispatch({ type: BOOKINGSITES_CHANGE, payload: [] });
    dispatch({ type: BOOKING_CHANGE, payload: [] });
    dispatch({ type: REVIEWS_CHANGE, payload: [] });
    dispatch({ type: SIGNED, payload: false });
  };
}
export function signed(value) {
  return {
    type: SIGNED,
    payload: value,
  };
}
export function signinFailure(value) {
  return {
    type: SIGNIN_FAILURE,
    payload: value,
  };
}

const initialState = {
  loading: false,
  role: '',
  name: '',
  lastName: '',
  email: '',
  birthday: '',
  password: '',
  phone: 0,
  description: '',
  bookingSites: [],
  booking: [],
  reviews: [],
  signed: false,
  faiilure: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ROLE_DEFINE:
      return {
        ...state,
        role: action.payload,
      };
    case NAME_CHANGE:
      return {
        ...state,
        name: action.payload,
      };
    case LASTNAME_CHANGE:
      return {
        ...state,
        lastName: action.payload,
      };
    case EMAIL_CHANGE:
      return {
        ...state,
        email: action.payload,
      };
    case BIRTHDAY_CHANGE:
      return {
        ...state,
        birthday: action.payload,
      };
    case PASSWORD_CHANGE:
      return {
        ...state,
        password: action.payload,
      };
    case PHONE_CHANGE:
      return {
        ...state,
        phone: action.payload,
      };
    case DESCRIPTION_CHANGE:
      return {
        ...state,
        description: action.payload,
      };
    case BOOKINGSITES_CHANGE:
      return {
        ...state,
        bookingSites: [...action.payload],
      };
    case BOOKING_CHANGE:
      return {
        ...state,
        booking: [...action.payload],
      };
    case REVIEWS_CHANGE:
      return {
        ...state,
        reviews: [...action.payload],
      };
    case SIGNED:
      console.log('signed: ', signed);
      return {
        ...state,
        signed: action.payload,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        failure: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
