export const CHANGE_ALBUM1 = 'CHANGE_ALBUM1';

export function importAll(r) {
  let images = [];
  r.keys().map((item, index) => {
    images[index] = r(item);
    console.log('!!!switch');
  });
  return images;
}

export function changeAlbum1() {
  return {
    type: CHANGE_ALBUM1,
    payload: importAll(
      require.context('../../images/cabañita', false, /\.(png|jpe?g|svg|webp)$/)
    ),
  };
}

const initialState = {
  album: [],
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ALBUM1:
      return {
        ...state,
        album: [...action.payload],
      };
    default:
      return state;
  }
};

export default albumReducer;
