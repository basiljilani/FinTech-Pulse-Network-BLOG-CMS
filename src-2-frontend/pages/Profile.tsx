import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Calendar, 
  Shield, 
  Zap, 
  Settings, 
  CreditCard, 
  TrendingUp, 
  BookOpen 
} from 'lucide-react';
import { useAuthStore } from '../lib/auth.store';

const dashboardSections = [
  {
    title: 'Subscription',
    description: 'Premium Membership Details',
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    color: 'blue'
  },
  {
    title: 'Market Insights',
    description: 'Personalized Financial Reports',
    icon: <TrendingUp className="h-8 w-8 text-green-600" />,
    color: 'green'
  },
  {
    title: 'Research Library',
    description: 'Exclusive Content Access',
    icon: <BookOpen className="h-8 w-8 text-purple-600" />,
    color: 'purple'
  }
];

const DashboardCard = ({ section }: { section: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`bg-white rounded-xl shadow-md p-6 relative overflow-hidden`}
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-lg bg-${section.color}-50`}>
        {section.icon}
      </div>
      <Zap className="h-5 w-5 text-gray-400" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
    <p className="text-sm text-gray-600">{section.description}</p>
  </motion.div>
);

export default function Profile() {
  const { user } = useAuthStore();
  const [activeSection, setActiveSection] = React.useState('profile');

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">User Dashboard</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your personalized financial intelligence hub
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {dashboardSections.map((section, index) => (
            <DashboardCard key={index} section={section} />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 h-32"></div>
          <div className="px-8 py-6 -mt-16">
            <div className="flex flex-col items-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="bg-white p-2 rounded-full shadow-lg"
              >
                <User className="h-24 w-24 text-blue-600" />
              </motion.div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">{user?.username}</h2>
              <p className="text-gray-600">Premium Member</p>
            </div>

            <div className="mt-8 border-t pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900">{user?.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Member Since</p>
                    <p className="text-gray-900">November 2024</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Account Status</p>
                    <p className="text-gray-900">Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}