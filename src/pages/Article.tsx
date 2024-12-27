import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Lightbulb, CheckCircle2, Target } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
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
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="px-3 py-1 text-sm rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] truncate max-w-[200px]">
            {category?.name}
          </span>
          <span className="flex items-center text-sm text-gray-400 whitespace-nowrap">
            <Clock className="w-4 h-4 mr-1 flex-shrink-0" />
            {article.readTime}
          </span>
          <span className="flex items-center text-sm text-gray-400 whitespace-nowrap">
            <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
            {new Date(article.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>

        {/* Article Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white break-words">
          {article.title}
        </h1>

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-12 pb-12 border-b border-gray-800">
          <div className="min-w-0">
            <div className="font-medium text-lg truncate">{article.author.name}</div>
            <div className="text-gray-400 truncate">{article.author.role}</div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Introduction */}
        <p className="text-xl text-gray-300 mb-12 leading-relaxed break-words">
          {article.excerpt}
        </p>

        {/* Mock Content Sections */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6 break-words">Understanding the Impact</h2>
          <p className="mb-8 text-gray-300 leading-relaxed break-words">
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

          <div className="bg-[#1A1F2E] rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Target className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-semibold">Implementation Strategy</h2>
            </div>
            <div className="text-gray-300">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>

          <div className="bg-[#1A1F2E] rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              <h2 className="text-xl font-semibold">Key Takeaways</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Focus on regulatory compliance from the start</li>
              <li>Invest in proper training and documentation</li>
              <li>Regular audits and updates are crucial</li>
            </ul>
          </div>

          {/* Pro Tips Section */}
          {article.proTip && (
            <div className="bg-[#1A1F2E] rounded-lg p-6 mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                <h2 className="text-xl font-semibold">Pro Tips</h2>
              </div>
              <div className="text-gray-300">
                {article.proTipContent}
              </div>
            </div>
          )}
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
                  className="group bg-[#1E293B] rounded-2xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] truncate max-w-[150px]">
                      {category?.name}
                    </span>
                    <span className="flex items-center text-sm text-gray-400 whitespace-nowrap">
                      <Clock className="w-4 h-4 mr-1 flex-shrink-0" />
                      {relatedArticle.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#8B5CF6] transition-colors line-clamp-2">
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
