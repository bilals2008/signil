// File: client/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AthletesPage from './pages/Athletes/AthletesPage';
import AdvisorsPage from './pages/Advisors/AdvisorsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/athletes" element={<AthletesPage />} />
        <Route path="/advisors" element={<AdvisorsPage />} />
      </Routes>
    </Router>
  );
}

export default App
