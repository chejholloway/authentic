import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { rest } from "msw";
import { setupServer } from "msw/node";
import store from "../../store/store"; // Adjust the path based on your file structure
import "@testing-library/jest-dom";

import HomePage from "./HomePage";

const server = setupServer(
  rest.get("https://api.github.com/search/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        items: [
          {
            login: "testuser1",
            avatar_url: "https://example.com/avatar1.png",
          },
          {
            login: "testuser2",
            avatar_url: "https://example.com/avatar2.png",
          },
          // ... other mock data
        ],
      }),
    );
  }),
  // Define similar mocks for other API endpoints used in your component
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders loading spinner initially", async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  const spinner = screen.getByTestId("spinner");
  expect(spinner).toBeDefined();

  // Wait for the data to load
  await waitFor(() => expect(screen.queryByTestId("spinner")).toBeNull());
});

test("renders developers when data is loaded", async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  // Wait for the data to load
  await waitFor(() => {
    const avatar1 = screen.getByAltText("testuser1");
    const avatar2 = screen.getByAltText("testuser2");
    expect(avatar1).toBeDefined();
    expect(avatar2).toBeDefined();
  });
});

// Add more tests as needed to cover different scenarios
