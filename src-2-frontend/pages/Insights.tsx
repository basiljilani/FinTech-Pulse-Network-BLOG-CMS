import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Calendar, Search } from 'lucide-react';
import { articles, categories } from '../data/articles';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
}

const Insights: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const filteredArticles = articles.filter(article => {
    const matchesFilter = activeFilter === 'all' || article.category === activeFilter;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-gray-100">      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]">
            Financial Insights & Analysis
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Expert analysis, market trends, and strategic insights to inform your financial decisions
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-16">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#1E293B] rounded-xl border border-gray-700 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors text-white placeholder-gray-400"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-16">
          <button
            onClick={() => handleFilterChange('all')}
            className={`px-6 py-3 rounded-2xl transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-[#8B5CF6] text-white'
                : 'bg-[#1E293B] text-gray-400 hover:bg-[#1E293B]/70'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-[#8B5CF6] text-white'
                  : 'bg-[#1E293B] text-gray-400 hover:bg-[#1E293B]/70'
              }`}
            >
              {React.createElement(category.icon, { className: 'h-5 w-5' })}
              {category.name}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group bg-[#1E293B] rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <Link to={`/insights/${article.id}`} className="block p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6]">
                    {categories.find(c => c.id === article.category)?.name}
                  </span>
                  <span className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-[#8B5CF6] transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-2 text-sm">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="text-sm font-medium text-white">
                        {article.author.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {article.author.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
