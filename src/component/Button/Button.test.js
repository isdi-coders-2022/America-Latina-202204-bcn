import { render, screen } from "@testing-library/react";
import reactTestRenderer from "react-test-renderer";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives a type pagination text containing 'Next Page'", () => {
    test("Then it should render the text 'Next Page' in a button", () => {
      const inputText = "Next Page";

      const tree = reactTestRenderer
        .create(<Button type="pagination" text={inputText} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
  describe("When it receives a type modifyInfo text containing 'Add to collection", () => {
    test("Then it should render the text in a button", () => {
      const inputText = "Add to collection";

      render(<Button type="modifyInfo" text={inputText} />);
      const searchedResult = screen.getByText(inputText);

      expect(searchedResult).toBeInTheDocument();
    });
  });
});
