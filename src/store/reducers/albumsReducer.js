import { addAlbumsAction } from "../actions/AlbumsActionCreator";
import {
  loadAlbumsType,
  addAlbumsType,
  modifyAlbumsType,
  deleteAlbumsType,
} from "../actions/AlbumsActionTypes";

const albumReducer = (currentAlbums, action) => {
  let newAlbums;

  switch (action.type) {
    case addAlbumsType:
      newAlbums = [...currentAlbums, action.albumToAdd];
      break;
    default:
      newAlbums = [...currentAlbums];
      break;
  }
  return newAlbums;
};

export default albumReducer;
