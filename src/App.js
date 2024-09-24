import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Contact from './components/Contact';
import RealTimeBinFill from './components/RealTimeBinFill';
import WasteMonitoring from './components/WasteMonitoring';
import PredictiveMaintenance from './components/PredictiveMaintenance';
import RouteOptimization from './components/RouteOptimization';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/real-time-monitoring" element={<RealTimeBinFill />} />
        <Route path="/waste-monitoring" element={<WasteMonitoring />} />
        <Route path="/predictive" element={<PredictiveMaintenance />} />
        <Route path="/route" element={<RouteOptimization />} />
      </Routes>
    </Router>
  );
}

export default App;
