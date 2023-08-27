import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-tailwind/react";
import configureMockStore from "redux-mock-store";
import App from "./app/App";

// Mock store
const mockStore = configureMockStore();

describe("App", () => {
  const initialState = {}; // Mock initial state here
  const store = mockStore(initialState);

  it("renders without crashing", () => {
    const app = document.createElement("div");
    app.id = "root";
    document.body.appendChild(app);

    const root = createRoot(app);

    root.render(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>,
    );
  });

  /*   it('renders user data from API', async () => {
    // Render the component
    render(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    );

    await screen.findByText('user0'); // Adjust as needed
    expect(screen.getByText('mocked-avatar-url')).toBeInTheDocument();
  }); */
});
