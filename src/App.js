import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Timeline2024 from './pages/Timeline2024';
import Timeline2024Extra from './pages/Timeline2024_extra';
import Timeline2025 from './pages/Timeline2025';
import Timeline2025Extra from './pages/Timeline2025_extra';
import Timeline2026 from './pages/Timeline2026';
import Timeline2026Extra from './pages/Timeline2026_extra';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router basename="/site">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/timeline/2024" element={<Timeline2024 />} />
        <Route path="/timeline/2024/extra" element={<Timeline2024Extra />} />
        <Route path="/timeline/2025" element={<Timeline2025 />} />
        <Route path="/timeline/2025/extra" element={<Timeline2025Extra />} />
        <Route path="/timeline/2026" element={<Timeline2026 />} />
        <Route path="/timeline/2026/extra" element={<Timeline2026Extra />} />
      </Routes>
    </Router>
  );
}

export default App;