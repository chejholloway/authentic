import React from "react";
import { render } from "@testing-library/react";
import HomeIcon from "./HomeIcon";

test("renders HomeIcon component", () => {
  const { getByAltText } = render(<HomeIcon />);
  const homeIcon = getByAltText("Home Icon");
  expect(homeIcon).toBeInTheDocument();
});
