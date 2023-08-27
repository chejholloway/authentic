import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import HomeLink from "./HomeLink";

describe("<HomeLink>", () => {
  it("should render the HomeLink component with HomeIcon and text", () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <HomeLink />
      </MemoryRouter>,
    );

    const homeIcon = getByAltText("Home Icon");
    const homeText = getByText("Home");

    expect(homeIcon).toBeDefined();
    expect(homeText).toBeDefined();
  });
});
