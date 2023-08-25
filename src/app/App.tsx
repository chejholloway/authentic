import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import DeveloperDetailPage from '../pages/detail/DeveloperDetailPage';
/**
 * The root component of the application.
 *
 * This component sets up the main router for the application using `react-router-dom`.
 *
 * @component
 * @example
 * ```tsx
 * <App />
 * ```
 */
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/developer/:username' element={<DeveloperDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
