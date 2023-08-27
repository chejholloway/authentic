import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import NavbarIconContainer from "./NavbarIconContainer";

describe("<NavbarIconContainer>", () => {
  it("should render the NavbarIconContainer component with GithubIcon and OctocatIcon", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <NavbarIconContainer />
      </MemoryRouter>,
    );

    const githubIcon = getByAltText("Github Text Logo");
    const octocatIcon = getByAltText("Octocat Icon");

    expect(githubIcon).toBeInTheDocument();
    expect(octocatIcon).toBeInTheDocument();
  });
});
