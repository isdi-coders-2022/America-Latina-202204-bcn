import { render, screen } from "@testing-library/react";
import DetailPage from "./DetailPage";

describe("Given a DetailPage Component", () => {
  describe("Whne it receives a text content `Detail Page`", () => {
    test("Then it showl show a text `Detail Page`", () => {
      const textResult = "Detail Page";
      render(<DetailPage />);
      const searchResult = screen.getByText(textResult);
      expect(searchResult).toBeInTheDocument();
    });
  });
});
