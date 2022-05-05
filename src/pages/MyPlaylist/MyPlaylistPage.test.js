import { render, screen } from "@testing-library/react";
import MyPlaylistPage from "./MyPlaylistPage";

describe("Given a DetailPage Component", () => {
  describe("Whne it receives a text content `My Playlist`", () => {
    test("Then it showl show a text `My Playlist`", () => {
      const textResult = "My Playlist";

      render(<MyPlaylistPage />);

      const searchResult = screen.getByText(textResult);
      expect(searchResult).toBeInTheDocument();
    });
  });
});
