import { render, screen } from "@testing-library/react";
import CompleteCollection from "./CompleteColection";

describe("Given a CompleteCollectionPage Component", () => {
  describe("Whne it receives a text content `esta es la pagina de collection complete`", () => {
    test("Then it showl show a text `esta es la pagina de collection complete`", () => {
      const textResult = "esta es la pagina de collection complete";
      render(<CompleteCollection />);
      const searchResult = screen.getByText(textResult);
      expect(searchResult).toBeInTheDocument();
    });
  });
});
