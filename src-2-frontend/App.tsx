import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AiCompanion from './pages/AiCompanion';
import Insights from './pages/Insights';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import FinancialNews from './pages/FinancialNews';
import Article from './pages/Article';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-companion" element={<AiCompanion />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<Article />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/financial-news" element={<FinancialNews />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
