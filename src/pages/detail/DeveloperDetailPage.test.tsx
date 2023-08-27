import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { rest } from "msw";
import { setupServer } from "msw/node";
import store from "../../store/store";
import "@testing-library/jest-dom/extend-expect";

import DeveloperDetailPage from "./DeveloperDetailPage";

const server = setupServer(
  rest.get("https://api.github.com/users/:username", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        // Mocked developer data
        login: "testuser",
        avatar_url: "https://example.com/avatar.png",
        // ...other fields
      }),
    );
  }),
  // Define similar mocks for other API endpoints used in your component
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders loading spinner initially", async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/developers/testuser"]}>
        <Routes>
          <Route
            path="/developers/:username"
            element={<DeveloperDetailPage />}
          />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  const spinner = getByTestId("spinner");
  expect(spinner).toBeInTheDocument();

  // Wait for the data to load
  // await waitFor(() => expect(spinner).not.toBeInTheDocument());
});

test("renders developer details when data is loaded", async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/developers/testuser"]}>
        <Routes>
          <Route
            path="/developers/:username"
            element={<DeveloperDetailPage />}
          />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );
});
