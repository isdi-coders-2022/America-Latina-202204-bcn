import {
  nextPageAction,
  previousPageAction,
  modifyPropertyAction,
} from "../actions/UiActionCreator";
import uiReducer from "./uiReducer";

const pageData = {
  currentPage: 2,
  albumsPerPage: 4,
  firstPage: false,
  lastPage: false,
  totalPages: 10,
};

describe("Given the nextPageAction passed on to the reducer, with the property currentPage: 2", () => {
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

describe("Given the modifyPropertyAction passed on to the reducer, with the property totalPages: 10", () => {
  describe("When the parameter {totalPages: 20} is inputted to modifyPropertyAction", () => {
    test("Then it will return the same initial object, but with the property totalPages:20", () => {
      const originalState = pageData;
      const propertyToBeModified = { totalPages: 20 };

      const usedAction = modifyPropertyAction(propertyToBeModified);
      const newObject = uiReducer(originalState, usedAction);
      const expectedObject = { ...originalState, ...propertyToBeModified };
      expect(newObject).toEqual(expectedObject);
    });
  });
});

describe("Given the previousPageAction passed on to the reducer, with the property currentPage: 2", () => {
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

describe("Given an action 'new-action' passed on to the reducer", () => {
  describe("When the initial state is the mentioned pageData", () => {
    test("Then it will return the same initial object", () => {
      const originalState = pageData;

      const usedAction = { type: "new-action" };
      const newObject = uiReducer(originalState, usedAction);

      const expectedArray = { ...originalState };

      expect(newObject).toEqual(expectedArray);
    });
  });
});

describe("Given the previousPageAction passed on to the reducer, with the property currentPage: 1", () => {
  describe("When the initial state contains the property firstPage: false", () => {
    test("Then it will return the same initial object, but with the property currentPage:1", () => {
      const originalState = { ...pageData, currentPage: 0 };
      const expectedPage = originalState.currentPage;

      const usedAction = previousPageAction();
      const newObject = uiReducer(originalState, usedAction);

      const expectedArray = { ...originalState, currentPage: expectedPage };

      expect(newObject).toEqual(expectedArray);
    });
  });
});
