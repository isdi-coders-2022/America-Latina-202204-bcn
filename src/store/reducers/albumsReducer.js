import { addAlbumsType, deleteAlbumsType } from "../actions/AlbumsActionTypes";

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
    default:
      newAlbums = [...currentAlbums];
      break;
  }
  return newAlbums;
};

export default albumReducer;
