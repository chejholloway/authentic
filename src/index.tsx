import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@material-tailwind/react';

import App from './app/App';
import store from './store/store';
import './index.css';

// Get the root element
const app = document.getElementById('root') as HTMLElement;

// Create a root for rendering
const root = createRoot(app);

/**
 * Entry point of the React application.
 *
 * This code sets up the root element and renders the `App` component wrapped in various providers.
 * It uses `createRoot` from `react-dom/client` for rendering and applies a Redux store and a
 * Material Tailwind theme provider to the app.
 *
 * @example
 * ```tsx
 * // index.tsx
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 *
 * ReactDOM.render(<RootApp />, document.getElementById('root'));
 * ```
 */
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
