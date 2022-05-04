import { render, screen } from "@testing-library/react";
import MainInformation from "./MainInformation";

describe("Given a MainInformation component", () => {
  describe("When it receives a img", () => {
    test("Then it should show is the same to 1", () => {
      const expectedImg = 1;

      render(<MainInformation />);
      const searchResult = screen.getAllByRole("img");

      expect(searchResult).toHaveLength(expectedImg);
    });
  });
  describe("When it receive a `p`", () => {
    describe("Then it showl is the same to 2", () => {
      const expectedParragraph = 2;

      render(<MainInformation />);
      const searchResults = screen.getAllByRole("paragraph");

      expect(expectedParragraph).toHaveLength(searchResults);
    });
  });
});
