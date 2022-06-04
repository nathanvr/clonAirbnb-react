import axios from "axios";
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
export const USER_REVIEWS = 'USER_BOOKINGS';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';

//action creator: login

export const postLogin = async() =>{

  return function (dispatch){
    
  }
}


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
  role: '',
  name: '',
  lastname: '',
  email: '',
  birthday: '',
  password: '',
  description: '',
  bookingSites: [],
  booking: [],
  reviews: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ROLE:
      return {
        ...state,
        role: action.payload.role,
      };
    case USER_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case USER_LASTNAME:
      return {
        ...state,
        lastName: action.payload.lastName,
      };
    case USER_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case USER_BIRTHDAY:
      return {
        ...state,
        birthday: action.payload.birthday,
      };
    case USER_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    case USER_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description,
      };
    case USER_BOOKINGSITES:
      return {
        ...state,
        bookingSites: [...this.bookingSites, action.payload.bookingSites],
      };
    case USER_BOOKINGS:
      return {
        ...state,
        booking: [...this.booking, action.payload.booking],
      };
    case USER_REVIEWS:
      return {
        ...state,
        reviews: [...this.reviews, action.payload.reviews],
      };
    default:
      return state;
  }
};

export default userReducer;
