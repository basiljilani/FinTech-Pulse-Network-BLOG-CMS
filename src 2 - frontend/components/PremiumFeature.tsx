import React from 'react';
import { Lock } from 'lucide-react';

export default function PremiumFeature() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="absolute inset-0 filter blur-sm bg-[url('https://images.unsplash.com/photo-1642543492481-44e81e3914a7')] bg-cover bg-center opacity-10" />
        <div className="relative flex flex-col items-center justify-center min-h-[60vh]">
          <Lock className="h-16 w-16 text-blue-600 mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">Premium Feature</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mb-8">
            This feature is available exclusively to our premium subscribers. Upgrade your account to access advanced automation capabilities.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Upgrade to Premium
          </button>
        </div>
      </div>
    </div>
  );
}