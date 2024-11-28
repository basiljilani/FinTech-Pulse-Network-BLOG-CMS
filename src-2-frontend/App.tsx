import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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

const AuthComponent = ({ children }: { children: React.ReactNode }) => (
 <Authenticator>
   {({ signOut, user }) => (
     <div>
       <Navbar signOut={signOut} user={user} />
       {children}
     </div>
   )}
 </Authenticator>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
 const navigate = useNavigate();

 return (
   <AuthComponent>
     {children}
   </AuthComponent>
 );
};

function App() {
 return (
   <BrowserRouter>
     <div className="min-h-screen bg-gray-50">
       <Routes>
         {/* Public Routes */}
         <Route path="/" element={<><Navbar /><Home /></>} />
         <Route path="/solutions" element={<><Navbar /><Solutions /></>} />
         <Route path="/categories" element={<><Navbar /><Categories /></>} />
         <Route path="/pricing" element={<><Navbar /><Pricing /></>} />
         <Route path="/contact" element={<><Navbar /><Contact /></>} />
         <Route path="/login" element={<AuthComponent><Home /></AuthComponent>} />
         
         {/* Protected Premium Routes */}
         <Route path="/market-analysis" element={
           <ProtectedRoute>
             <PremiumFeature />
           </ProtectedRoute>
         } />
         <Route path="/investment-reports" element={
           <ProtectedRoute>
             <PremiumFeature />
           </ProtectedRoute>
         } />
         <Route path="/research-papers" element={
           <ProtectedRoute>
             <PremiumFeature />
           </ProtectedRoute>
         } />
         <Route path="/regulatory-content" element={
           <ProtectedRoute>
             <PremiumFeature />
           </ProtectedRoute>
         } />
         
         {/* Protected Feature Routes */}
         <Route path="/financial-news" element={
           <ProtectedRoute>
             <FinancialNews />
           </ProtectedRoute>
         } />
         <Route path="/trading-updates" element={
           <ProtectedRoute>
             <TradingUpdates />
           </ProtectedRoute>
         } />
         
         {/* Protected User Routes */}
         <Route path="/dashboard" element={
           <ProtectedRoute>
             <Dashboard />
           </ProtectedRoute>
         } />
         <Route path="/profile" element={
           <ProtectedRoute>
             <Profile />
           </ProtectedRoute>
         } />
         <Route path="/settings" element={
           <ProtectedRoute>
             <Settings />
           </ProtectedRoute>
         } />
       </Routes>
     </div>
   </BrowserRouter>
 );
}

export default App;