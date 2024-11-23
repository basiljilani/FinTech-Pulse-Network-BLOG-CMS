import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Calendar, Users, TrendingUp } from 'lucide-react';

export default function Home() {
  const articles = [
    {
      title: "The Future of AI in Financial Markets",
      excerpt: "Exploring how artificial intelligence is reshaping trading strategies and market analysis...",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sustainable Investing Trends 2024",
      excerpt: "Analysis of emerging ESG investment opportunities and their impact on portfolio performance...",
      author: "Michael Chen",
      date: "March 14, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cryptocurrency Market Analysis",
      excerpt: "Deep dive into current crypto market trends and future predictions for digital assets...",
      author: "Alex Rivera",
      date: "March 13, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Hero />
      
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
            <p className="mt-4 text-xl text-gray-600">
              Stay informed with our latest financial analysis and market insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <Calendar className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Daily Updates</h3>
              <p className="text-gray-600">Get real-time market insights and analysis delivered daily</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Analysis</h3>
              <p className="text-gray-600">Access insights from leading financial experts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Market Trends</h3>
              <p className="text-gray-600">Stay ahead with predictive market trend analysis</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}