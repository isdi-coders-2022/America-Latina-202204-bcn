import { render, screen } from "@testing-library/react";
import Album from "./Album";
import AlbumProvider from "../../store/contexts/AlbumProvider";

describe("Given the Album component", () => {
  describe("When it is is rendered with the object corresponding to Minutes to Midnight", () => {
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
    test("Then an image and two headers will be shown", () => {
      render(
        <AlbumProvider>
          <Album albumInfo={album} />
        </AlbumProvider>
      );
      const searchedHeaders = screen.getAllByRole("heading");
      const searchedImage = screen.getAllByRole("img");

      const expectedHeaders = 2;
      const expectedImage = 1;

      expect(searchedHeaders).toHaveLength(expectedHeaders);
      expect(searchedImage).toHaveLength(expectedImage);
    });
    test("Then the first title should be 'Linkin Park' and the second one 'Minutes to Midnight'", () => {
      render(
        <AlbumProvider>
          <Album albumInfo={album} />
        </AlbumProvider>
      );
      const searchedFirstHeader = screen.getAllByRole("heading")[0];
      const searchedSecondHeader = screen.getAllByRole("heading")[1];

      const expectedFirstHeader = "Linkin Park";
      const expectedSecondHeader = "Minutes to Midnight";

      expect(searchedFirstHeader.textContent).toBe(expectedFirstHeader);
      expect(searchedSecondHeader.textContent).toBe(expectedSecondHeader);
    });
  });
});
