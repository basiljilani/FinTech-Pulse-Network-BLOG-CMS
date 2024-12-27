import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Search, Calendar, Clock } from 'lucide-react';
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
  date: string;
  readTime: string;
  proTip?: string;
  keyTakeaways?: string[];
  implementationStrategy?: string;
  tags?: string[];
  featuredImage?: string;
  metaDescription?: string;
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
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState(initialFormData);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('');

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setCurrentArticle(null);
  }, []);

  const fetchArticles = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleCreateOrUpdateArticle = async () => {
    try {
      if (currentArticle) {
        // Update existing article
        const response = await axios.put(`${API_BASE_URL}/articles/${currentArticle._id}`, formData);
        setArticles(articles.map(article => 
          article._id === currentArticle._id ? response.data : article
        ));
      } else {
        // Create new article
        const response = await axios.post(`${API_BASE_URL}/articles`, formData);
        setArticles([response.data, ...articles]);
      }
      
      setIsModalOpen(false);
      resetForm();
    } catch (err) {
      console.error('Failed to save article:', err);
      setError(err instanceof Error ? err.message : 'Failed to save article');
    }
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
    setCurrentArticle(article);
    setFormData({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      category: article.category,
      author: article.author,
      readTime: article.readTime,
      proTip: article.proTip || '',
      keyTakeaways: article.keyTakeaways || [''],
      implementationStrategy: article.implementationStrategy || '',
      tags: article.tags || [''],
      featuredImage: article.featuredImage || '',
      metaDescription: article.metaDescription || '',
    });
    setIsModalOpen(true);
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !activeFilter || article.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  const handleInputChange = (name: string, value: string | string[]) => {
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof initialFormData] || {}),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Modal for Create/Edit Article */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-8 rounded-lg w-full max-w-2xl">
            <h2 className="text-2xl mb-6">
              {currentArticle ? 'Edit Article' : 'Create New Article'}
            </h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleCreateOrUpdateArticle();
            }}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter article title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Excerpt</label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => handleInputChange('excerpt', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                    placeholder="Enter a brief excerpt"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Content</label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={(e) => handleInputChange('content', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                    placeholder="Enter article content"
                    rows={10}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Pro Tip</label>
                  <textarea
                    name="proTip"
                    value={formData.proTip}
                    onChange={(e) => handleInputChange('proTip', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                    placeholder="Enter a pro tip"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Implementation Strategy</label>
                  <textarea
                    name="implementationStrategy"
                    value={formData.implementationStrategy}
                    onChange={(e) => handleInputChange('implementationStrategy', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                    placeholder="Enter implementation strategy"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Key Takeaways</label>
                  {formData.keyTakeaways?.map((takeaway, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        name={`keyTakeaways.${index}`}
                        value={takeaway}
                        onChange={(e) => handleInputChange(`keyTakeaways.${index}`, e.target.value)}
                        className="flex-1 px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                        placeholder={`Takeaway ${index + 1}`}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newTakeaways = formData.keyTakeaways?.filter((_, i) => i !== index);
                          setFormData({ ...formData, keyTakeaways: newTakeaways });
                        }}
                        className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      const newTakeaways = [...(formData.keyTakeaways || []), ''];
                      setFormData({ ...formData, keyTakeaways: newTakeaways });
                    }}
                    className="mt-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                  >
                    Add Takeaway
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Tags</label>
                  {formData.tags?.map((tag, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        name={`tags.${index}`}
                        value={tag}
                        onChange={(e) => handleInputChange(`tags.${index}`, e.target.value)}
                        className="flex-1 px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                        placeholder={`Tag ${index + 1}`}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newTags = formData.tags?.filter((_, i) => i !== index);
                          setFormData({ ...formData, tags: newTags });
                        }}
                        className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      const newTags = [...(formData.tags || []), ''];
                      setFormData({ ...formData, tags: newTags });
                    }}
                    className="mt-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                  >
                    Add Tag
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Featured Image</label>
                  <input
                    type="text"
                    name="featuredImage"
                    value={formData.featuredImage}
                    onChange={(e) => handleInputChange('featuredImage', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                    placeholder="Enter featured image URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Meta Description</label>
                  <textarea
                    name="metaDescription"
                    value={formData.metaDescription}
                    onChange={(e) => handleInputChange('metaDescription', e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                    placeholder="Enter meta description"
                    rows={3}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                      required
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Read Time</label>
                    <input
                      type="text"
                      name="readTime"
                      value={formData.readTime}
                      onChange={(e) => handleInputChange('readTime', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                      placeholder="e.g., 5 min read"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Author Name</label>
                    <input
                      type="text"
                      name="author.name"
                      value={formData.author.name}
                      onChange={(e) => handleInputChange('author.name', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                      placeholder="Enter author name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Author Role</label>
                    <input
                      type="text"
                      name="author.role"
                      value={formData.author.role}
                      onChange={(e) => handleInputChange('author.role', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                      placeholder="Enter author role"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6 space-x-4">
                <button 
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    resetForm();
                  }}
                  className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                  {currentArticle ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-white">Article Manager</h1>
            <button
              onClick={() => {
                resetForm();
                setIsModalOpen(true);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              New Article
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-2 bg-gray-800 rounded-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveFilter('')}
              className={`px-4 py-2 rounded-md whitespace-nowrap transition-colors ${
                activeFilter === ''
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap transition-colors ${
                  activeFilter === category.id
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

        {/* Articles Table */}
        <div className="bg-gray-800 rounded-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Title</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium hidden md:table-cell">Author</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium hidden md:table-cell">Category</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium hidden md:table-cell">Date</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((article) => (
                <tr
                  key={article._id}
                  className="border-b border-gray-700 hover:bg-gray-750"
                >
                  <td className="py-3 px-4">
                    <div>
                      <div className="font-medium text-white">{article.title}</div>
                      <div className="text-sm text-gray-400 line-clamp-1">{article.excerpt}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4 hidden md:table-cell">
                    <div>
                      <div className="text-white">{article.author.name}</div>
                      <div className="text-sm text-gray-400">{article.author.role}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4 hidden md:table-cell">
                    <span className="px-2 py-1 text-sm bg-gray-700 text-gray-300 rounded">
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300 hidden md:table-cell">
                    {new Date(article.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEdit(article)}
                        className="p-2 hover:bg-gray-700 rounded-md text-blue-400 transition-colors"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteArticle(article._id)}
                        className="p-2 hover:bg-gray-700 rounded-md text-red-400 transition-colors"
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
