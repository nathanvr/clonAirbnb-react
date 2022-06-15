import axios from 'axios';

export const BOOKINGSITE_REQUEST = 'BOOKINGSITE_REQUEST';
export const BOOKINGSITE_SUCCESS = 'BOOKINGSITE_SUCCESS';
export const BOOKINGSITE_ERROR = 'BOOKINGSITE_ERROR';
export const BOOKINGSITE_LOADING = 'BOOKINGSITE_LOADING';

// useEffect(() => {
//     axios.get("localhost:8080/users/bookinsite")
//     .then(res => {
//         //Aquí debe ser el dispatch de la respuesta al reducer (Que son todos los bookinsite)
//     }).catch(err => {
//         alert("No se pudo adquirir lo bookingsite")
//     })
// })

// const handleClick = () => {
//     useEffect(() => {
//         axios.post("localhost:8080/users/bookinsite", body, {
//             headers: {
//                 "Authorization" : "Bearer"
//             }
//         })
//         .then(res => {
//             //Aquí debe ser el dispatch de la respuesta al reducer (Que es el bookingsite recien creado)
//         }).catch(err => {
//             alert("No se pudo crear el  bookingsite")
//         })
// }

// const handleUpdate = () => {
//     useEffect(() => {
//         axios.put("localhost:8080/users/bookinsite", body, {
//             headers: {
//                 "Authorization" : "Bearer"
//             }
//         })
//         .then(res => {
//             //Aquí debe ser el dispatch de la respuesta al reducer (Que es el bookingsite recien creado)
//         }).catch(err => {
//             alert("No se pudo actualizar el  bookingsite")
//         })
// }

//action creator: post, get, delete, put

//this endpoint could be used in the panel where is show all the bookings sites
export const getBookingSites = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: BOOKINGSITE_LOADING, payload: true });
      const data = await axios({
        method: 'GET',
        baseURL: 'http://localhost:8080/bookingsites',
        //   Authorization: `Bearer ${token}`
      });
      dispatch({ type: BOOKINGSITE_SUCCESS, payload: data.data.data });
      console.log('Esta es la data que carga en el tales', data.data.data);
    } catch (err) {
      dispatch({ type: BOOKINGSITE_ERROR, payload: err });
    } finally {
      dispatch({ type: BOOKINGSITE_LOADING, payload: false });
    }
  };
};

const initialState = {
  loading: false,
  error: null,
  sites: [],
  bookingSiteData: {
    home_type: '',
    description_type: '',
    room_type: '',
    total_occupancy: '',
    total_rooms: '',
    total_beds: '',
    total_bathrooms: '',
    services: [],
    lat: '',
    lng: '',
    title: '',
    description: '',
    price: 0,
    images: [],
    address: '',
    city: '',
    country: '',
    zipcode: 0,
    reviews: [],
    bookings: [],
  },
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
        sites: action.payload,
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
