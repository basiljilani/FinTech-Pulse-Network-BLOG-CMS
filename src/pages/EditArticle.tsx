import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Save } from 'lucide-react';
import { categories } from '../data/articles';
import axios from 'axios';
import { API_URL } from '../config/apiConfig';

interface Author {
  name: string;
  role: string;
}

interface ArticleForm {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: Author;
  readTime: string;
  proTip: boolean;
  proTipContent: string;
  keyTakeaways: string[];
  implementationStrategy: string;
  tags: string[];
  featuredImage: string;
  metaDescription: string;
}

const initialFormData: ArticleForm = {
  title: '',
  excerpt: '',
  content: '',
  category: categories[0].id,
  author: {
    name: '',
    role: '',
  },
  readTime: '',
  proTip: false,
  proTipContent: '',
  keyTakeaways: [''],
  implementationStrategy: '',
  tags: [''],
  featuredImage: '',
  metaDescription: '',
};

const EditArticle: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<ArticleForm>(initialFormData);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/articles/${id}`);
        
        // Ensure we have all required fields, using defaults if necessary
        const articleData = {
          ...initialFormData,
          ...response.data,
          author: {
            name: response.data.author?.name || '',
            role: response.data.author?.role || ''
          },
          keyTakeaways: response.data.keyTakeaways || [''],
          tags: response.data.tags || ['']
        };
        
        setFormData(articleData);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      author: {
        ...prev.author,
        [name]: value
      }
    }));
  };

  const handleArrayInput = (index: number, value: string, field: 'keyTakeaways' | 'tags') => {
    setFormData(prev => {
      const newArray = [...prev[field]];
      newArray[index] = value;
      return {
        ...prev,
        [field]: newArray
      };
    });
  };

  const addArrayItem = (field: 'keyTakeaways' | 'tags') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (index: number, field: 'keyTakeaways' | 'tags') => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleProTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      proTip: e.target.checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await axios.put(`${API_URL}/articles/${id}`, formData);
      navigate('/admin/articles');
    } catch (error) {
      console.error('Error updating article:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0F17] text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/admin/articles')}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Articles
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={saving}
            className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Save className="w-5 h-5 mr-2" />
            {saving ? 'Saving...' : 'Save Changes'}
          </motion.button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full bg-[#1A1F2E] rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter article title"
              required
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium mb-2">Excerpt</label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              className="w-full bg-[#1A1F2E] rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none h-24"
              placeholder="Enter a brief excerpt"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium mb-2">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="w-full bg-[#1A1F2E] rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none h-64"
              placeholder="Write your article content here"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full bg-[#1A1F2E] rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Author */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Author Name</label>
              <input
                type="text"
                name="name"
                value={formData.author.name}
                onChange={handleAuthorChange}
                className="w-full bg-[#1A1F2E] rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Author name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Author Role</label>
              <input
                type="text"
                name="role"
                value={formData.author.role}
                onChange={handleAuthorChange}
                className="w-full bg-[#1A1F2E] rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Author role"
                required
              />
            </div>
          </div>

          {/* Read Time */}
          <div>
            <label className="block text-sm font-medium mb-2">Read Time</label>
            <input
              type="text"
              name="readTime"
              value={formData.readTime}
              onChange={handleInputChange}
              className="w-full bg-[#1A1F2E] rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g., 5 min read"
              required
            />
          </div>

          {/* Pro Tips Toggle and Content */}
          <div className="space-y-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="proTip"
                checked={formData.proTip}
                onChange={(e) => setFormData({ ...formData, proTip: e.target.checked })}
                className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-700 bg-[#1A1F2E] focus:ring-blue-500"
              />
              <span className="text-sm font-medium">Include Pro Tips</span>
            </label>

            {formData.proTip && (
              <div>
                <label className="block text-sm font-medium mb-2">Pro Tips Content</label>
                <textarea
                  name="proTipContent"
                  value={formData.proTipContent}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#1A1F2E] border border-gray-700 focus:outline-none focus:border-blue-500"
                  placeholder="Enter pro tips content"
                  rows={4}
                />
              </div>
            )}
          </div>

          {/* Key Takeaways */}
          <div>
            <label className="block text-sm font-medium mb-2">Key Takeaways</label>
            {formData.keyTakeaways.map((takeaway, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={takeaway}
                  onChange={(e) => handleArrayInput(index, e.target.value, 'keyTakeaways')}
                  className="flex-1 bg-[#1A1F2E] rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter a key takeaway"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(index, 'keyTakeaways')}
                  className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('keyTakeaways')}
              className="mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
            >
              Add Takeaway
            </button>
          </div>

          {/* Implementation Strategy */}
          <div>
            <label className="block text-sm font-medium mb-2">Implementation Strategy</label>
            <textarea
              name="implementationStrategy"
              value={formData.implementationStrategy}
              onChange={handleInputChange}
              className="w-full bg-[#1A1F2E] rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none h-24"
              placeholder="Enter implementation strategy"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-2">Tags</label>
            {formData.tags.map((tag, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => handleArrayInput(index, e.target.value, 'tags')}
                  className="flex-1 bg-[#1A1F2E] rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter a tag"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(index, 'tags')}
                  className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('tags')}
              className="mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
            >
              Add Tag
            </button>
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-sm font-medium mb-2">Featured Image URL</label>
            <input
              type="url"
              name="featuredImage"
              value={formData.featuredImage}
              onChange={handleInputChange}
              className="w-full bg-[#1A1F2E] rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter image URL"
            />
          </div>

          {/* Meta Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Meta Description</label>
            <textarea
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleInputChange}
              className="w-full bg-[#1A1F2E] rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none h-24"
              placeholder="Enter meta description for SEO"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditArticle;
