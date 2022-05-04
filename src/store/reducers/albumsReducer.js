import { loadAlbumsAction } from "../actions/AlbumsActionCreator";

const albumReducer = (currentAlbums, action) => {
  let newAlbums;

  switch (action.type) {
    case loadAlbumsAction:
      newAlbums = { test: currentAlbums.test + 1 };
      break;
    default:
      newAlbums = { ...currentAlbums };
      break;
  }
  return newAlbums;
};

export default albumReducer;
