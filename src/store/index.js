import { createStore, combineReducers, applyMiddleware } from 'redux';
import bookingReducer from './reducers/Booking.reducer';
import userReducer from './reducers/User.reducer';
import thunk from 'redux-thunk';
import albumReducer from './reducers/Album.reducer';
import albumsReducer from './reducers/Albums.reducer';
import bookingSitesReducer from './reducers/BookingSites.reducer';
import bookingSiteReducer from './reducers/BookingSite.reducer';
import FilterReducer from './reducers/Filter.reducer';
const rootReducer = combineReducers({
  bookingReducer,
  albumReducer,
  albumsReducer,
  userReducer,
  bookingSitesReducer,
  bookingSiteReducer,
  FilterReducer
});


const middleware = applyMiddleware(thunk);
export const store = createStore(rootReducer, middleware);
