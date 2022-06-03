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

export function roleDefine(value) {
  return {
    type: DEFINE_ROLE,
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

const initialState = {
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
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROLE_DEFINE:
      return {
        ...state,
        role: action.payload.role,
      };
    case NAME_CHANGE:
      return {
        ...state,
        name: action.payload.name,
      };
    case LASTNAME_CHANGE:
      return {
        ...state,
        lastName: action.payload.lastName,
      };
    case EMAIL_CHANGE:
      return {
        ...state,
        email: action.payload.email,
      };
    case BIRTHDAY_CHANGE:
      return {
        ...state,
        birthday: action.payload.birthday,
      };
    case PASSWORD_CHANGE:
      return {
        ...state,
        password: action.payload.password,
      };
    case PHONE_CHANGE:
      return {
        ...state,
        phone: action.payload.phone,
      };
    case DESCRIPTION_CHANGE:
      return {
        ...state,
        description: action.payload.description,
      };
    case BOOKINGSITES_CHANGE:
      return {
        ...state,
        bookingSites: [...this.bookingSites, action.payload.bookingSites],
      };
    case BOOKING_CHANGE:
      return {
        ...state,
        booking: [...this.booking, action.payload.booking],
      };
    case REVIEWS_CHANGE:
      return {
        ...state,
        reviews: [...this.reviews, action.payload.reviews],
      };
    default:
      return state;
  }
};

export default userReducer;
