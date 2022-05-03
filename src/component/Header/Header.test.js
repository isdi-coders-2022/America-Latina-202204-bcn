import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a  component", () => {
  describe("When it receives a text containing 'My Collection'", () => {
    test("Then it should show the text in a nav element", () => {
      const inputText = "My Collections";
      render(<Header text={inputText} />);

      const searchedResult = screen.getByText(inputText);
      expect(searchedResult).toBeInTheDocument();
    });
  });
});
