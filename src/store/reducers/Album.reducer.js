export const CHANGE_ALBUM = 'CHANGE_ALBUM';
export const CHANGE_ALBUMID = 'CHANGE_ALBUMID';

export function changeAlbum(value) {
  return {
    type: CHANGE_ALBUM,
    payload: value,
  };
}

export function changeAlbumId(value) {
  return {
    type: CHANGE_ALBUMID,
    payload: value,
  };
}

const initialState = {
  album: ['lol', 'lal'],
  albumId: '',
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ALBUM:
      return {
        ...state,
        album: [action.payload],
      };
    case CHANGE_ALBUMID:
      return {
        ...state,
        albumId: action.payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
