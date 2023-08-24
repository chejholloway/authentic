import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import DeveloperDetailPage from '../pages/detail/DeveloperDetailPage';

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
