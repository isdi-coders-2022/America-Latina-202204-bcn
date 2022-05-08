import { nextPageAction, previousPageAction } from "../actions/UiActionCreator";
import uiReducer from "./uiReducer";

const pageData = {
  currentPage: 2,
  albumsPerPage: 4,
  firstPage: false,
  lastPage: false,
};

describe("Given the nextPageFunction passed on to the reducer, with the property currentPage: 2", () => {
  describe("When the initial state contains the property lastPage: false", () => {
    test("Then it will return the same initial object, but with the property currentPage:3", () => {
      const originalState = pageData;
      const expectedPage = originalState.currentPage + 1;

      const usedAction = nextPageAction();
      const newObject = uiReducer(originalState, usedAction);

      const expectedArray = { ...originalState, currentPage: expectedPage };

      expect(newObject).toEqual(expectedArray);
    });
  });
});

describe("Given the previousPageFunction passed on to the reducer, with the property currentPage: 2", () => {
  describe("When the initial state contains the property firstPage: false", () => {
    test("Then it will return the same initial object, but with the property currentPage:1", () => {
      const originalState = pageData;
      const expectedPage = originalState.currentPage - 1;

      const usedAction = previousPageAction();
      const newObject = uiReducer(originalState, usedAction);

      const expectedArray = { ...originalState, currentPage: expectedPage };

      expect(newObject).toEqual(expectedArray);
    });
  });
});
