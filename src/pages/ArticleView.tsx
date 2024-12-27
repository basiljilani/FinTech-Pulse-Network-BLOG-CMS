import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, LightbulbIcon, Target, CheckCircle2, BrainCircuit, Users, UserCircle } from 'lucide-react';
import { categories } from '../data/articles';
import { API_URL } from '../config/apiConfig';
import axios from 'axios';

interface Article {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  date: string;
  readTime: string;
  proTip?: string;
  keyTakeaways?: string[];
  implementationStrategy?: string;
  relatedArticles?: {
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
  }[];
}

const ArticleView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${API_URL}/articles/${id}`);
        setArticle(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load article');
        setLoading(false);
        console.error('Error fetching article:', err);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#8B5CF6]"></div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center">
        <div className="text-white text-xl">{error || 'Article not found'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white">
      {/* Main Navigation */}
      <nav className="bg-[#0B0F17] border-b border-gray-800">
        {/* Your existing navigation component */}
      </nav>

      {/* Article Navigation */}
      <div className="bg-[#0B0F17] border-b border-gray-800 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/insights" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Insights
            </Link>
            <button className="flex items-center text-gray-400 hover:text-white transition-colors">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 break-words">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-400">
            <div className="flex items-center space-x-2 min-w-0">
              <UserCircle className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{article.author.name}</span>
            </div>
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>{new Date(article.date || '').toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-lg text-gray-300 mb-8 break-words">{article.excerpt}</div>
          <div className="mb-12 break-words" dangerouslySetInnerHTML={{ __html: article.content }} />

          {/* Pro Tips Section */}
          {article.proTip && (
            <div className="bg-[#1A1F2E] rounded-lg p-6 mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <LightbulbIcon className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <h2 className="text-xl font-semibold truncate">Pro Tips</h2>
              </div>
              <div className="text-gray-300 break-words">
                {article.proTip}
              </div>
            </div>
          )}

          {/* Key Takeaways */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="bg-[#1A1F2E] rounded-lg p-6 mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <h2 className="text-xl font-semibold truncate">Key Takeaways</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {article.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="break-words">
                    <span className="break-words">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Implementation Strategy */}
          {article.implementationStrategy && (
            <div className="bg-[#1A1F2E] rounded-lg p-6 mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Target className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <h2 className="text-xl font-semibold truncate">Implementation Strategy</h2>
              </div>
              <div className="text-gray-300 break-words">
                {article.implementationStrategy}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
