import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer"; // Import react-test-renderer
import GithubIcon from "./GithubIcon";

describe("GithubIcon", () => {
  test("renders Github icon", () => {
    render(<GithubIcon className="test-class" />);

    // Assert that the Github icon image is rendered with the provided class
    const githubIcon = screen.getByAltText("Github Text Logo");
    expect(githubIcon).toBeInTheDocument();
    expect(githubIcon).toHaveClass("h-10 object-cover test-class");
  });

  test("matches snapshot", () => {
    // Use react-test-renderer to create a snapshot of the component
    const tree = renderer.create(<GithubIcon className="test-class" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
