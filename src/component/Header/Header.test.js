import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it receives a listiten", () => {
    test("Then it should show listitens is the same to 3", () => {
      const expectedListitens = 6;

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const searchedResult = screen.getAllByRole("listitem");
      expect(searchedResult).toHaveLength(expectedListitens);
    });
  });
  describe("When it receives a `ul`", () => {
    describe("Then it should show a `nav` is the same to 1", () => {
      render(
        <>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </>
      );

      const searchResult = screen.getByRole("list");
      expect(searchResult).toBeInTheDocument();
    });
  });
});
