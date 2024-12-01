import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Globe, 
  Zap, 
  Users, 
  BookOpen, 
  Cpu, 
  Layers, 
  TrendingUp 
} from 'lucide-react';

const SolutionCard = ({ icon: Icon, title, description, color }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all group"
  >
    <div className={`bg-${color}-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
      <Icon className={`h-8 w-8 text-${color}-600`} />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
);

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Cpu,
      title: "AI-Curated Articles",
      description: "Hyper-relevant industry news tailored to individual user profiles.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Real-Time AI Engagement",
      description: "Interactive discussions with an AI agent that understands your expertise.",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Token-Based Interaction",
      description: "Meaningful AI engagement with scalable monetization through tiered tokens.",
      color: "purple"
    }
  ];

  const valuePropositions = [
    {
      icon: Globe,
      title: "Market Opportunity",
      description: "Bridging fintech and education markets worth over $1 trillion by 2030.",
      details: [
        "Fintech market: $698 billion by 2030",
        "EdTech market: $400 billion by 2028",
        "Unique positioning at market intersection"
      ]
    },
    {
      icon: Layers,
      title: "Scalability Roadmap",
      description: "Strategic expansion across fintech verticals and global markets.",
      details: [
        "Phase 1: User Growth and Community Building",
        "Phase 2: AI Capability Expansion",
        "Phase 3: Market Domination and Vertical Expansion"
      ]
    },
    {
      icon: BookOpen,
      title: "Revenue Model",
      description: "Flexible monetization through subscriptions, tokens, and enterprise solutions.",
      details: [
        "Basic Tier: $10/month",
        "Pro Tier: $25/month",
        "Enterprise: Custom Pricing",
        "Additional Token Purchases Available"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            FinTech Pulse: 
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"> Transforming Financial Knowledge</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Redefining how professionals, students, and enthusiasts engage with financial technology through AI-powered, interactive learning and insights.
          </p>
        </motion.div>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Innovative technologies designed to revolutionize financial information consumption.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard 
                key={index} 
                icon={solution.icon} 
                title={solution.title} 
                description={solution.description} 
                color={solution.color} 
              />
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why FinTech Pulse is Unmissable</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unique value propositions that set us apart in the fintech education landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {valuePropositions.map((proposition, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <proposition.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {proposition.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">{proposition.description}</p>
                <div className="space-y-3">
                  {proposition.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <Target className="h-5 w-5 text-blue-500 mr-2" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solutions;