import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import NavbarIconContainer from "./NavbarIconContainer";

describe("<NavbarIconContainer>", () => {
  it("should render the NavbarIconContainer component with GithubIcon and OctocatIcon", () => {
    render(
      <MemoryRouter>
        <NavbarIconContainer />
      </MemoryRouter>,
    );

    const githubIcon = screen.queryByAltText("Github Text Logo");
    const octocatIcon = screen.queryByAltText("Octocat Icon");

    expect(githubIcon).toBeDefined();
    expect(octocatIcon).toBeDefined();
  });
});
