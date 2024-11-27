import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Categories from './pages/Categories';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import AuthGuard from './components/AuthGuard';
import FinancialNews from './pages/FinancialNews';
import TradingUpdates from './pages/TradingUpdates';
import PremiumFeature from './components/PremiumFeature';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50">
            <Navbar signOut={signOut} user={user} />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              
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
      )}
    </Authenticator>
  );
}

export default App;