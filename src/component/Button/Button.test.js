import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives a text containing 'Next Page'", () => {
    test("Then it should render the text in a button", () => {
      const inputText = "Next Page";

      render(<Button type="pagination" text={inputText} />);

      const searchedResult = screen.getByText(inputText);
      expect(searchedResult).toBeInTheDocument();
    });
  });
  describe("When it receives a text containing 'Add to collection", () => {
    test("Then it should render the text in a button", () => {
      const inputText = "Add to collection";

      render(<Button type="modifyInfo" text={inputText} />);
      const searchedResult = screen.getByText(inputText);
      expect(searchedResult).toBeInTheDocument();
    });
  });
});
