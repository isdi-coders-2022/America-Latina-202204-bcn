import { render, screen } from "@testing-library/react";
import Album from "./Album";
import AlbumContextProvider from "../../contexts/Album/AlbumContextProvider";

describe("Given the Album component", () => {
  describe("When it is is rendered", () => {
    test("Then an image and two headers will be shown", () => {
      const album = {
        artist: "Linkin Park",
        name: "Minutes to Midnight",
        image: [
          {
            size: "small",
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/34s/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
          },
          {
            size: "medium",
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/64s/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
          },
          {
            size: "large",
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/174s/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
          },
          {
            size: "extralarge",
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
          },
          {
            size: "mega",
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
          },
          {
            size: "",
            "#text":
              "https://lastfm.freetls.fastly.net/i/u/300x300/185a38ca7368d2c9ad9cb9ea95ae05f4.jpg",
          },
        ],
      };
      render(
        <AlbumContextProvider>
          <Album albumInfo={album} />
        </AlbumContextProvider>
      );
      const searchedHeaders = screen.getAllByRole("heading");
      const searchedImage = screen.getAllByRole("img");

      const expectedHeaders = 2;
      const expectedImage = 1;

      expect(searchedHeaders.length).toBe(expectedHeaders);
      expect(searchedImage.length).toBe(expectedImage);
    });
  });
});
