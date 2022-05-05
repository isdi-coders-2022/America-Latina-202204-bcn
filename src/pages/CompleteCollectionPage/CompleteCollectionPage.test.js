import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AlbumProvider from "../../store/contexts/AlbumProvider";
import CompleteCollection from "./CompleteCollection";

describe("Given a CompleteCollectionPage Component", () => {
  describe("Whne it receives a text content `Complete Collection`", () => {
    test("Then it showl show a text `Complete Collection`", () => {
      const textResult = "Complete Collection";
      render(
        <AlbumProvider>
          <BrowserRouter>
            <CompleteCollection />
          </BrowserRouter>
        </AlbumProvider>
      );
      const searchResult = screen.getByText(textResult);
      expect(searchResult).toBeInTheDocument();
    });
  });
});
