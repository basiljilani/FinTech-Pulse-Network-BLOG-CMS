import React from 'react';
import { useAuthStore } from '../lib/auth.store';
import { BarChart2, Users, TrendingUp, DollarSign } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuthStore();

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      icon: <DollarSign className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Active Users",
      value: "2,338",
      change: "+15.3%",
      icon: <Users className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Market Growth",
      value: "12.5%",
      change: "+2.4%",
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Analytics",
      value: "1,234",
      change: "+28.4%",
      icon: <BarChart2 className="h-8 w-8 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.username}!</h1>
          <p className="mt-2 text-gray-600">Here's what's happening with your account today.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                {stat.icon}
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <p className="text-gray-600">No recent activity to display.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                Generate Report
              </button>
              <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                View Analytics
              </button>
              <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                Update Profile
              </button>
              <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                Get Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}