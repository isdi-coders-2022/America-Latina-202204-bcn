import { render, screen } from "@testing-library/react";
import MyPlaylistPage from "./MyPlaylistPage";
import AlbumProvider from "../../store/contexts/AlbumProvider";

describe("Given a DetailPage Component", () => {
  describe("Whne it receives a text content `My Playlist`", () => {
    test("Then it should show a text `My Playlist`", () => {
      const textResult = "My Playlist";

      render(
        <AlbumProvider>
          <MyPlaylistPage />
        </AlbumProvider>
      );

      const searchResult = screen.getByText(textResult);
      expect(searchResult).toBeInTheDocument();
    });
  });
});
