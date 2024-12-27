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
    <div className="min-h-screen bg-[#0B0F17]">
      <div className="pt-24"> 
        {/* Article Navigation */}
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link to="/insights" className="flex items-center text-gray-400 hover:text-white">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Insights
            </Link>
            <button className="flex items-center text-gray-400 hover:text-white">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-6 pb-24"> 
          <article>
            {/* Category, Read Time, Date */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="bg-[#4F378B] text-white px-3 py-1 rounded-full text-sm">
                {article?.category}
              </span>
              <span className="flex items-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {article?.readTime} read
              </span>
              <span className="text-gray-400 text-sm">
                {new Date(article?.date || '').toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold text-white mb-6 max-w-4xl">
              {article?.title}
            </h1>

            {/* Author */}
            <div className="mb-12">
              <h3 className="text-xl text-white">{article?.author?.name}</h3>
              <p className="text-gray-400">{article?.author?.role}</p>
            </div>

            <div className="border-b border-gray-800 mb-12"></div>

            {/* Content Section - Centered */}
            <div className="max-w-4xl mx-auto">
              {/* Excerpt */}
              <p className="text-xl text-gray-300 mb-12">
                {article?.excerpt}
              </p>

              {/* Main Content */}
              <div className="prose prose-invert max-w-none">
                {article?.content?.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Implementation Strategy */}
              {article?.implementationStrategy && (
                <div className="mt-12 mb-12">
                  <h2 className="flex items-center text-2xl font-bold text-white mb-6">
                    <span className="inline-block p-2 bg-[#4F378B] rounded-full mr-4">
                      <Target className="w-6 h-6" />
                    </span>
                    Implementation Strategy
                  </h2>
                  <div className="bg-[#1A1F2E] rounded-xl p-8">
                    {article.implementationStrategy.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 last:mb-0 text-gray-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Takeaways */}
              {article?.keyTakeaways && article.keyTakeaways.length > 0 && (
                <div className="mt-12 mb-12">
                  <h2 className="flex items-center text-2xl font-bold text-white mb-6">
                    <span className="inline-block p-2 bg-[#4F378B] rounded-full mr-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </span>
                    Key Takeaways
                  </h2>
                  <div className="bg-[#1A1F2E] rounded-xl p-8">
                    <ol className="list-decimal list-inside space-y-4">
                      {article.keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="text-gray-300">
                          {takeaway}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
