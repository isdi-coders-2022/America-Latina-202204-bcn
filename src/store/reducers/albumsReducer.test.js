import albums from "../contexts/basicAlbums";
import {
  addAlbumsAction,
  deleteAlbumsAction,
} from "../actions/AlbumsActionCreator";
import albumReducer from "./albumsReducer";
describe("Given the addAlbumFunction passed on to the reducer and an initial array with one album", () => {
  describe("When the object {title: 'New added album'} is passed on to the reducer", () => {
    test("Then it will return a new array which extends the initial array to having the new object", () => {
      const originalArray = albums;
      const albumToBeAdded = { title: "New added album" };
      const usedAction = addAlbumsAction(albumToBeAdded);
      const newArray = albumReducer(originalArray, usedAction);
      const expectedArray = [...originalArray, albumToBeAdded];
      expect(newArray).toEqual(expectedArray);
    });
  });
});

describe("Given the deleteAlbumFunction passed on to the reducer and an album to identificator", () => {
  describe("When the object {title: 'New added album'} is passed on to the reducer", () => {
    test("Then it will return a new array which extends the initial array to having the new object", () => {
      const originalArray = albums;
      const albumToBeDeleted = "Linkin Park-Minutes to Midnight";
      const usedAction = deleteAlbumsAction(albumToBeDeleted);
      const newArray = albumReducer(originalArray, usedAction);
      const expectedArray = [];
      expect(newArray).toEqual(expectedArray);
    });
  });
});
