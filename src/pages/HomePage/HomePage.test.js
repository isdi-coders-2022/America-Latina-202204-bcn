import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AlbumProvider from "../../store/contexts/AlbumProvider";
import UiProvider from "../../store/contexts/UiProvider";
import HomePage from "./HomePage";

describe("Given a HomePage Component", () => {
  describe("When it receives a text content `Thes Best Albums`", () => {
    test("Then it showl show a text `Thes Best Albums`", () => {
      const textResult = "The Best Albums";
      render(
        <AlbumProvider>
          <UiProvider>
            <BrowserRouter>
              <HomePage />
            </BrowserRouter>
          </UiProvider>
        </AlbumProvider>
      );

      const searchResult = screen.getByText(textResult);
      expect(searchResult).toBeInTheDocument();
    });
  });
});
