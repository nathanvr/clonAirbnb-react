import { createStore, combineReducers } from 'redux';
import bookingReducer from './reducers/Booking.reducer';

const rootReducer = combineReducers({
  bookingReducer,
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
