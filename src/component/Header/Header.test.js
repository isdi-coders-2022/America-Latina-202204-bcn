import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a  component", () => {
  describe("When it receives a text containing 'My Collection'", () => {
    test("Then it should show listitens is the same to 3", () => {
      const expectedListitens = 3;
      render(<Header />);

      const searchedResult = screen.getAllByRole("listitem");
      expect(searchedResult.length).toBe(expectedListitens);
    });
  });
});
