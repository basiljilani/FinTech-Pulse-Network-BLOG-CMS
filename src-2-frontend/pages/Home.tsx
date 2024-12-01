import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  BookOpen, 
  Check, 
  Globe, 
  Award,
  ArrowRight,
  TrendingUp,
  Users
} from 'lucide-react';
import Footer from '../components/Footer';

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"
        style={{
          backgroundSize: '100px 100px',
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)'
        }}
      />
      <div 
        className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-white/5 rotate-45"
        style={{
          backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(14, 165, 233, 0.1) 50%, transparent 100%)'
        }}
      />
    </div>
  );
};

const Home: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms delivering personalized financial intelligence.",
      color: "text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Curated Knowledge",
      description: "Expertly selected content from top financial thought leaders and institutions.",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Strategic Analysis",
      description: "Comprehensive market trends and predictive analytics for informed decisions.",
      color: "text-purple-600"
    }
  ];

  const valuePropositions = [
    {
      icon: Users,
      title: "Professional Network",
      description: "Connect with industry experts and peers in a collaborative ecosystem.",
      benefits: [
        "Exclusive Networking",
        "Peer Insights",
        "Career Opportunities"
      ]
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Comprehensive insights spanning international financial markets and trends.",
      benefits: [
        "Multi-Market Coverage",
        "Cross-Border Strategies",
        "Cultural Insights"
      ]
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description: "Adaptive learning platform tailored to your professional growth trajectory.",
      benefits: [
        "Personalized Content",
        "Skill Development",
        "Expert Mentorship"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <HeroBackground />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-36 pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Elevate Your 
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"> Financial Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Harness the power of AI-driven insights, curated knowledge, and strategic analysis to transform your financial decision-making.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center group shadow-lg hover:shadow-xl">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3.5 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center group">
              Explore Features
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Core Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative technologies designed to empower your financial journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-xl transition-all group"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Designed for Your Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions that adapt to your unique professional needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {valuePropositions.map((proposition, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <proposition.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {proposition.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">{proposition.description}</p>
                <div className="space-y-3">
                  {proposition.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;