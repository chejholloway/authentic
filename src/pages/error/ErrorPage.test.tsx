import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import ErrorPage from "./ErrorPage";

test("renders ErrorPage component", () => {
  const { getByTestId } = render(
    <MemoryRouter initialEntries={["/error"]}>
      <Routes>
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </MemoryRouter>,
  );

  const pageTitle = getByTestId("404");
  const errorMessage = getByTestId("Oops");
  const goHomeButton = getByTestId("go-home");

  expect(pageTitle).toBeInTheDocument();
  expect(errorMessage).toBeInTheDocument();
  expect(goHomeButton).toBeInTheDocument();
});
