import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AlbumProvider from "../../store/contexts/AlbumProvider";
import CompleteCollection from "./CompleteCollection";
import UiProvider from "../../store/contexts/UiProvider";

describe("Given a CompleteCollectionPage Component", () => {
  describe("Whne it receives a text content `Complete Collection`", () => {
    test("Then it showl show a text `Complete Collection`", () => {
      const textResult = "Complete Collection";
      render(
        <AlbumProvider>
          <UiProvider>
            <BrowserRouter>
              <CompleteCollection />
            </BrowserRouter>
          </UiProvider>
        </AlbumProvider>
      );
      const searchResult = screen.getByText(textResult);
      expect(searchResult).toBeInTheDocument();
    });
  });
  describe("When it is instantiated", () => {
    test("Then it will render a paginator component", () => {
      const searchedFirstText = "Previous";
      const searchedSecondText = "Next";
      render(
        <AlbumProvider>
          <UiProvider>
            <BrowserRouter>
              <CompleteCollection />
            </BrowserRouter>
          </UiProvider>
        </AlbumProvider>
      );
      const searchFirstResult = screen.getByText(searchedFirstText);
      const searchSecondResult = screen.getByText(searchedSecondText);
      expect(searchFirstResult).toBeInTheDocument();
      expect(searchSecondResult).toBeInTheDocument();
    });
  });
});
