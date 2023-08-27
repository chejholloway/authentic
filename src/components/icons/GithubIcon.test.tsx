import React from "react";
import { render } from "@testing-library/react";
import GithubIcon from "./GithubIcon";

test("renders GithubIcon component", () => {
  const { getByAltText } = render(<GithubIcon />);
  const githubIcon = getByAltText("Github Text Logo");
  expect(githubIcon).toBeDefined();
});
