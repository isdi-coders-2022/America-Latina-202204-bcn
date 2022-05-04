import {
  addAlbumsType,
  deleteAlbumsType,
  modifyAlbumsType,
} from "../actions/AlbumsActionTypes";

const albumReducer = (currentAlbums, action) => {
  let newAlbums;

  switch (action.type) {
    case addAlbumsType:
      newAlbums = [...currentAlbums, action.albumToAdd];
      break;
    case deleteAlbumsType:
      newAlbums = currentAlbums.filter((album) => {
        return (
          `${album.album.artist}-${album.album.name}` !== action.albumIdToDelete
        );
      });
      break;
    case modifyAlbumsType:
      newAlbums = currentAlbums.filter((album) => {
        return (
          `${album.album.artist}-${album.album.name}` !== action.albumIdToModify
        );
      });
      newAlbums = [...newAlbums, action.newProperties];
      break;
    default:
      newAlbums = [...currentAlbums];
      break;
  }
  return newAlbums;
};

export default albumReducer;
