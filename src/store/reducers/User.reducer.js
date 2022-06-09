import { ACTION_ICON_SIZES } from '@mantine/core';
import axios from 'axios';
export const USER_ID = 'USER_ID';
export const USER_ROLE = 'USER_ROLE';
export const USER_NAME = 'USER_NAME';
export const USER_LASTNAME = 'USER_LASTNAME';
export const USER_EMAIL = 'USER_EMAIL';
export const USER_BIRTHDAY = 'USER_BIRTHDAY';
export const USER_PASSWORD = 'USER_PASSWORD';
export const USER_DESCRIPTION = 'USER_DESCRIPTION';
export const USER_BOOKINGSITES = 'USER_BOOKINGSITES';
export const USER_BOOKINGS = 'USER_BOOKINGS';
export const USER_REVIEWS = 'USER_REVIEWS';
export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';

export const SIGNED = 'SIGNED';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';

//action creator: login

export const postLogin = (loginState) => {
  return async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    try {
      const res = await axios.post(
        'http://localhost:8080/users/login',
        loginState
      );
      localStorage.setItem('token', res.data.data);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res });
      dispatch(getUser());
    } catch (error) {
      dispatch({ type: USER_LOGIN_ERROR, payload: error });
    }
  };
};

export const getUser = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    console.log(token);
    try {
      const data = await axios({
        method: 'GET',
        baseURL: 'http://localhost:8080/users/getid',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = data.data;
      dispatch({ type: USER_ROLE, payload: user.role });
      dispatch({ type: USER_NAME, payload: user.name });
      dispatch({ type: USER_LASTNAME, payload: user.lastname });
      dispatch({ type: USER_EMAIL, payload: user.email });
      dispatch({ type: USER_BIRTHDAY, payload: user.birthday });
      dispatch({ type: USER_PASSWORD, payload: user.password });
      dispatch({ type: USER_DESCRIPTION, payload: user.description });
      dispatch({ type: USER_BOOKINGSITES, payload: user.bookingSites });
      dispatch({ type: USER_BOOKINGS, payload: user.booking });
      dispatch({ type: USER_REVIEWS, payload: user.reviews });
      dispatch({ type: SIGNED, payload: true });
    } catch (err) {
      dispatch({ type: SIGNIN_FAILURE, payload: err });
    }
  };
};

export const signOutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};

//action creator: Register
export const postRegister = (registerState) => {
  return async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST });
    try {
      const res = await axios.post(
        'http://localhost:8080/users/singup',
        registerState
      );
      localStorage.setItem('token', res.data.data.token);
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res });
      dispatch(getUser());
    } catch (error) {
      dispatch({ type: USER_REGISTER_ERROR, payload: error });
    }
  };
};

export const userUpdate = (value) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    console.log('value: ', value);
    try {
      await axios.put('http://localhost:8080/users/update', value, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getUser());
    } catch (error) {
      dispatch({ type: USER_REGISTER_ERROR, payload: error });
    }
  };
};

export function roleDefine(value) {
  return {
    type: USER_ROLE,
    payload: value,
  };
}
export function nameChange(value) {
  return {
    type: USER_NAME,
    payload: value,
  };
}
export function lastnameChange(value) {
  return {
    type: USER_LASTNAME,
    payload: value,
  };
}
export function emailChange(value) {
  return {
    type: USER_EMAIL,
    payload: value,
  };
}
export function birthdayChange(value) {
  return {
    type: USER_BIRTHDAY,
    payload: value,
  };
}
export function passwordChange(value) {
  return {
    type: USER_PASSWORD,
    payload: value,
  };
}
export function descriptionChange(value) {
  return {
    type: USER_DESCRIPTION,
    payload: value,
  };
}
export function bookingSitesChange(value) {
  return {
    type: USER_BOOKINGSITES,
    payload: value,
  };
}
export function bookingChange(value) {
  return {
    type: USER_BOOKINGS,
    payload: value,
  };
}
export function reviewsChange(value) {
  return {
    type: USER_REVIEWS,
    payload: value,
  };
}

const initialState = {
  token: null,
  loading: false,
  isLoggedIn: false,
  error: null,
  role: null,
  name: null,
  lastname: null,
  email: null,
  birthday: null,
  password: null,
  description: null,
  bookingSites: [],
  booking: [],
  reviews: [],
  signed: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.data.data,
        isLoggedIn: true,
        loading: false,
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        token: null,
        loading: false,
        isLoggedIn: false,
        role: null,
        name: null,
        lastname: null,
        email: null,
        birthday: null,
        password: null,
        description: null,
        bookingSites: [],
        booking: [],
        reviews: [],
        signed: false,
      };

    case USER_LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isLoggedIn: false,
        error: null,
      };
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.data.data.token,
        isLoggedIn: true,
        loading: false,
      };
    case USER_REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false,
        loading: false,
      };
    case USER_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    case USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case USER_LASTNAME:
      return {
        ...state,
        lastname: action.payload,
      };
    case USER_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case USER_BIRTHDAY:
      return {
        ...state,
        birthday: action.payload,
      };
    case USER_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case USER_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case USER_BOOKINGSITES:
      return {
        ...state,
        bookingSites: [...action.payload],
      };
    case USER_BOOKINGS:
      return {
        ...state,
        booking: [...action.payload],
      };
    case USER_REVIEWS:
      return {
        ...state,
        reviews: [...action.payload],
      };
    case SIGNED:
      return {
        ...state,
        signed: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
