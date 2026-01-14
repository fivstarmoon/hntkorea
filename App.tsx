import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import UnicornBackground from './components/UnicornBackground';
import UnderConstructionPopup from './components/UnderConstructionPopup';

function App() {
  return (
    <HashRouter>
      {/* Dynamic Background Layer - Fixed Z-50 */}
      <UnicornBackground />
      
      {/* Utility Popup - Shows construction notice */}
      <UnderConstructionPopup />
      
      {/* Content Layer - Relative Z-10 to sit on top of background */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;