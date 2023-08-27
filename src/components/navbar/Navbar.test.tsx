import React from "react";
import { render, screen } from "@testing-library/react"; // Add 'screen' to the import

import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

test("renders Navbar component", () => {
  render(
    <Router>
      <Navbar data-testid="navbar" />
    </Router>,
  );

  const navbar = screen.queryByTestId("navbar");
  expect(navbar).toBeDefined();
});
