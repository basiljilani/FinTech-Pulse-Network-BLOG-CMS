import React from 'react';
import CategoryCard from '../components/CategoryCard';
import { BarChart3, Newspaper, PieChart, BookOpen, TrendingUp, NewspaperIcon } from 'lucide-react';

export default function Categories() {
  const categories = [
    {
      title: "Market Analysis",
      description: "Automated market trend analysis and reporting with real-time data integration.",
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      href: '/market-analysis',
      isPremium: true
    },
    {
      title: "Financial News",
      description: "AI-powered news summarization and content curation for financial markets.",
      icon: <Newspaper className="h-6 w-6 text-blue-600" />,
      href: '/financial-news'
    },
    {
      title: "Investment Reports",
      description: "Comprehensive investment report generation with data-driven insights.",
      icon: <PieChart className="h-6 w-6 text-blue-600" />,
      href: '/investment-reports',
      isPremium: true
    },
    {
      title: "Research Papers",
      description: "Automated financial research paper generation with academic precision.",
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      href: '/research-papers',
      isPremium: true
    },
    {
      title: "Trading Updates",
      description: "Real-time trading updates and analysis for market participants.",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      href: '/trading-updates'
    },
    {
      title: "Regulatory Content",
      description: "Compliance-focused content generation for regulatory requirements.",
      icon: <NewspaperIcon className="h-6 w-6 text-blue-600" />,
      href: '/regulatory-content',
      isPremium: true
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Content Categories</h1>
          <p className="mt-4 text-xl text-gray-600">
            Explore our specialized content automation solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              icon={category.icon}
              href={category.href}
              isPremium={category.isPremium}
            />
          ))}
        </div>
      </div>
    </div>
  );
}