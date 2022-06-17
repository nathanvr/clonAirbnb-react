import axios from 'axios';

export const BOOKINGSITE_REQUEST = 'BOOKINGSITE_REQUEST';
export const BOOKINGSITES_SUCCESS = 'BOOKINGSITES_SUCCESS';
export const BOOKINGSITES_ERROR = 'BOOKINGSITES_ERROR';
export const BOOKINGSITES_LOADING = 'BOOKINGSITES_LOADING';

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
      dispatch({ type: BOOKINGSITES_LOADING, payload: true });
      const data = await axios({
        method: 'GET',
        baseURL: 'http://localhost:8080/bookingsites',
        //   Authorization: `Bearer ${token}`
      });
      dispatch({ type: BOOKINGSITES_SUCCESS, payload: data.data.data });
      // console.log('Esta es la data que carga en el tales', data.data.data);
    } catch (err) {
      dispatch({ type: BOOKINGSITES_ERROR, payload: err });
    } finally {
      dispatch({ type: BOOKINGSITES_LOADING, payload: false });
    }
  };
};

const initialState = {
  loading: false,
  error: null,
  sites: [],
};

const bookingSitesReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKINGSITES_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case BOOKINGSITES_SUCCESS:
      return {
        ...state,
        sites: action.payload,
      };

    case BOOKINGSITES_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default bookingSitesReducer;
