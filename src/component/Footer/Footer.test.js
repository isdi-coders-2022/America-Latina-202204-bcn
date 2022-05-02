import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it receives a text containing '© 2022 By America Latina'", () => {
    test("Then it should show the text in a div element", () => {
      const inputText = "© 2022 By America Latina";
      render(<Footer text={inputText} />);

      const searchedResult = screen.getByText(inputText);
      expect(searchedResult).toBeInTheDocument();
    });
  });
});
