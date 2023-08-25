import React from "react";
import { render, screen } from "@testing-library/react";

import Navbar from "./Navbar";

// Mock the imported components
jest.mock("./home-link/HomeLink", () => ({
  __esModule: true,
  default: () => <div>Mocked HomeLink</div>,
}));

jest.mock("../navbar/navbar-icon-container/NavbarIconContainer", () => ({
  __esModule: true,
  default: () => <div>Mocked NavbarIconContainer</div>,
}));

describe("Navbar", () => {
  test("renders navbar", () => {
    render(<Navbar />);

    // Assert that the mocked components are rendered
    const homeLink = screen.getByText("Mocked HomeLink");
    const navbarIconContainer = screen.getByText("Mocked NavbarIconContainer");
    expect(homeLink).toBeInTheDocument();
    expect(navbarIconContainer).toBeInTheDocument();

    // Assert that the navbar has the appropriate class names
    const navbar = screen.getByRole("navigation");
    expect(navbar).toHaveClass("flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10 mb-8");
  });
});
