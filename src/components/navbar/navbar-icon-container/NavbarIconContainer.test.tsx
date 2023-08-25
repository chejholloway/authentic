import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import GithubIcon from "../../icons/GithubIcon";
import OctocatIcon from "../../icons/OctocatIcon";

import NavbarIconContainer from "./NavbarIconContainer";

jest.mock("../../icons/GithubIcon", () => ({
  __esModule: true,
  default: () => <div>Mocked GithubIcon</div>,
}));

jest.mock("../../icons/OctocatIcon", () => ({
  __esModule: true,
  default: () => <div>Mocked OctocatIcon</div>,
}));

describe("NavbarIconContainer", () => {
  test("renders navbar icon container", () => {
    render(
      <Router>
        <NavbarIconContainer />
      </Router>
    );

    // Assert that the mocked icon components are rendered
    const githubIcon = screen.getByText("Mocked GithubIcon");
    const octocatIcon = screen.getByText("Mocked OctocatIcon");
    expect(githubIcon).toBeInTheDocument();
    expect(octocatIcon).toBeInTheDocument();

    // Assert that the link to home is present
    const homeLink = screen.getByRole("link");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
