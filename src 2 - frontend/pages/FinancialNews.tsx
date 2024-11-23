import React, { useState } from 'react';
import { Search, Filter, Newspaper } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  source: string;
  timestamp: string;
  category: string;
}

export default function FinancialNews() {
  const [searchTerm, setSearchTerm] = useState('');

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Federal Reserve Announces New Policy Measures",
      summary: "The Federal Reserve has unveiled new monetary policy measures aimed at controlling inflation while supporting economic growth...",
      source: "Financial Times",
      timestamp: "2 hours ago",
      category: "Monetary Policy"
    },
    {
      id: 2,
      title: "Tech Stocks Rally Amid Positive Earnings",
      summary: "Major technology companies reported better-than-expected quarterly earnings, driving a broad market rally...",
      source: "Bloomberg",
      timestamp: "4 hours ago",
      category: "Markets"
    },
    {
      id: 3,
      title: "Global Supply Chain Updates",
      summary: "Recent developments in global supply chains show signs of improvement as major ports clear backlogs...",
      source: "Reuters",
      timestamp: "6 hours ago",
      category: "Economy"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Financial News</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search news..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-blue-600 font-medium">{item.category}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{item.timestamp}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                  <p className="text-gray-600 mb-4">{item.summary}</p>
                  <div className="flex items-center space-x-2">
                    <Newspaper className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{item.source}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}