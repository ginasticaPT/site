import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Timeline2024 from './pages/Timeline2024';
import Timeline2025 from './pages/Timeline2025';
import Timeline2026 from './pages/Timeline2026';

function App() {
  return (
    <Router basename="/site">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/timeline/2024" element={<Timeline2024 />} />
        <Route path="/timeline/2025" element={<Timeline2025 />} />
        <Route path="/timeline/2026" element={<Timeline2026 />} />
      </Routes>
    </Router>
  );
}

export default App;
