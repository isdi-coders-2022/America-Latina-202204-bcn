import { render, screen } from "@testing-library/react";
import DetailPage from "./DetailPage";

describe("Given a DetailPage Component", () => {
  describe("Whne it receives a text content `esta es la pagina de detalle`", () => {
    test("Then it showl show a text `esta es la pagina de detalle`", () => {
      const textResult = "esta es la pagina de detalle";
      render(<DetailPage />);
      const searchResult = screen.getByText(textResult);
      expect(searchResult).toBeInTheDocument();
    });
  });
});
