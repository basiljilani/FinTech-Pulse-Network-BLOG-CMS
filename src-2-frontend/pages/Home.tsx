import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import EarthBackground from '../components/EarthBackground';
import MarketTicker from '../components/MarketTicker';
import { 
  Zap, 
  BookOpen, 
  Check, 
  Globe, 
  Award,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  BookMarked,
  Tag,
  TrendingDown,
  DollarSign,
  BarChart2,
  Activity
} from 'lucide-react';

const Home: React.FC = () => {
  const valuePropositions = [
    {
      icon: Users,
      title: "Expert Community",
      description: "Connect with financial experts and industry leaders."
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Real-time market insights and trend analysis."
    },
    {
      icon: Zap,
      title: "Advanced Analytics",
      description: "Advanced analytics for predictive insights."
    }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "The Future of DeFi: Revolutionizing Traditional Finance",
      excerpt: "Explore how decentralized finance is reshaping the landscape of traditional banking and investment systems.",
      category: "DeFi",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop",
      author: {
        name: "Sarah Chen",
        role: "Financial Analyst"
      }
    },
    {
      id: 2,
      title: "Advanced Financial Analytics: Making Smarter Decisions",
      excerpt: "How advanced analytics is transforming financial decision-making processes.",
      category: "Financial Analytics",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1000&auto=format&fit=crop",
      author: {
        name: "Michael Ross",
        role: "Financial Strategist"
      }
    },
    {
      id: 3,
      title: "ESG Investing: The Rise of Sustainable Finance",
      excerpt: "Understanding the growing importance of environmental, social, and governance factors in investment decisions.",
      category: "Sustainable Finance",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1639322537964-4920b0620b16?q=80&w=1000&auto=format&fit=crop",
      author: {
        name: "Emma Watson",
        role: "ESG Specialist"
      }
    }
  ];

  const additionalArticles = [
    {
      id: 4,
      title: "Cryptocurrency Markets: Analysis and Predictions",
      excerpt: "A deep dive into current crypto market trends and future projections for 2024.",
      category: "Crypto",
      readTime: "5 min read",
      date: "Dec 20, 2023",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1000&auto=format&fit=crop",
      author: {
        name: "Alex Zhang",
        role: "Crypto Analyst"
      }
    },
    {
      id: 5,
      title: "FinTech Regulations: Navigating the Complex Landscape",
      excerpt: "Understanding the regulatory challenges facing financial technology companies in today's market.",
      category: "Regulation",
      readTime: "4 min read",
      date: "Dec 19, 2023",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
      author: {
        name: "David Miller",
        role: "Regulatory Expert"
      }
    },
    {
      id: 6,
      title: "Digital Banking: The Next Generation",
      excerpt: "How modern banking is evolving with technology and changing consumer needs.",
      category: "Banking",
      readTime: "6 min read",
      date: "Dec 18, 2023",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1000&auto=format&fit=crop",
      author: {
        name: "Sophie Taylor",
        role: "Digital Banking Lead"
      }
    },
    {
      id: 7,
      title: "The Rise of Open Banking APIs",
      excerpt: "How APIs are transforming financial services and enabling innovative solutions.",
      category: "Technology",
      readTime: "7 min read",
      date: "Dec 17, 2023",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      author: {
        name: "James Wilson",
        role: "Tech Architect"
      }
    },
    {
      id: 8,
      title: "Blockchain in Supply Chain Finance",
      excerpt: "Exploring how blockchain technology is revolutionizing supply chain financing.",
      category: "Blockchain",
      readTime: "5 min read",
      date: "Dec 16, 2023",
      image: "https://images.unsplash.com/photo-1621579943838-7c1c1f670b6b?q=80&w=1000&auto=format&fit=crop",
      author: {
        name: "Linda Chen",
        role: "Blockchain Specialist"
      }
    },
    {
      id: 9,
      title: "The Impact of Advanced Analytics on Risk Management",
      excerpt: "How advanced analytics is transforming risk assessment in financial institutions.",
      category: "Risk Management",
      readTime: "8 min read",
      date: "Dec 15, 2023",
      image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1000&auto=format&fit=crop",
      author: {
        name: "Robert Kumar",
        role: "Risk Analyst"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col">
        <EarthBackground />
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-3xl mx-auto space-y-4"
              >
                <h2 className="text-lg sm:text-xl font-medium text-indigo-200 tracking-wide uppercase mb-4">
                  Advanced Financial Analytics
                </h2>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.15] mb-8">
                  Transform Your
                  <span className="block mt-1 bg-gradient-to-r from-indigo-200 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                    Financial Future
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                  Experience the next generation of financial intelligence. 
                  Make smarter, data-driven decisions with powerful analytics.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center"
              >
                <button className="px-8 py-3 bg-white text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 flex items-center justify-center gap-8 text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-indigo-400" />
                  <span>Real-time Insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-indigo-400" />
                  <span>Advanced Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-indigo-400" />
                  <span>Secure Platform</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Market Ticker */}
      <MarketTicker />

      {/* Value Propositions */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  {React.createElement(prop.icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{prop.title}</h3>
                <p className="text-gray-300">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-gray-800/90 backdrop-blur-sm text-sm font-medium rounded-full text-gray-200">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-300 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Articles */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gray-700 text-sm font-medium rounded-full text-gray-200">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 hover:text-blue-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="text-sm">
                        <p className="text-white font-medium">{article.author.name}</p>
                        <p className="text-gray-400">{article.author.role}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;