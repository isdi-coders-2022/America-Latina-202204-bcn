import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it receives a listiten", () => {
    test("Then it should show listitens is the same to 3", () => {
      const expectedListitens = 6;
      render(<Header />);

      const searchedResult = screen.getAllByRole("listitem");
      expect(searchedResult.length).toBe(expectedListitens);
    });
  });
  describe("When it receives a `nav`", () => {
    describe("Then it should show a `nav` is the same to 1", () => {
      const expectedResult = 1;
      render(<Header />);

      const searchResult = screen.getAllByRole("navigation");
      expect(searchResult.length).toBe(expectedResult);
    });
  });
});
