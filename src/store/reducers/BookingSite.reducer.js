import axios from "axios";
export const BOOKINGSITE_ID = 'BOOKINGSITE_ID';
export const BOOKINGSITE_HOMETYPE = 'BOOKINGSITE_HOMETYPE';
export const BOOKINGSITE_DESCRIPTIONTYPE = 'BOOKINGSITE_DESCRIPTIONTYPE';
export const BOOKINGSITE_ROOMTYPE = 'BOOKINGSITE_ROOMTYPE';
export const BOOKINGSITE_TOTALOCCUPANCY = 'BOOKINGSITE_TOTALOCCUPANCY';
export const BOOKINGSITE_TOTALBEDS = 'BOOKINGSITE_TOTALBEDS';
export const BOOKINGSITE_TOTALROOMS = 'BOOKINGSITE_TOTALROOMS';
export const BOOKINGSITE_TOTALBATHROOMS = 'BOOKINGSITE_TOTALBATHROOMS';
export const BOOKINGSITE_SERVICES = 'BOOKINGSITE_SERVICES';
export const BOOKINGSITE_COORDINATES = 'BOOKINGSITE_COORDINATES';
export const BOOKINGSITE_TITLE = 'BOOKINGSITE_TITLE';
export const BOOKINGSITE_DESCRIPTION = 'BOOKINGSITE_DESCRIPTION';
export const BOOKINGSITE_PRICE = 'BOOKINGSITE_PRICE';
export const BOOKINGSITE_REVIEWS = 'BOOKINGSITE_REVIEWS';
export const BOOKINGSITE_BOOKINGS = 'BOOKINGSITE_PRICE';



export const BOOKINGSITE_REQUEST = 'BOOKINGSITE_REQUEST';
export const BOOKINGSITE_SUCCESS = 'BOOKINGSITE_SUCCESS';
export const BOOKINGSITE_ERROR = 'BOOKINGSITE_ERROR';




//action creator: post, get, delete, put

const initialState = {
    loading: false,
    error:null,
    bookingSiteData:{
        bookingType: '',
        description: '',
        locatiion: '',
        host: '',
        album: [],
        maxGuest: '',
        numRooms: '',
        numBeds: '',
        numBath: '',
        price: '',
    }
};

const bookingSiteReducer = (state = initialState, action) => {

};

export default bookingSiteReducer;
