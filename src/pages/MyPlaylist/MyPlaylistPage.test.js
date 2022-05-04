import { render, screen } from "@testing-library/react";
import MyPlaylistPage from "./MyPlaylistPage";

describe("Given a DetailPage Component", () => {
  describe("Whne it receives a text content `  esta es la pagina de mis playlist`", () => {
    test("Then it showl show a text `  esta es la pagina de mis playlist`", () => {
      const textResult = "esta es la pagina de mis playlist";

      render(<MyPlaylistPage />);

      const searchResult = screen.getByText(textResult);
      expect(searchResult).toBeInTheDocument();
    });
  });
});
