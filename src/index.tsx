import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@material-tailwind/react';

import App from './app/App';
import store from './store/store';
import './index.css';

const app = document.getElementById('root') as HTMLElement;
const root = createRoot(app);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
