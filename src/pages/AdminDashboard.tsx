import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Tag, FileText, LogOut } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: 'Manage Users',
      icon: Users,
      description: 'Add, edit, or remove users and their roles',
      onClick: () => navigate('/admin/users')
    },
    {
      title: 'Manage Categories',
      icon: Tag,
      description: 'Organize and manage article categories',
      onClick: () => navigate('/admin/categories')
    },
    {
      title: 'Manage Articles',
      icon: FileText,
      description: 'View and manage all articles',
      onClick: () => navigate('/admin/articles')
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-400 mt-1">Manage your platform</p>
          </div>
          <button
            onClick={() => {
              // Add logout logic here
              navigate('/admin');
            }}
            className="flex items-center px-4 py-2 text-sm text-red-400 hover:text-red-300 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-colors text-left"
            >
              <item.icon className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
