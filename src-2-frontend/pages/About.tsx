import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  BookOpen, 
  Users, 
  Brain,
  Globe,
  Shield,
  Zap,
  ChartBar,
  Building2,
  Newspaper,
  GraduationCap,
  Network,
  DollarSign,
  TrendingUp,
  Lightbulb,
  Code,
  LineChart,
  Rocket,
  Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const marketOpportunities = [
    {
      icon: TrendingUp,
      title: "Market Growth",
      description: "The professional content and insights market demonstrates remarkable strength with annual revenue for premium business content reaching $38.4 billion globally.",
      stats: "15% YoY Growth"
    },
    {
      icon: Lightbulb,
      title: "Innovation Gap",
      description: "Traditional publications lack community engagement and interactive learning features, while professional networks lack specialized focus and premium content quality.",
      stats: "27% Higher Subscription Rates"
    },
    {
      icon: Building2,
      title: "Enterprise Demand",
      description: "Financial services sector spends more on premium content than any other industry, with executives allocating significant budgets to staying current.",
      stats: "$2,800 Annual Spend"
    }
  ];

  const platformFeatures = [
    {
      icon: Newspaper,
      title: "Premium Content Hub",
      description: "Access cutting-edge insights and analysis from industry leaders",
      details: [
        "Banking Innovation Reports",
        "Regulatory Technology Updates",
        "AI Applications Case Studies",
        "Emerging Fintech Trends",
        "Digital Transformation Guides"
      ]
    },
    {
      icon: GraduationCap,
      title: "Interactive Learning",
      description: "Transform passive reading into active knowledge acquisition",
      details: [
        "Expert-led Discussions",
        "Implementation Workshops",
        "Case Study Breakdowns",
        "Peer Learning Groups",
        "Industry Roundtables"
      ]
    },
    {
      icon: Network,
      title: "Professional Community",
      description: "Build meaningful connections within the fintech ecosystem",
      details: [
        "Industry-specific Networking",
        "Expert Verification System",
        "Knowledge Sharing Forums",
        "Collaborative Problem-solving",
        "Mentorship Opportunities"
      ]
    }
  ];

  const growthPhases = [
    {
      icon: Rocket,
      phase: "Phase 1: Content Foundation",
      items: [
        "500+ Premium Articles",
        "50 Industry Expert Partners",
        "Editorial Standards Framework",
        "Community Guidelines",
        "Content Quality Metrics"
      ]
    },
    {
      icon: Code,
      phase: "Phase 2: Community Growth",
      items: [
        "Interactive Feature Suite",
        "Expert Verification System",
        "Learning Program Launch",
        "Content Category Expansion",
        "Community Events Platform"
      ]
    },
    {
      icon: LineChart,
      phase: "Phase 3: Enterprise Expansion",
      items: [
        "Team Collaboration Tools",
        "Enterprise API Access",
        "Custom Solution Development",
        "Global Market Expansion",
        "Advanced Analytics Suite"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-40 pb-24 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Bloomberg of
              <span className="block mt-2 text-indigo-400">
                Tomorrow
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Fintech Pulse Network is positioning itself to become the definitive source for fintech, banking, regulatory, and AI insights – combining premium content with an engaged professional community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="bg-gray-900 px-4 py-2 rounded-full">50,000+ Registered Users</div>
              <div className="bg-gray-900 px-4 py-2 rounded-full">7,500+ Premium Subscribers</div>
              <div className="bg-gray-900 px-4 py-2 rounded-full">100+ Enterprise Clients</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4">Market Opportunity</h2>
            <p className="text-gray-400">
              The professional content and insights market demonstrates unprecedented potential for growth and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketOpportunities.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-gray-900 rounded-lg p-8 relative overflow-hidden group"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                    {React.createElement(item.icon, { className: "w-6 h-6 text-indigo-400" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="text-indigo-400 font-semibold">{item.stats}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4">The Premium Knowledge Network</h2>
            <p className="text-gray-400">
              A comprehensive ecosystem that combines premium content, interactive learning, and professional networking
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-gray-900 rounded-lg p-8 relative group"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                    {React.createElement(feature.icon, { className: "w-6 h-6 text-indigo-400" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-400">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Strategy */}
      <section className="py-24 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4">Growth Strategy</h2>
            <p className="text-gray-400">
              Our comprehensive roadmap to revolutionize fintech knowledge sharing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {growthPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                className="bg-gray-900 rounded-lg p-8"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  {React.createElement(phase.icon, { className: "w-6 h-6 text-indigo-400" })}
                </div>
                <h3 className="text-xl font-semibold mb-6">{phase.phase}</h3>
                <ul className="space-y-4">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4">Subscription Plans</h2>
            <p className="text-gray-400">
              Choose the plan that best fits your professional development needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-900 rounded-lg p-8 relative group"
              {...fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-xl font-semibold mb-2">Basic</div>
                <div className="text-indigo-400 mb-6">Free</div>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    Limited access to articles
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    Basic community features
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    Industry news updates
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    Public discussion access
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-900 rounded-lg p-8 relative group"
              {...fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute -top-4 right-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">Popular</div>
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-xl font-semibold mb-2">Professional</div>
                <div className="text-indigo-400 mb-6">$29/month</div>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    Full content access
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    Community participation
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    Interactive learning features
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    Expert-led workshops
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    Networking events access
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-900 rounded-lg p-8 relative group"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-xl font-semibold mb-2">Enterprise</div>
                <div className="text-indigo-400 mb-6">$499/month</div>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    Team licenses (up to 20 users)
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    Custom content curation
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    Private discussion groups
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    Advanced analytics dashboard
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    API integration access
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
                    Priority support
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
