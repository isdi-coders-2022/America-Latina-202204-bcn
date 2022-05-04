import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it receives a Label 'Artist'", () => {
    test("Then it should render the given Label", () => {
      const nameLabel = "Artist";
      render(<Form />);

      const textElement = screen.getByLabelText(nameLabel);
      expect(textElement).toBeInTheDocument();
    });
  });
});
