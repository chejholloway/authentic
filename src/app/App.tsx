import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorPage from "../pages/error/ErrorPage";
import HomePage from "../pages/home/HomePage";
import DeveloperDetailPage from "../pages/detail/DeveloperDetailPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/developer/:username"
          element={<DeveloperDetailPage data-testid="developer-detail-page" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
