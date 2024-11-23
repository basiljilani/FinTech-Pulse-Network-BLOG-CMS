import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Categories from './pages/Categories';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import AuthGuard from './components/AuthGuard';
import FinancialNews from './pages/FinancialNews';
import TradingUpdates from './pages/TradingUpdates';
import PremiumFeature from './components/PremiumFeature';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          } />
          <Route path="/profile" element={
            <AuthGuard>
              <Profile />
            </AuthGuard>
          } />
          <Route path="/settings" element={
            <AuthGuard>
              <Settings />
            </AuthGuard>
          } />
          <Route path="/financial-news" element={
            <AuthGuard>
              <FinancialNews />
            </AuthGuard>
          } />
          <Route path="/trading-updates" element={
            <AuthGuard>
              <TradingUpdates />
            </AuthGuard>
          } />
          <Route path="/market-analysis" element={
            <AuthGuard>
              <PremiumFeature />
            </AuthGuard>
          } />
          <Route path="/investment-reports" element={
            <AuthGuard>
              <PremiumFeature />
            </AuthGuard>
          } />
          <Route path="/research-papers" element={
            <AuthGuard>
              <PremiumFeature />
            </AuthGuard>
          } />
          <Route path="/regulatory-content" element={
            <AuthGuard>
              <PremiumFeature />
            </AuthGuard>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}