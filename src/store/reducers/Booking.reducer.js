export const CHANGE_INFO = 'CHANGE_INFO';

//action creator

const initialState = {
  hostId: 1,
  bookingType: 'Cabaña entera',
  description: 'bla bla bla',
  locatiion: '12345678',
  host: 'lucy and Brayan',
  album: [],
  maxGuest: '10',
  numRooms: '3',
  numBeds: '6',
  numBath: '2',
  price: '$200000',
};

const bookingReducer = (state = initialState) => {
  return state;
};

export default bookingReducer;
