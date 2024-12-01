import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  MessageCircle, 
  Lightbulb, 
  Cpu,
  Check
} from 'lucide-react';
import Footer from '../components/Footer';

const AiCompanion: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const companionFeatures = [
    {
      icon: Brain,
      title: 'Adaptive Learning',
      description: 'Our AI dynamically learns from your interactions, continuously refining its understanding of your financial context.',
      benefits: [
        'Personalized Insights',
        'Contextual Understanding',
        'Evolving Intelligence'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Strategic Insights',
      description: 'Generate comprehensive, actionable strategies by analyzing complex financial data and market trends.',
      benefits: [
        'Data-Driven Recommendations',
        'Risk Assessment',
        'Predictive Analysis'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Interactive Dialogue',
      description: 'Engage in natural, meaningful conversations about financial opportunities, trends, and strategic planning.',
      benefits: [
        'Conversational Interface',
        'Instant Responses',
        'Comprehensive Explanations'
      ]
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="grid md:grid-cols-3 gap-8">
            {companionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">{feature.description}</p>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );
      case 'capabilities':
        return (
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Companion Capabilities</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                Real-time market trend analysis
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                Personalized investment strategy recommendations
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                Contextual financial news summaries
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                Interactive learning and Q&A sessions
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                Predictive financial modeling
              </li>
            </ul>
          </div>
        );
      case 'pricing':
        return (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">$10/mo</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>10 AI Interaction Tokens</li>
                <li>Basic Insights</li>
                <li>Limited Market Analysis</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white border-2 border-blue-600 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pro</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">$25/mo</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>500 AI Interaction Tokens</li>
                <li>Advanced Insights</li>
                <li>Comprehensive Market Analysis</li>
                <li>Priority Support</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Upgrade
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">Custom</p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>Unlimited AI Tokens</li>
                <li>Dedicated AI Companion</li>
                <li>Custom Integration</li>
                <li>White-Glove Support</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" 
        style={{
          backgroundSize: '100px 100px',
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)'
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 pt-36 pb-12 relative z-10"
      >
        <div className="flex items-center justify-center mb-8">
          <Cpu className="h-12 w-12 text-blue-600 mr-4" />
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Pulse AI: <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">Your Ultimate Learning Companion</span>
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
          Your intelligent guide through the complex world of financial technology, delivering personalized insights and strategic knowledge.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="container mx-auto px-6 mb-8 relative z-10">
        <div className="flex justify-center space-x-4">
          {['overview', 'capabilities', 'pricing'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg capitalize font-semibold transition-all ${
                activeTab === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content */}
      <section className="container mx-auto px-6 py-12 relative z-10">
        {renderTabContent()}
      </section>

      <Footer />
    </div>
  );
};

export default AiCompanion;
