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

const AuthenticatedFeature = ({ children }: { children: React.ReactNode }) => (
 <Authenticator>
   {({ signOut, user }) => (
     <AuthGuard>
       {React.cloneElement(children as React.ReactElement, { signOut, user })}
     </AuthGuard>
   )}
 </Authenticator>
);

function App() {
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
         
         {/* Protected Premium Routes */}
         <Route path="/market-analysis" element={
           <AuthenticatedFeature>
             <PremiumFeature />
           </AuthenticatedFeature>
         } />
         <Route path="/investment-reports" element={
           <AuthenticatedFeature>
             <PremiumFeature />
           </AuthenticatedFeature>
         } />
         <Route path="/research-papers" element={
           <AuthenticatedFeature>
             <PremiumFeature />
           </AuthenticatedFeature>
         } />
         <Route path="/regulatory-content" element={
           <AuthenticatedFeature>
             <PremiumFeature />
           </AuthenticatedFeature>
         } />
         <Route path="/financial-news" element={
           <AuthenticatedFeature>
             <FinancialNews />
           </AuthenticatedFeature>
         } />
         <Route path="/trading-updates" element={
           <AuthenticatedFeature>
             <TradingUpdates />
           </AuthenticatedFeature>
         } />
         
         {/* User Dashboard Routes */}
         <Route path="/dashboard" element={
           <AuthenticatedFeature>
             <Dashboard />
           </AuthenticatedFeature>
         } />
         <Route path="/profile" element={
           <AuthenticatedFeature>
             <Profile />
           </AuthenticatedFeature>
         } />
         <Route path="/settings" element={
           <AuthenticatedFeature>
             <Settings />
           </AuthenticatedFeature>
         } />
       </Routes>
     </div>
   </BrowserRouter>
 );
}

export default App;