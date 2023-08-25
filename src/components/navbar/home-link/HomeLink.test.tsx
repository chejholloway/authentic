import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import HomeLink from "./HomeLink";

describe("HomeLink", () => {
  test("renders home link", () => {
    render(
      <Router>
        <HomeLink />
      </Router>
    );

    // Assert that the home link is rendered
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
    expect(homeLink).toHaveClass("text-black mr-4 hover:text-gray-400 transition duration-300");
  });
});
