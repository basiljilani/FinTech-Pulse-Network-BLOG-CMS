import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Rocket, Award, TrendingUp, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Community = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: Users,
      title: "Connect with Professionals",
      description: "Network with fintech experts, developers, and industry leaders worldwide."
    },
    {
      icon: MessageCircle,
      title: "Engage in Discussions",
      description: "Join meaningful conversations about the latest trends in financial technology."
    },
    {
      icon: Rocket,
      title: "Share Ideas",
      description: "Collaborate on innovative solutions and share your unique perspectives."
    },
    {
      icon: Award,
      title: "Expert Insights",
      description: "Learn from industry veterans and share your own expertise."
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Discover career opportunities and professional development resources."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Be part of a diverse, global community of fintech enthusiasts."
    }
  ];

  const upcomingEvents = [
    {
      title: "FinTech Innovation Summit",
      date: "January 15, 2024",
      type: "Virtual Conference",
      description: "Join industry leaders discussing the future of financial technology."
    },
    {
      title: "Blockchain Workshop Series",
      date: "February 1, 2024",
      type: "Workshop",
      description: "Hands-on sessions exploring blockchain technology in finance."
    },
    {
      title: "AI in Finance Meetup",
      date: "February 10, 2024",
      type: "Community Meetup",
      description: "Network and discuss AI applications in financial services."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      {/* Hero Section with improved spacing */}
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-32"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Join Our FinTech Community
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Connect, collaborate, and grow with fellow fintech enthusiasts and professionals
          </p>
        </motion.div>

        {/* Features Grid with improved spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1E293B] rounded-2xl p-8 hover:bg-[#1E293B]/80 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#8B5CF6]/20 rounded-xl flex items-center justify-center mb-6">
                {React.createElement(feature.icon, { className: 'w-7 h-7 text-[#8B5CF6]' })}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events Section with improved spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Community Events</h2>
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1E293B] rounded-xl p-8 hover:bg-[#1E293B]/80 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                    <p className="text-gray-400 mb-4">{event.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-[#8B5CF6]">{event.date}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-[#8B5CF6]">{event.type}</span>
                    </div>
                  </div>
                  <button className="md:mt-0 px-8 py-3 bg-[#8B5CF6] rounded-lg hover:bg-[#7C3AED] transition-colors whitespace-nowrap">
                    Join Event
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section with improved spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-center py-16"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Join?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Become part of our growing community and help shape the future of financial technology.
          </p>
          <button 
            className="px-10 py-4 bg-[#8B5CF6] rounded-xl hover:bg-[#7C3AED] transition-colors text-lg font-semibold"
            onClick={() => navigate('/community-discussions')}
          >
            Join the Community
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
