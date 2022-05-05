import { render, screen } from "@testing-library/react";
import AlbumProvider from "../../store/contexts/AlbumProvider";
import DetailPage from "./DetailPage";

describe("Given a DetailPage Component", () => {
  describe("Whne it receives a text content `Detail Page`", () => {
    test("Then it showl show a text `Detail Page`", () => {
      const textResult = "Detail Page";
      render(
        <AlbumProvider>
          <DetailPage />
        </AlbumProvider>
      );
      const searchResult = screen.getByText(textResult);
      expect(searchResult).toBeInTheDocument();
    });
  });
});
