import { render, screen } from "@testing-library/react";
import MyPlaylistPage from "./MyPlaylistPage";
import AlbumProvider from "../../store/contexts/AlbumProvider";
import UiProvider from "../../store/contexts/UiProvider";

describe("Given a DetailPage Component", () => {
  describe("Whne it receives a text content `My Playlist`", () => {
    test("Then it should show a text `My Playlist`", () => {
      const textResult = "My Playlist";

      render(
        <AlbumProvider>
          <UiProvider>
            <MyPlaylistPage />
          </UiProvider>
        </AlbumProvider>
      );

      const searchResult = screen.getByText(textResult);
      expect(searchResult).toBeInTheDocument();
    });
  });
});
