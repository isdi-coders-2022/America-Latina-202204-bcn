import albums from "../contexts/albums";
import { initialObjectArray } from "../contexts/albums";
import {
  addAlbumsAction,
  deleteAlbumsAction,
  modifyAlbumsAction,
  loadAlbumsAction,
  updateLocalAlbumAction,
} from "../actions/AlbumsActionCreator";
import albumReducer from "./albumReducer";

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

describe("Given the deleteAlbumFunction passed on to the reducer", () => {
  describe("When the the identificator Linkin Park-Minutes to Midnight is passed on to the reducer", () => {
    test("Then it will return an empty array", () => {
      const originalArray = [albums[0].album];
      const albumToBeDeleted = "Linkin Park-Minutes to Midnight";
      const usedAction = deleteAlbumsAction(albumToBeDeleted);
      const newArray = albumReducer(originalArray, usedAction);
      const expectedArray = [];
      expect(newArray).toEqual(expectedArray);
    });
  });
});

describe("Given the loadAlbumFunction passed on to the reducer", () => {
  describe("When the array [1,2,3] passed on to the reducer", () => {
    test("Then it will return this same array", () => {
      const inputtedArray = [1, 2, 3];
      const originalArray = [4, 5, 6];

      const usedAction = loadAlbumsAction(inputtedArray);
      const newArray = albumReducer(originalArray, usedAction);

      const expectedArray = inputtedArray;
      expect(newArray).toEqual(expectedArray);
    });
  });
});

describe("Given the updateAlbumFunction passed on to the reducer", () => {
  describe("When the album {artist: Bob Dylan} is passed on to the reducer", () => {
    test("Then it will return the array [{artist: Bob Dylan}]", () => {
      const inputtedObject = { artist: "Bob Dylan" };
      const originalArray = [4, 5, 6];

      const usedAction = updateLocalAlbumAction(inputtedObject);
      const newArray = albumReducer(originalArray, usedAction);

      const expectedArray = [inputtedObject];
      expect(newArray).toEqual(expectedArray);
    });
  });
});

describe("Given the function {type: 'new-function'} and an initial array of [1,2,3] passed on to the reducer", () => {
  describe("When it is instantiated", () => {
    test("Then it will return the same array", () => {
      const originalArray = [1, 2, 3];

      const usedAction = { type: "new-function" };
      const newArray = albumReducer(originalArray, usedAction);

      const expectedArray = originalArray;
      expect(newArray).toEqual(expectedArray);
    });
  });
});
