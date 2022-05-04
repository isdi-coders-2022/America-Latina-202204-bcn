import {
  loadAlbumsType,
  addAlbumsType,
  modifyAlbumsType,
  deleteAlbumsType,
} from "./AlbumsActionTypes";

export const loadAlbumsAction = () => ({
  type: loadAlbumsType,
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
