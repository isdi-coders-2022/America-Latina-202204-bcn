import { render, screen } from "@testing-library/react";
import MainInformation from "./MainInformation";

describe("Given a MainInformation component", () => {
  describe("When it receives a element img", () => {
    test("Then it should show is the same to img", () => {
      render(<MainInformation />);

      const searchResult = screen.getByRole("img");

      expect(searchResult).toBeInTheDocument();
    });
  });
});
