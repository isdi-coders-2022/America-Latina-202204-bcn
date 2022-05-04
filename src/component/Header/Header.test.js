import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it receives a listiten", () => {
    test("Then it should show listitens is the same to 3", () => {
      const expectedListitens = 6;

      render(
        <BrowserRouter>
          <Routes>
            <Route path="#" element={<Header />} />
          </Routes>
        </BrowserRouter>
      );

      const searchedResult = screen.getAllByRole("listitem");
      expect(searchedResult).toHaveLength(expectedListitens);
    });
  });
  describe("When it receives a `nav`", () => {
    describe("Then it should show a `nav` is the same to 1", () => {
      const expectedResult = 1;
      render(
        <>
          <BrowserRouter>
            <Routes>
              <Route path="#" element={<Header />} />
            </Routes>
          </BrowserRouter>
        </>
      );

      const searchResult = screen.getByRole();
      expect(searchResult).toHaveLength(expectedResult);
    });
  });
});
