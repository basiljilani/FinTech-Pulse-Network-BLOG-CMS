import React from 'react';
import { Bot, Zap, Shield, Cpu, Clock, BarChart } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: <Bot className="h-8 w-8 text-blue-600" />,
      title: "AI Content Generation",
      description: "Leverage advanced AI algorithms to generate high-quality financial content automatically."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Real-time Processing",
      description: "Process and analyze market data in real-time for immediate content generation."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Compliance Check",
      description: "Automated compliance verification for all generated content."
    },
    {
      icon: <Cpu className="h-8 w-8 text-blue-600" />,
      title: "Smart Analytics",
      description: "Advanced analytics and insights for better decision making."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Scheduled Publishing",
      description: "Automated content scheduling and publishing system."
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-600" />,
      title: "Performance Tracking",
      description: "Comprehensive analytics and performance tracking tools."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900">Our Solutions</h1>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive automation solutions for your financial content needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Content Creation?</h2>
              <p className="mb-6">Experience the power of AI-driven financial content automation.</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Schedule a Demo
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-500 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">90%</div>
                <div className="text-blue-100">Time Saved</div>
              </div>
              <div className="bg-blue-500 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">99%</div>
                <div className="text-blue-100">Accuracy</div>
              </div>
              <div className="bg-blue-500 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-blue-100">Generation</div>
              </div>
              <div className="bg-blue-500 p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">100+</div>
                <div className="text-blue-100">Templates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}