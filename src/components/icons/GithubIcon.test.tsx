import React from "react";
import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import GithubIcon from "./GithubIcon";

describe("<GithubIcon>", () => {
  it("should render the GithubIcon component", () => {
    const { getByAltText }: RenderResult = render(<GithubIcon />);
    const githubIcon = getByAltText("Github Text Logo");
    expect(githubIcon).toBeInTheDocument();
  });

  it("should apply the className if provided", () => {
    const className = "custom-class";
    const { container }: RenderResult = render(
      <GithubIcon className={className} />,
    );
    const githubIcon = container.querySelector(".custom-class");
    expect(githubIcon).toBeInTheDocument();
  });
});
