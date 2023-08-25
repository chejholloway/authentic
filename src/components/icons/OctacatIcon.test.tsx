import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer"; // Import react-test-renderer
import OctocatIcon from "./OctocatIcon";

describe("OctocatIcon", () => {
  test("renders Octocat icon", () => {
    render(<OctocatIcon className="test-class" />);

    // Assert that the Octocat icon image is rendered with the provided class
    const octocatIcon = screen.getByAltText("Github Octocat");
    expect(octocatIcon).toBeInTheDocument();
    expect(octocatIcon).toHaveClass("h-10 object-cover test-class");
  });

  test("matches snapshot", () => {
    // Use react-test-renderer to create a snapshot of the component
    const tree = renderer.create(<OctocatIcon className="test-class" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
