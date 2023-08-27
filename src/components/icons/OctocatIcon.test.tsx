import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import OctocatIcon from "./OctocatIcon";

describe("OctocatIcon", () => {
  it("should render OctocatIcon component", () => {
    const { container } = render(<OctocatIcon />);
    const imgElement = container.querySelector("img");

    // expect(imgElement).toBeDefined();
    expect(imgElement?.alt).toBe("Octocat Icon");
  });

  it("should apply custom className", () => {
    const { container } = render(<OctocatIcon className="custom-class" />);
    const imgElement = container.querySelector("img");

    expect(imgElement?.classList.contains("custom-class")).toBe(true);
  });
});
