import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Search, Calendar, Clock, Check, X } from 'lucide-react';
import { categories } from '../data/articles';
import axios from 'axios';
import { API_URL } from '../config/apiConfig';

const API_BASE_URL = API_URL;

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
  readTime: string;
  proTip?: string;
  keyTakeaways?: string[];
  implementationStrategy?: string;
  tags?: string[];
  featuredImage?: string;
  metaDescription?: string;
  createdAt: string;
}

const initialFormData = {
  title: '',
  excerpt: '',
  content: '',
  category: categories[0].id,
  author: {
    name: '',
    role: '',
  },
  readTime: '',
  proTip: '',
  keyTakeaways: [''],
  implementationStrategy: '',
  tags: [''],
  featuredImage: '',
  metaDescription: '',
};

const ArticleManager: React.FC = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resetForm = () => {
    // No need to reset form data as we are navigating to a new page
  };

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(`${API_BASE_URL}/articles`, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000 // 10 seconds timeout
      });
      
      setArticles(response.data);
    } catch (err) {
      console.error('Failed to fetch articles:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleCreateOrUpdateArticle = async () => {
    // This function is not needed as we are navigating to a new page
  };

  const handleDeleteArticle = async (articleId: string) => {
    if (!window.confirm('Are you sure you want to delete this article?')) return;

    try {
      await axios.delete(`${API_BASE_URL}/articles/${articleId}`);
      setArticles(articles.filter(article => article._id !== articleId));
    } catch (err) {
      console.error('Failed to delete article:', err);
      setError(err instanceof Error ? err.message : 'Failed to delete article');
    }
  };

  const handleEdit = (article: Article) => {
    console.log('Editing article:', article); // Add logging
    if (article._id) {
      navigate(`/admin/edit-article/${article._id}`, { replace: true });
    } else {
      console.error('Article ID is missing:', article);
    }
  };

  const handleInputChange = (name: string, value: string | string[]) => {
    // This function is not needed as we are navigating to a new page
  };

  const formatCategoryName = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'fintech': 'FinTech',
      'ai-ml': 'AI/ML',
      'research': 'Research / White Papers'
    };
    return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
  };

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <div className="bg-red-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Error</h2>
          <p className="mb-4">{error}</p>
          <button 
            onClick={fetchArticles} 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Article Manager</h1>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/admin/create-article', { replace: true })}
            className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Article
          </motion.button>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-2 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-600 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {React.createElement(category.icon, { className: 'w-4 h-4' })}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-4 w-1/3">Title</th>
                <th className="text-right py-4 px-4">Author</th>
                <th className="text-right py-4 px-4">Category</th>
                <th className="text-right py-4 px-4">Date</th>
                <th className="text-right py-4 px-4">Pro Tips</th>
                <th className="text-right py-4 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((article) => (
                <tr key={article._id} className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="py-4 px-4 w-1/3">
                    <div>
                      <h3 className="font-medium">{article.title}</h3>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div>
                      <p className="font-medium">{article.author.name}</p>
                      <p className="text-gray-400 text-sm">{article.author.role}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className="px-3 py-1 rounded-full bg-gray-700 text-sm font-medium">
                      {formatCategoryName(article.category)}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right text-gray-400">
                    {new Date(article.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-4 text-right">
                    {article.proTip ? (
                      <Check className="w-5 h-5 text-green-500 ml-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 ml-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleEdit(article)}
                        className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteArticle(article._id)}
                        className="p-2 text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArticleManager;
