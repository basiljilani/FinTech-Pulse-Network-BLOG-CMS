import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
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
import NeuralBackground from '../components/NeuralBackground';

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
      title: "AI-Powered",
      description: "Advanced AI algorithms for predictive analytics."
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
      title: "AI in Investment: Making Smarter Financial Decisions",
      excerpt: "How artificial intelligence is transforming investment strategies and decision-making processes.",
      category: "AI & Finance",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1000&auto=format&fit=crop",
      author: {
        name: "Michael Ross",
        role: "Tech Strategist"
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
      title: "The Impact of AI on Risk Management",
      excerpt: "How artificial intelligence is transforming risk assessment in financial institutions.",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <NeuralBackground />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl w-full text-center flex flex-col items-center"
            >
              <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
                Elevate Your{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Financial Intelligence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12">
                Harness the power of AI-driven insights, curated knowledge, and strategic analysis to transform your financial decision-making.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Market Ticker */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden"
          >
            <div className="animate-marquee whitespace-nowrap flex items-center">
              <div className="inline-flex items-center mx-8">
                <span className="font-medium mr-2">BTC/USD</span>
                <span className="mr-2">$42,830.50</span>
                <span className="flex items-center text-green-400">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +2.4%
                </span>
              </div>
              <div className="inline-flex items-center mx-8">
                <span className="font-medium mr-2">ETH/USD</span>
                <span className="mr-2">$2,241.30</span>
                <span className="flex items-center text-green-400">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +1.8%
                </span>
              </div>
              <div className="inline-flex items-center mx-8">
                <span className="font-medium mr-2">S&P 500</span>
                <span className="mr-2">$4,719.19</span>
                <span className="flex items-center text-red-400">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  -0.3%
                </span>
              </div>
              <div className="inline-flex items-center mx-8">
                <span className="font-medium mr-2">NASDAQ</span>
                <span className="mr-2">$14,813.92</span>
                <span className="flex items-center text-green-400">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +0.5%
                </span>
              </div>
              <div className="inline-flex items-center mx-8">
                <span className="font-medium mr-2">Gold</span>
                <span className="mr-2">$2,034.80</span>
                <span className="flex items-center text-red-400">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  -0.1%
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Designed for Your Success */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Designed for Your Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering your financial journey with cutting-edge tools and expert insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50 rounded-2xl transform transition-transform group-hover:scale-105 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <prop.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{prop.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Trading Volume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_40px_-8px_rgba(0,0,0,0.15)] transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-gray-600 font-medium mb-2">Total Trading Volume</h3>
                  <p className="text-4xl font-bold text-gray-900">$2.4M</p>
                  <div className="flex items-center mt-4">
                    <span className="text-green-500 font-medium">+12.5%</span>
                    <span className="text-gray-500 ml-2">vs last month</span>
                  </div>
                </div>
                <div className="bg-blue-50/50 p-4 rounded-xl">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </motion.div>

            {/* Active Users */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_40px_-8px_rgba(0,0,0,0.15)] transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-gray-600 font-medium mb-2">Active Users</h3>
                  <p className="text-4xl font-bold text-gray-900">12.5K</p>
                  <div className="flex items-center mt-4">
                    <span className="text-green-500 font-medium">+8.2%</span>
                    <span className="text-gray-500 ml-2">vs last month</span>
                  </div>
                </div>
                <div className="bg-blue-50/50 p-4 rounded-xl">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </motion.div>

            {/* Market Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_40px_-8px_rgba(0,0,0,0.15)] transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-gray-600 font-medium mb-2">Market Analysis</h3>
                  <p className="text-4xl font-bold text-gray-900">845</p>
                  <div className="flex items-center mt-4">
                    <span className="text-green-500 font-medium">+15.3%</span>
                    <span className="text-gray-500 ml-2">vs last month</span>
                  </div>
                </div>
                <div className="bg-blue-50/50 p-4 rounded-xl">
                  <BarChart2 className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </motion.div>

            {/* Success Rate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_40px_-8px_rgba(0,0,0,0.15)] transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-gray-600 font-medium mb-2">Success Rate</h3>
                  <p className="text-4xl font-bold text-gray-900">94.2%</p>
                  <div className="flex items-center mt-4">
                    <span className="text-green-500 font-medium">+5.7%</span>
                    <span className="text-gray-500 ml-2">vs last month</span>
                  </div>
                </div>
                <div className="bg-blue-50/50 p-4 rounded-xl">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Insights Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Discover the latest trends and insights in finance and technology
            </p>
          </motion.div>

          {/* Featured Articles Grid */}
          <div className="grid lg:grid-cols-12 gap-6 mb-16">
            {/* Main Featured Article */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8 group"
            >
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img
                  src={featuredArticles[0].image}
                  alt={featuredArticles[0].title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium rounded-full text-gray-900">
                      {featuredArticles[0].category}
                    </span>
                    <span className="text-white/90 flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredArticles[0].readTime}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {featuredArticles[0].title}
                  </h3>
                  <p className="text-white/80 text-lg mb-6 line-clamp-2">
                    {featuredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <p className="text-white font-medium">{featuredArticles[0].author.name}</p>
                        <p className="text-white/70 text-sm">{featuredArticles[0].author.role}</p>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg font-medium hover:bg-white transition-colors flex items-center group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Secondary Featured Articles */}
            <div className="lg:col-span-4 grid grid-rows-2 gap-6">
              {featuredArticles.slice(1, 3).map((article, idx) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * (idx + 1), duration: 0.5 }}
                  className="relative group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all min-h-[280px] p-6 flex flex-col border border-gray-100"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-500 flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-100">
                    <div>
                      <p className="font-medium text-gray-900">{article.author.name}</p>
                      <p className="text-sm text-gray-500">{article.author.role}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Additional Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalArticles.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-500 flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-100">
                  <div>
                    <p className="font-medium text-gray-900">{article.author.name}</p>
                    <p className="text-sm text-gray-500">{article.author.role}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors group">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;