import { createStore, combineReducers } from 'redux';
import bookingReducer from './reducers/Booking.reducer';
import albumReducer from './reducers/Album.reducer';
import albumsReducer from './reducers/Albums.reducer';

const rootReducer = combineReducers({
  bookingReducer,
  albumReducer,
  albumsReducer,
});

// const state = {
//   textReducer:{
//     text: ""
//   },
//   countReducer:{
//     count: 0
//   }
// }

export const store = createStore(rootReducer);
