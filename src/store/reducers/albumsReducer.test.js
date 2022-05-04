import albums from "../contexts/basicAlbums";
import {
  addAlbumsAction,
  deleteAlbumsAction,
  modifyAlbumsAction,
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

describe("Given the modifyAlbumFunction passed on to the reducer", () => {
  describe("When the identificator Linkin Park-Minutes to Midnight and new property {created-property: changed-property}", () => {
    test("Then it will return an array which contains the modified object", () => {
      const originalArray = albums;
      const albumToBeModified = "Linkin Park-Minutes to Midnight";
      const newProperty = { "created-property": "changed-property" };
      const usedAction = modifyAlbumsAction(albumToBeModified, newProperty);
      const newArray = albumReducer(originalArray, usedAction);
      const expectedArray = [newProperty];
      expect(newArray).toEqual(expectedArray);
    });
  });
});

describe("Given the modifyAlbumFunction passed on to the reducer, the properties {new-property} and the identificator Linkin Park-Minutes to Midnight", () => {
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
