import React from 'react';
import { ArrowRight, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  isPremium?: boolean;
}

export default function CategoryCard({ title, description, icon, href, isPremium = false }: CategoryCardProps) {
  return (
    <Link to={href} className="block">
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow relative">
        {isPremium && (
          <div className="absolute top-4 right-4">
            <Crown className="h-5 w-5 text-amber-400" />
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="p-2 bg-blue-50 rounded-lg">
            {icon}
          </div>
          {!isPremium && <ArrowRight className="h-5 w-5 text-blue-600" />}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </Link>
  );
}