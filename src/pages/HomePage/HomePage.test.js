import { render, screen } from "@testing-library/react";
import AlbumProvider from "../../store/contexts/AlbumProvider";
import HomePage from "./HomePage";

describe("Given a HomePage Component", () => {
  describe("When it receives a text content `Thes Best Albums`", () => {
    test("Then it showl show a text `Thes Best Albums`", () => {
      const textResult = "The Best Albums";
      render(
        <AlbumProvider>
          <HomePage />
        </AlbumProvider>
      );

      const searchResult = screen.getByText(textResult);
      expect(searchResult).toBeInTheDocument();
    });
  });
});
