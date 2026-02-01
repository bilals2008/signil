// File: client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AthletesPage from './pages/Athletes/AthletesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/athletes" element={<AthletesPage />} />
      </Routes>
    </Router>
  );
}

export default App
