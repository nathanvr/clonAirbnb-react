export const CHANGE_ALBUM = 'CHANGE_ALBUM';
export const CHANGE_INDEX = 'cHANGE_INDEX';
export const CHANGE_SHOW1 = 'CHANGE_SHOW1';
export const CHANGE_SHOW2 = 'CHANGE_SHOW2';

export function changeAlbum(value) {
  return {
    type: CHANGE_ALBUM,
    payload: value,
  };
}

export function changeIndex(value) {
  return {
    type: CHANGE_INDEX,
    payload: value,
  };
}

export function changeShow1(value) {
  return {
    type: CHANGE_SHOW1,
    payload: value,
  };
}

export function changeShow2(value) {
  return {
    type: CHANGE_SHOW2,
    payload: value,
  };
}

const initialState = {
  album: [],
  currentIndex: null,
  showAlbum1: false,
  showAlbum2: false,
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ALBUM:
      return {
        ...state,
        album: action.payload,
      };
    case CHANGE_INDEX:
      return {
        ...state,
        currentIndex: action.payload,
      };
    case CHANGE_SHOW1:
      return {
        ...state,
        showAlbum1: action.payload,
      };
    case CHANGE_SHOW2:
      return {
        ...state,
        showAlbum2: action.payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
