import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

test("renders Navbar component", () => {
  const { getByTestId } = render(
    <Router>
      <Navbar data-testid="navbar" />
    </Router>,
  );

  const navbar = getByTestId("navbar");
  expect(navbar).toBeInTheDocument();
});
