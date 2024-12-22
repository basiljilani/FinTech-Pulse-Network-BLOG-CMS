import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { articles, categories } from '../data/articles';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Article not found</h2>
          <button
            onClick={() => navigate('/insights')}
            className="text-[#8B5CF6] hover:text-white transition-colors"
          >
            Return to Insights
          </button>
        </div>
      </div>
    );
  }

  const category = categories.find(c => c.id === article.category);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#0A0F1E] text-white"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate('/insights')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Insights
          </button>
          <button 
            onClick={handleShare}
            className="ml-auto flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Share2 className="w-5 h-5" />
            Share
          </button>
        </div>

        {/* Article Meta */}
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 text-sm rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6]">
            {category?.name}
          </span>
          <span className="flex items-center text-sm text-gray-400">
            <Clock className="w-4 h-4 mr-1" />
            {article.readTime}
          </span>
          <span className="flex items-center text-sm text-gray-400">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(article.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>

        {/* Article Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]">
          {article.title}
        </h1>

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-12 pb-12 border-b border-gray-800">
          <div>
            <div className="font-medium text-lg">{article.author.name}</div>
            <div className="text-gray-400">{article.author.role}</div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Introduction */}
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Mock Content Sections */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6">Understanding the Impact</h2>
          <p className="mb-8 text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
          <ul className="list-disc list-inside mb-8 text-gray-300 space-y-2">
            <li>Enhanced security and compliance measures</li>
            <li>Improved operational efficiency</li>
            <li>Reduced costs and overhead</li>
            <li>Better user experience and satisfaction</li>
          </ul>

          <div className="bg-[#1E293B] rounded-2xl p-8 mb-8">
            <h4 className="text-lg font-bold mb-4">💡 Pro Tip</h4>
            <p className="text-gray-300">
              When implementing these solutions, start with a small pilot program to test effectiveness and gather user feedback 
              before rolling out to the entire organization.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">Implementation Strategy</h3>
          <p className="mb-8 text-gray-300 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="bg-gradient-to-br from-[#2563EB]/20 via-[#4F46E5]/20 to-[#7C3AED]/20 rounded-2xl p-8 mb-8">
            <h4 className="text-lg font-bold mb-4">🎯 Key Takeaways</h4>
            <ul className="list-none space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-[#8B5CF6]">1.</span>
                <span className="text-gray-300">Focus on regulatory compliance from the start</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B5CF6]">2.</span>
                <span className="text-gray-300">Invest in proper training and documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B5CF6]">3.</span>
                <span className="text-gray-300">Regular audits and updates are crucial</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-16 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles
              .filter(a => a.category === article.category && a.id !== article.id)
              .slice(0, 2)
              .map(relatedArticle => (
                <Link
                  key={relatedArticle.id}
                  to={`/insights/${relatedArticle.id}`}
                  className="group bg-[#1E293B] rounded-2xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6]">
                      {category?.name}
                    </span>
                    <span className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {relatedArticle.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#8B5CF6] transition-colors">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article;
