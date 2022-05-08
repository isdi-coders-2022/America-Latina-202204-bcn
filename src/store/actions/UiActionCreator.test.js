import { nextPageAction, previousPageAction } from "./UiActionCreator";

describe("Given the nextPageAction", () => {
  describe("When called upon", () => {
    test("Then an object with the property type: 'next-page' will be created", () => {
      const createdAction = nextPageAction();

      const expectedObject = { type: "next-page" };

      expect(createdAction).toMatchObject(expectedObject);
    });
  });
});

describe("Given the previousPageAction", () => {
  describe("When called upon", () => {
    test("Then an object with the property type: 'previous-page' will be created", () => {
      const createdAction = previousPageAction();

      const expectedObject = { type: "previous-page" };

      expect(createdAction).toMatchObject(expectedObject);
    });
  });
});
