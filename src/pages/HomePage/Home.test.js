import { render, screen } from "@testing-library/react";
import MainInformation from "../../component/MainInformation/MainInformation";

const HomePage = () => {
  return (
    <>
      esta es la pagina del home
      <MainInformation />
    </>
  );
};

describe("Given a HomePage Component", () => {
  describe("Whne it receives a text content `esta es la pagina de detalle`", () => {
    test("Then it showl show a text `esta es la pagina de detalle`", () => {
      const textResult = "esta es la pagina del home";
      render(<HomePage />);
      const searchResult = screen.getByText(textResult);
      expect(searchResult).toBeInTheDocument();
    });
  });
});
