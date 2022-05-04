import {
  loadAlbumsType,
  addAlbumsType,
  modifyAlbumsType,
  deleteAlbumsType,
} from "./AlbumsActionTypes";

export const loadAlbumsAction = (loadedAlbums) => ({
  type: loadAlbumsType,
  loadedAlbums,
});

export const addAlbumsAction = (albumToAdd) => ({
  type: addAlbumsType,
  albumToAdd,
});

export const modifyAlbumsAction = (albumIdToModify, newProperties) => ({
  type: modifyAlbumsType,
  albumIdToModify,
  newProperties,
});

export const deleteAlbumsAction = (albumIdToDelete) => ({
  type: deleteAlbumsType,
  albumIdToDelete,
});
