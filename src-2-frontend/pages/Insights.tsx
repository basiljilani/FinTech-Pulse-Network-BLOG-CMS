import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Globe, 
  BarChart2, 
  PieChart, 
  AreaChart,
  Lightbulb  
} from 'lucide-react';
import Footer from '../components/Footer';

const Insights: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [email, setEmail] = useState('');

  const insightCategories = [
    {
      icon: TrendingUp,
      title: 'Market Trends',
      description: 'Real-time analysis of global financial market movements',
      filter: 'market'
    },
    {
      icon: Globe,
      title: 'Global Economics',
      description: 'Comprehensive insights into international economic landscapes',
      filter: 'global'
    },
    {
      icon: BarChart2,
      title: 'Investment Strategies',
      description: 'Advanced strategies for portfolio optimization and growth',
      filter: 'investment'
    }
  ];

  const insights = [
    {
      title: 'AI-Driven Market Prediction Models',
      category: 'market',
      date: 'April 15, 2024',
      excerpt: 'Exploring how machine learning algorithms are revolutionizing market forecasting...',
      readTime: '6 min read'
    },
    {
      title: 'Emerging Markets: Investment Opportunities',
      category: 'global',
      date: 'April 12, 2024',
      excerpt: 'Deep dive into high-potential emerging markets and their economic dynamics...',
      readTime: '7 min read'
    },
    {
      title: 'Sustainable Investment Trends 2024',
      category: 'investment',
      date: 'April 10, 2024',
      excerpt: 'Analyzing the rise of ESG investing and its impact on global financial strategies...',
      readTime: '5 min read'
    },
    {
      title: 'Cryptocurrency Market Volatility Analysis',
      category: 'market',
      date: 'April 8, 2024',
      excerpt: 'Comprehensive analysis of recent cryptocurrency market fluctuations...',
      readTime: '6 min read'
    }
  ];

  const filteredInsights = activeFilter === 'all' 
    ? insights 
    : insights.filter(insight => insight.category === activeFilter);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual subscription logic
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white relative">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 pt-36 pb-12"
      >
        <div className="flex items-center justify-center mb-8">
          <Lightbulb className="h-12 w-12 text-yellow-500 mr-4" />
          <h1 className="text-4xl font-bold text-gray-900">
            FinTech Pulse Insights
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
          Cutting-edge financial intelligence powered by advanced AI analytics and expert research.
        </p>
      </motion.div>

      {/* Insight Categories */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {insightCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-xl transition-all"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <category.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex justify-center space-x-4 mb-12">
          {['all', 'market', 'global', 'investment'].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg capitalize font-semibold transition-all ${
                activeFilter === filter 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredInsights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-blue-600 uppercase font-semibold">
                    {insight.category}
                  </span>
                  <span className="text-sm text-gray-500">{insight.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                <div className="flex justify-between items-center">
                  <button className="text-blue-600 hover:underline">
                    Read More
                  </button>
                  <span className="text-sm text-gray-500">{insight.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-gradient-to-br from-blue-100 to-blue-200 py-12 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="md:flex items-center">
            <div className="md:w-2/3 p-6">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Stay Ahead of the Curve
              </h2>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter and get the latest financial insights delivered directly to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="md:w-1/3 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc" 
                alt="Financial Insights" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
