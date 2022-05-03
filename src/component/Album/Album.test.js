import { render, screen } from "@testing-library/react";
import Album from "./Album";

describe("Given the Album component", () => {
  describe("When it is is rendered", () => {
    test("Then an image and two headers will be shown", () => {
      render(<Album />);
      const searchedHeaders = screen.getAllByRole("heading");
      const searchedImage = screen.getAllByRole("img");

      const expectedHeaders = 2;
      const expectedImage = 1;

      expect(searchedHeaders.length).toBe(expectedHeaders);
      expect(searchedImage.length).toBe(expectedImage);
    });
  });
});
