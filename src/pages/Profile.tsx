import React from 'react';
import { useAuthStore } from '../lib/auth.store';
import { User, Mail, Calendar, Shield } from 'lucide-react';

export default function Profile() {
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 h-32"></div>
          <div className="px-8 py-6 -mt-16">
            <div className="flex flex-col items-center">
              <div className="bg-white p-2 rounded-full">
                <User className="h-24 w-24 text-blue-600" />
              </div>
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