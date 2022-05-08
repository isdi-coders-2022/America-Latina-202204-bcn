import { render, screen } from "@testing-library/react";
import App from "./App";
import AlbumProvider from "./store/contexts/AlbumProvider";
import UiProvider from "./store/contexts/UiProvider";
import { BrowserRouter } from "react-router-dom";

describe("Given the App component", () => {
  describe("When it is instantiated", () => {
    test("Then it should have the '© 2022 BY AMERICA LATINA' text in the footer", () => {
      const searchedText = "© 2022 BY AMERICA LATINA";
      render(
        <AlbumProvider>
          <UiProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </UiProvider>
        </AlbumProvider>
      );
      const searchedResult = screen.getByText(searchedText);

      expect(searchedResult.textContent).toBe(searchedText);
    });
  });
});
