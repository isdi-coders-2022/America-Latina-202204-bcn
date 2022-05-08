import { render, screen } from "@testing-library/react";
import Paginator from "./Paginator";
import UiProvider from "../../store/contexts/UiProvider";
import AlbumProvider from "../../store/contexts/AlbumProvider";

describe("Given the Paginator component", () => {
  describe("When called upon", () => {
    test("Then the texts 'Previous' and 'Next' will be rendered", () => {
      const expectedFirstText = "Previous";
      const expectedSecondText = "Next";

      render(
        <AlbumProvider>
          <UiProvider>
            <Paginator />
          </UiProvider>
        </AlbumProvider>
      );

      const searchedFirstItem = screen.getByText(expectedFirstText);
      const searchedSecondItem = screen.getByText(expectedSecondText);

      expect(searchedFirstItem).toBeInTheDocument();
      expect(searchedSecondItem).toBeInTheDocument();
    });
  });
});
