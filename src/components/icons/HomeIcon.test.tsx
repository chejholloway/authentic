import React from "react";
import { render } from "@testing-library/react";

import HomeIcon from "./HomeIcon";

test("renders HomeIcon component", () => {
  const { container } = render(<HomeIcon />);
  const homeIcon = container.querySelector('img[alt="Home Icon"]');
  expect(homeIcon).toBeTruthy();
});
